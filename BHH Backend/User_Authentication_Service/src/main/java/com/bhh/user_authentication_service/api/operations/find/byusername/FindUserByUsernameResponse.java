package com.bhh.user_authentication_service.api.operations.find.byusername;

import com.bhh.user_authentication_service.api.base.OperationOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@AllArgsConstructor
@Getter
public class FindUserByUsernameResponse implements OperationOutput {
    private String id;
    private String username;
}
