package com.bhh.user_authentication_service.api.operations.find.byusername;

import com.bhh.user_authentication_service.api.base.OperationInput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class FindUserByUsernameRequest implements OperationInput {
    private String username;
}
