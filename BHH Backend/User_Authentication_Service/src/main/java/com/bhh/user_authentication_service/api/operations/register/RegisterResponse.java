package com.bhh.user_authentication_service.api.operations.register;

import com.bhh.user_authentication_service.api.base.OperationOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class RegisterResponse implements OperationOutput {
    private String id;
    private String username;
    private String role;
    private String jwt;
}
