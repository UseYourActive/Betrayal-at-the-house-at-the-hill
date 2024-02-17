package com.bhh.characters_service.persistence.entities;

import com.bhh.characters_service.core.strategies.LevelingStrategy;
import jakarta.persistence.ElementCollection;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class Explorer {
    private String name;
    private LevelingStrategy levelingStrategy;
    private Integer speed;
    private Integer might;
    private Integer sanity;
    private Integer knowledge;
    private Boolean isDead;
    private Integer traitLevel;
    private Integer age;
    private LocalDate birthday;
    @ElementCollection
    private List<String> hobbies;
    private Integer weight;
    private Double height;
}
