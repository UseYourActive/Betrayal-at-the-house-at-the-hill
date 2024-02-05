package com.bhh.characters_service.persistence.enums;

import lombok.Getter;

@Getter
public enum CharacterStats {
    DEATH(0),
    ONE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5),
    SIX(6),
    SEVEN(7),
    EIGHT(8);

    private Integer value;
    private final Integer pointer;

    CharacterStats(Integer pointer) {
        this.pointer = pointer;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

}
