package com.bhh.user_authentication_service.api.operations.create;

import com.bhh.user_authentication_service.api.base.OperationInput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class CreateUserRequest implements OperationInput {
    private String username;
    private String password;
}
