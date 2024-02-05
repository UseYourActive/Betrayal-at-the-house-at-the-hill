package com.bhh.characters_service.persistence.entities;

import com.bhh.characters_service.persistence.enums.TraitType;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "knowledge")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Knowledge {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "knowledge", nullable = false)
    private Integer knowledge;

    @Column(name = "trait_type", nullable = false)
    private TraitType traitType;
}
