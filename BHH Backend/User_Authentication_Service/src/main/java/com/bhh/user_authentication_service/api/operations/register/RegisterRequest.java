package com.bhh.user_authentication_service.api.operations.register;

import com.bhh.user_authentication_service.api.base.OperationInput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class RegisterRequest implements OperationInput {
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String repeatedPassword;
}
