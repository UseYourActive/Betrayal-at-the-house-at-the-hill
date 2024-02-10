package com.bhh.user_authentication_service.rest.controllers;

import com.bhh.user_authentication_service.api.operations.register.RegisterOperation;
import com.bhh.user_authentication_service.api.operations.register.RegisterRequest;
import com.bhh.user_authentication_service.api.operations.register.RegisterResponse;
import com.bhh.user_authentication_service.api.operations.login.LoginOperation;
import com.bhh.user_authentication_service.api.operations.login.LoginRequest;
import com.bhh.user_authentication_service.api.operations.login.LoginResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    private final RegisterOperation registerOperation;
    private final LoginOperation loginOperation;

    //region GET
    //endregion

    //region POST
    @Transactional
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully create a user."),
            @ApiResponse(responseCode = "400", description = "Bad request", content = @Content(mediaType = "text/html"))
    })
    @Operation(description = "From the users request creates a new user that does not exist in the database yet.",
            summary = "Creates a new user.")
    @PostMapping(path = "/register")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest request) {
        return new ResponseEntity<>(registerOperation.process(request), HttpStatus.CREATED);
    }

    @Transactional
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Successfully found a user."),
            @ApiResponse(responseCode = "400", description = "Bad request", content = @Content(mediaType = "text/html"))
    })
    @Operation(description = "From the users request finds an already existing in the database user.",
            summary = "Finds a user by username.")
    @PostMapping(path = "/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        request = LoginRequest.builder()
                .username(request.getUsername())
                .password(request.getPassword())
                .build();

        return new ResponseEntity<>(loginOperation.process(request), HttpStatus.ACCEPTED);
    }
    //endregion

    //region PUT
    //endregion

    //region DELETE
    //endregion
}
