package com.bhh.user_authentication_service.persistence.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Role {
    USER("User"),
    ADMIN("Admin");

    private final String role;
}
