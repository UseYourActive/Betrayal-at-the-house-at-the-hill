package com.bhh.characters_service.persistence.entities;

import com.bhh.characters_service.persistence.enums.CharacterStats;
import com.bhh.characters_service.persistence.enums.TraitType;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "speed")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Speed {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "character_stats", nullable = false)
    @Enumerated(EnumType.STRING)
    private CharacterStats characterStats;

    @Column(name = "trait_type", nullable = false)
    private TraitType traitType;
}
