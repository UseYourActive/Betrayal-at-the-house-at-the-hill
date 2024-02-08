package com.bhh.user_authentication_service.export;

import com.bhh.user_authentication_service.api.operations.register.RegisterRequest;
import com.bhh.user_authentication_service.api.operations.register.RegisterResponse;
import com.bhh.user_authentication_service.api.operations.login.LoginResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "user-auth-service", url = "http://localhost:8081")
public interface UserAuthFeignClient {

    @PostMapping("/users/create")
    ResponseEntity<RegisterResponse> createUser(@RequestBody RegisterRequest request);

    @GetMapping("/users/{username}")
    ResponseEntity<LoginResponse> findUserByUsername(@PathVariable("username") String username);
}
