package com.bhh.user_authentication_service.api.base;

public interface OperationProcessor<Response extends OperationOutput, Request extends OperationInput> {
    Response process(Request request);
}
