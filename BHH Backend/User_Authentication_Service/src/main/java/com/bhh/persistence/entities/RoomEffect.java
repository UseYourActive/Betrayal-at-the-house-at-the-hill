package com.bhh.persistence.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;
@Entity
@Table(name = "room_effects")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class RoomEffect {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String description;

    public void execute(){

    }

}
