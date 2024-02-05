package com.bhh.characters_service.persistence.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public enum CharacterType {
    ZOE_INGSTROM("Zoe Ingstrom", 8, "November 5th", List.of("nz"), 49, 3.9, 4, 3, 5 , 3);
    //BRANDON_JASPERS("Brandon Jaspers", 12, "May 21st", List.of("Computers", "Camping", "Hocket"), 109, 5.1);
    private final String name;
    private final Integer age;
    private final String birthday;
    private final List<String> hobbies;
    private final Integer weight;
    private final Double height;
    private final Integer speed;
    private final Integer might;
    private final Integer sanity;
    private final Integer knowledge;
}
