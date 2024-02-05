package com.bhh.characters_service.persistence.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "status_stage")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class StatusStage {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "status_value", nullable = false)
    @Min(message = "The key pointer for the value stater cannot be below 0", value = 0)
    @Max(message = "The key pointer for the value stater cannot be above 8", value = 8)
    private Integer statusValue;
}
