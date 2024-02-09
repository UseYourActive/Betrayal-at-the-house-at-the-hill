package com.bhh.user_authentication_service.rest.controllers;

import com.bhh.user_authentication_service.persistence.entities.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

@Controller
@Slf4j
public class WebSocketController {

    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message") // /app/message // frontend sends to this endpoint
    @SendTo("/chatroom/public") // sends received message to a topic
    public Message receivePublicMessage(@Payload Message message) {
        log.info(message.toString());
        return message;
    }

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message) {
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "/private", message); // /user/Alex/private
        log.info(message.toString());
        return message;
    }
}
