package com.bhh.characters_service.persistence.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TraitType {
//    PHYSICAL("Physical"),
//    MENTAL("Mental");
    SPEED("Speed"),
    MIGHT("Might"),
    SANITY("Sanity"),
    KNOWLEDGE("Knowledge");

    private final String traitType;

    public boolean isPhysical() {
        return this == SPEED || this == MIGHT;
    }

    public boolean isMental() {
        return this == SANITY || this == KNOWLEDGE;
    }
}
