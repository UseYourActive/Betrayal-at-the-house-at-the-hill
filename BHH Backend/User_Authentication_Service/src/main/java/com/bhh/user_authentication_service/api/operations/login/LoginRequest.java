package com.bhh.user_authentication_service.api.operations.login;

import com.bhh.user_authentication_service.api.base.OperationInput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class LoginRequest implements OperationInput {
    private String username;
    private String password;
}
