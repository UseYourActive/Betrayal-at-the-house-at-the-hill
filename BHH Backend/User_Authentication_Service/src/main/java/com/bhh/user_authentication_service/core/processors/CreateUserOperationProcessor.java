package com.bhh.user_authentication_service.core.processors;

import com.bhh.user_authentication_service.api.operations.register.RegisterOperation;
import com.bhh.user_authentication_service.api.operations.register.RegisterRequest;
import com.bhh.user_authentication_service.api.operations.register.RegisterResponse;
import com.bhh.user_authentication_service.core.exceptions.NotMatchingPasswordsException;
import com.bhh.user_authentication_service.core.exceptions.UsernameAlreadyExistsException;
import com.bhh.user_authentication_service.persistence.entities.User;
import com.bhh.user_authentication_service.persistence.repositories.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Tag(name = "User Operations", description = "APIs for user operations")
public class CreateUserOperationProcessor implements RegisterOperation {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Operation(summary = "Create a new user")
    @Override
    public RegisterResponse process(final RegisterRequest request) {
        log.info("Processing CreateUserOperation for username: {}", request.getUsername());

        Optional<User> userByUsername = userRepository.findUserByUsername(request.getUsername());

        if (userByUsername.isPresent()) {
            log.error("Username '{}' already exists", request.getUsername());
            throw new UsernameAlreadyExistsException("User with given username already exists!");
        }

        String firstName = request.getFirstName();
        String lastName = request.getLastName();
        String repeatedPassword = request.getRepeatedPassword();
        String username = request.getUsername();
        String password = request.getPassword();
        String encodedPassword = passwordEncoder.encode(password);

        if (!password.equals(repeatedPassword)) {
            log.error("Passwords do not match for username '{}'", request.getUsername());
            throw new NotMatchingPasswordsException("Provided passwords do not match");
        }

        User user = User.builder()
                .firstName(firstName)
                .lastName(lastName)
                .password(encodedPassword)
                .username(username)
                .build();

        log.debug("Saving user to the database: {}", user);
        User savedUser = userRepository.save(user);
        log.debug("User saved successfully: {}", savedUser);

        String jwt = jwtService.generateToken(user);

        RegisterResponse createUserResponse = mapToResponse(savedUser, jwt);

        log.info("CreateUserOperation processed successfully for username: {}", request.getUsername());
        return createUserResponse;
    }

    private RegisterResponse mapToResponse(User user, String jwt) {
        return RegisterResponse.builder()
                .id(String.valueOf(user.getId()))
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .username(user.getUsername())
                .jwt(jwt)
                .build();
    }
}
