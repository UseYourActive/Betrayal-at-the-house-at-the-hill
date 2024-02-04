package com.bhh.user_authentication_service.rest.controllers;

import com.bhh.user_authentication_service.api.operations.create.CreateUserOperation;
import com.bhh.user_authentication_service.api.operations.create.CreateUserRequest;
import com.bhh.user_authentication_service.api.operations.create.CreateUserResponse;
import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameOperation;
import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameRequest;
import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameResponse;
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
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final CreateUserOperation createUserOperation;
    private final FindUserByUsernameOperation findUserByUsernameOperation;

    //region GET
    @Transactional
    @ApiResponses(value = {
            @ApiResponse(responseCode = "202", description = "Successfully found a user."),
            @ApiResponse(responseCode = "400", description = "Bad request", content = @Content(mediaType = "text/html"))
    })
    @Operation(description = "From the users request finds an already existing in the database user.",
            summary = "Finds a user by username.")
    @GetMapping(path = "/{username}")
    public ResponseEntity<FindUserByUsernameResponse> findUserByUsername(@PathVariable(value = "username") String input) {
        FindUserByUsernameRequest request = FindUserByUsernameRequest.builder()
                .username(input)
                .build();

        return new ResponseEntity<>(findUserByUsernameOperation.process(request), HttpStatus.ACCEPTED);
    }
    //endregion

    //region POST
    @Transactional
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Successfully create a user."),
            @ApiResponse(responseCode = "400", description = "Bad request", content = @Content(mediaType = "text/html"))
    })
    @Operation(description = "From the users request creates a new user that does not exist in the database yet.",
            summary = "Creates a new user.")
    @PostMapping(path = "/create")
    public ResponseEntity<CreateUserResponse> createUser(@Valid @RequestBody CreateUserRequest request) {
        return new ResponseEntity<>(createUserOperation.process(request), HttpStatus.CREATED);
    }
    //endregion

    //region PUT
    //endregion

    //region DELETE
    //endregion
}
