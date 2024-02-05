package com.bhh.characters_service.persistence.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TraitType {
    PHYSICAL("Physical"),
    MENTAL("Mental");

    private final String traitType;
}
