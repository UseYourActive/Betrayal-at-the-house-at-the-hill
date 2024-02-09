package com.bhh.user_authentication_service.persistence.entities;

import com.bhh.user_authentication_service.persistence.enums.Status;
import lombok.*;

@Getter
@AllArgsConstructor
@Setter
@NoArgsConstructor
@ToString
public class Message {
    private String senderName;
    private String receiverName;
    private String message;
    private String date;
    private Status status;
}
