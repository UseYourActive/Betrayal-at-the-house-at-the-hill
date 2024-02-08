package com.bhh.user_authentication_service.api.operations.login;

import com.bhh.user_authentication_service.api.base.OperationOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@AllArgsConstructor
@Getter
public class LoginResponse implements OperationOutput {
    private String id;
    private String username;
    private String jwt;
}
