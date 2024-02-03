package com.bhh.user_authentication_service;

import com.bhh.user_authentication_service.api.operations.create.CreateUserRequest;
import com.bhh.user_authentication_service.api.operations.create.CreateUserResponse;
import com.bhh.user_authentication_service.export.UserAuthFeignClient;
import com.bhh.user_authentication_service.rest.UserAuthenticationServiceApplication;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ActiveProfiles("test")
@SpringBootTest(classes = UserAuthenticationServiceApplication.class)
class UserAuthenticationServiceApplicationTests {

    @Autowired
    private UserAuthFeignClient userAuthFeignClient;

    @MockBean
    private UserAuthFeignClient mockUserAuthFeignClient;

    @Test
    public void testCreateUser() {
        // Mock the Feign client response
        when(mockUserAuthFeignClient.createUser(any(CreateUserRequest.class)))
                .thenReturn(ResponseEntity.ok(new CreateUserResponse("195fa29e-4e32-40ec-a3d9-8ffced88d02e", "username")));

        // Call the Feign client method
        ResponseEntity<CreateUserResponse> responseEntity = userAuthFeignClient.createUser(new CreateUserRequest("username"));

        // Verify the response
        assertNotNull(responseEntity);
        assertNotNull(responseEntity.getBody());
        assertEquals("195fa29e-4e32-40ec-a3d9-8ffced88d02e", responseEntity.getBody().getId());
        assertEquals("username", responseEntity.getBody().getUsername());
    }
}
