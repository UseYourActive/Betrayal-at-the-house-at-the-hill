package com.bhh.characters_service.persistence.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public enum CharacterType {
    ZOE_INGSTROM("Zoe Ingstrom",  "November 5th", "Dolls, Music", 8,"49 lbs", "3'9\"", 4, 3, 5 , 3),
    BRANDON_JASPERS("Brandon Jaspers",  "May 21st", "Computers, Campaign, Hockey",12, "109 lbs", "5'1\"",4,4,4,3),
    ;

    //region Plot Information
    private final String name;
    private final String birthday;
    private final String hobbies; //Used for game plot, not really useful, so we leave it as String
    private final Integer age;
    private final String weight;
    private final String height;
    //endregion

    //region Starting stats
    private final Integer speed;
    private final Integer might;
    private final Integer sanity;
    private final Integer knowledge;
    //endregion
}
