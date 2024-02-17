package com.bhh.user_authentication_service.core.processors;

import com.bhh.user_authentication_service.api.operations.login.LoginOperation;
import com.bhh.user_authentication_service.api.operations.login.LoginRequest;
import com.bhh.user_authentication_service.api.operations.login.LoginResponse;
import com.bhh.user_authentication_service.core.exceptions.UserNotFoundException;
import com.bhh.user_authentication_service.persistence.entities.Token;
import com.bhh.user_authentication_service.persistence.entities.User;
import com.bhh.user_authentication_service.persistence.enums.TokenType;
import com.bhh.user_authentication_service.persistence.repositories.TokenRepository;
import com.bhh.user_authentication_service.persistence.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class LoginOperationProcessor implements LoginOperation {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;

    @Override
    public LoginResponse process(final LoginRequest request) {
        log.info("Processing request to log in with username: {}", request.getUsername());

        Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        User user = userRepository.findUserByUsername(request.getUsername())
                .orElseThrow(() -> {
                    log.warn("User with username {} not found", request.getUsername());
                    return new UserNotFoundException();
                });

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            log.warn("Incorrect password provided for user with username: {}", request.getUsername());
            throw new UserNotFoundException("Incorrect password");
        }

        String jwt = jwtService.generateToken(user);

        log.info("User found with username {}: {}", request.getUsername(), user);

        Token token = saveUserToken(user, jwt);

        LoginResponse response = LoginResponse.builder()
                .id(String.valueOf(user.getId()))
                .username(user.getUsername())
                .jwt(token.getToken())
                .build();

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
}
