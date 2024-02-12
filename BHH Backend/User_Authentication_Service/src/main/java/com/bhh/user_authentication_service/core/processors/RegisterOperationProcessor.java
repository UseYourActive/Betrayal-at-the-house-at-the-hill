package com.bhh.user_authentication_service.core.processors;

import com.bhh.user_authentication_service.api.operations.register.RegisterOperation;
import com.bhh.user_authentication_service.api.operations.register.RegisterRequest;
import com.bhh.user_authentication_service.api.operations.register.RegisterResponse;
import com.bhh.user_authentication_service.core.exceptions.NotMatchingPasswordsException;
import com.bhh.user_authentication_service.core.exceptions.UsernameAlreadyExistsException;
import com.bhh.user_authentication_service.persistence.entities.Token;
import com.bhh.user_authentication_service.persistence.entities.User;
import com.bhh.user_authentication_service.persistence.enums.Role;
import com.bhh.user_authentication_service.persistence.enums.TokenType;
import com.bhh.user_authentication_service.persistence.repositories.TokenRepository;
import com.bhh.user_authentication_service.persistence.repositories.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
@Tag(name = "User Operations", description = "APIs for user operations")
public class RegisterOperationProcessor implements RegisterOperation {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;
    private final JwtService jwtService;

    @Operation(summary = "Create a new user")
    @Override
    public RegisterResponse process(final RegisterRequest request) {
        log.info("Processing to register a new user with username: {}", request.getUsername());

        Optional<User> userByUsername = userRepository.findUserByUsername(request.getUsername());

        if (userByUsername.isPresent()) {
            log.error("Username '{}' already exists", request.getUsername());
            throw new UsernameAlreadyExistsException("User with given username already exists!");
        }

        String username = request.getUsername();
        String password = request.getPassword();
//        String repeatedPassword = request.getRepeatedPassword();
        String encodedPassword = passwordEncoder.encode(password);

//        if (!password.equals(repeatedPassword)) {
//            log.error("Passwords do not match for username '{}'", request.getUsername());
//            throw new NotMatchingPasswordsException("Provided passwords do not match");
//        }

        User user = User.builder()
                .password(encodedPassword)
                .username(username)
                .role(Role.USER)
                .build();

        log.debug("Saving user to the database: {}", user);
        User savedUser = userRepository.save(user);
        log.debug("User saved successfully: {}", savedUser);

        String jwt = jwtService.generateToken(user);

        revokeAllUserTokens(user);
        Token token = saveUserToken(savedUser, jwt);

        Token savedToken = tokenRepository.save(token);

        RegisterResponse response = mapToResponse(savedUser, savedToken.getToken());

        log.info("Returning response for user with username {}: {}", request.getUsername(), response);
        return response;
    }

    private Token saveUserToken(User user, String jwt) {
        Token token = Token.builder()
                .user(user)
                .token(jwt)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();

        Token savedToken = tokenRepository.save(token);

        return savedToken;
    }

    private RegisterResponse mapToResponse(User user, String jwt) {
        return RegisterResponse.builder()
                .id(String.valueOf(user.getId()))
                .role(String.valueOf(user.getRole()))
                .username(user.getUsername())
                .jwt(jwt)
                .build();
    }

    private void revokeAllUserTokens(User user) {
        List<Token> allValidTokenByUser = tokenRepository.findAllValidTokenByUser(user.getId());

        if (allValidTokenByUser.isEmpty()) {
            return;
        }

        allValidTokenByUser.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });

        tokenRepository.saveAll(allValidTokenByUser);
    }
}
