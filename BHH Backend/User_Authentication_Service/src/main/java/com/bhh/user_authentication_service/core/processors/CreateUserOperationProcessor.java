package com.bhh.user_authentication_service.core.processors;

import com.bhh.user_authentication_service.api.operations.create.CreateUserOperation;
import com.bhh.user_authentication_service.api.operations.create.CreateUserRequest;
import com.bhh.user_authentication_service.api.operations.create.CreateUserResponse;
import com.bhh.user_authentication_service.core.mappers.CreateUserMapper;
import com.bhh.user_authentication_service.persistence.entities.User;
import com.bhh.user_authentication_service.persistence.repositories.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
@Tag(name = "User Operations", description = "APIs for user operations")
public class CreateUserOperationProcessor implements CreateUserOperation {
    private final UserRepository userRepository;
    private final CreateUserMapper mapper;

    @Operation(summary = "Create a new user")
    @Override
    public CreateUserResponse process(final CreateUserRequest request) {
        log.info("Processing CreateUserOperation for username: {}", request.getUsername());

        String username = request.getUsername();

        User user = User.builder()
                .username(username)
                .build();

        log.debug("Saving user to the database: {}", user);
        User savedUser = userRepository.save(user);
        log.debug("User saved successfully: {}", savedUser);

        CreateUserResponse createUserResponse = mapper.mapToResponse(savedUser);

        log.info("CreateUserOperation processed successfully for username: {}", request.getUsername());
        return createUserResponse;
    }
}
