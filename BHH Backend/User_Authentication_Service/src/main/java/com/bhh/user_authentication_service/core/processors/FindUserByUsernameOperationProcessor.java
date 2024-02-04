package com.bhh.user_authentication_service.core.processors;

import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameOperation;
import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameRequest;
import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameResponse;
import com.bhh.user_authentication_service.core.exceptions.UserNotFoundException;
import com.bhh.user_authentication_service.persistence.entities.User;
import com.bhh.user_authentication_service.persistence.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class FindUserByUsernameOperationProcessor implements FindUserByUsernameOperation {

    private final UserRepository userRepository;

    @Override
    public FindUserByUsernameResponse process(final FindUserByUsernameRequest request) {
        log.info("Processing request to find user by username: {}", request.getUsername());

        User user = userRepository.findUserByUsername(request.getUsername())
                .orElseThrow(() -> {
                    log.warn("User with username {} not found", request.getUsername());
                    return new UserNotFoundException();
                });

        log.info("User found with username {}: {}", request.getUsername(), user);

        FindUserByUsernameResponse response = FindUserByUsernameResponse.builder()
                .id(String.valueOf(user.getId()))
                .username(user.getUsername())
                .build();

        log.info("Returning response for user with username {}: {}", request.getUsername(), response);
        return response;
    }
}
