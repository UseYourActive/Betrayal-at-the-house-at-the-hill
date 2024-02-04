package com.bhh.user_authentication_service.export;

import com.bhh.user_authentication_service.api.operations.create.CreateUserRequest;
import com.bhh.user_authentication_service.api.operations.create.CreateUserResponse;
import com.bhh.user_authentication_service.api.operations.find.byusername.FindUserByUsernameResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-auth-service", url = "http://localhost:8081")
public interface UserAuthFeignClient {

    @PostMapping("/users/create")
    ResponseEntity<CreateUserResponse> createUser(@RequestBody CreateUserRequest request);

    @GetMapping("/users/{username}")
    ResponseEntity<FindUserByUsernameResponse> findUserByUsername(@PathVariable("username") String username);
}
