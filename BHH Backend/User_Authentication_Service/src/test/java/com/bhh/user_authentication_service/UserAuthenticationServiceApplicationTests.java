package com.bhh.user_authentication_service;


import com.bhh.user_authentication_service.export.UserAuthFeignClient;
import com.bhh.user_authentication_service.rest.UserAuthenticationServiceApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

@ActiveProfiles("test")
@SpringBootTest(classes = UserAuthenticationServiceApplication.class)
class UserAuthenticationServiceApplicationTests {

    @Autowired
    private UserAuthFeignClient userAuthFeignClient;

    @MockBean
    private UserAuthFeignClient mockUserAuthFeignClient;
}
