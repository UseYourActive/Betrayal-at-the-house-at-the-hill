package com.bhh.persistence.entities;

import com.bhh.persistence.enums.RoomLevel;
import com.bhh.persistence.enums.RoomOrientation;
import com.bhh.persistence.enums.RoomSymbol;
import jakarta.persistence.*;
import lombok.*;

import java.util.Map;
import java.util.UUID;
@Entity
@Table(name = "room_tiles")
@Builder
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class RoomTile {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    @Column(name = "room_symbol", nullable = false)
    @Enumerated(EnumType.STRING)
    private RoomSymbol roomSymbol;

    @Column(name = "room_level", nullable = false)
    @Enumerated(EnumType.STRING)
    private RoomLevel roomLevel;


    private Map<RoomOrientation,Boolean> doors; // (TOP,TRUE) - има врата в горната част на картата
    private Boolean isStartingTile;
    private RoomEffect roomEffect;
}
