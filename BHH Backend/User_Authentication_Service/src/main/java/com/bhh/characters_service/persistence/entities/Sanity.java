package com.bhh.characters_service.persistence.entities;

import com.bhh.characters_service.persistence.enums.TraitType;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "sanity")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Sanity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "sanity", nullable = false)
    private Integer sanity;

    @Column(name = "trait_type", nullable = false)
    private TraitType traitType;
}
