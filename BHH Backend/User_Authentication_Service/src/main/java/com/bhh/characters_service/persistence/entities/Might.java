package com.bhh.characters_service.persistence.entities;

import com.bhh.characters_service.persistence.enums.TraitType;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "might")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Might {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "might", nullable = false)
    private Integer might;

    @Column(name = "trait_type", nullable = false)
    private TraitType traitType;
}
