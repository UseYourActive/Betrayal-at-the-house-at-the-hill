package com.bhh.user_authentication_service.export;

import com.bhh.user_authentication_service.api.operations.register.RegisterRequest;
import com.bhh.user_authentication_service.api.operations.register.RegisterResponse;
import com.bhh.user_authentication_service.api.operations.login.LoginResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "user-auth-service", url = "http://localhost:8081")
public interface UserAuthFeignClient {

    @RequestMapping(method = RequestMethod.POST, value = "/users/create")
    ResponseEntity<RegisterResponse> createUser(@RequestBody RegisterRequest request);

    @RequestMapping(method = RequestMethod.GET, value = "/users/{username}")
    ResponseEntity<LoginResponse> findUserByUsername(@PathVariable("username") String username);
}
