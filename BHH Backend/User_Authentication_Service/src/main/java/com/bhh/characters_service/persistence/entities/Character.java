package com.bhh.characters_service.persistence.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "characters")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;
    private Integer age;
    private LocalDate birthday;

    @ElementCollection
    private List<String> hobbies;

    private Integer weight;
    private Double height;

    @OneToOne
    private Speed speed;

    @OneToOne
    private Might might;

    @OneToOne
    private Sanity sanity;

    @OneToOne
    private Knowledge knowledge;
}
