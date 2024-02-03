package com.bhh.user_authentication_service.api.operations.create;

import com.bhh.user_authentication_service.api.base.OperationOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class CreateUserResponse implements OperationOutput {
    private String id;
    private String username;
}
