package com.bhh.user_authentication_service.rest.controllers;

import com.bhh.user_authentication_service.api.operations.create.CreateUserOperation;
import com.bhh.user_authentication_service.api.operations.create.CreateUserRequest;
import com.bhh.user_authentication_service.api.operations.create.CreateUserResponse;
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
