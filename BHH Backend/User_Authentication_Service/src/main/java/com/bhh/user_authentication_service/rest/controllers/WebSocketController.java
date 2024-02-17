package com.bhh.user_authentication_service.rest.controllers;

import com.bhh.user_authentication_service.persistence.entities.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

@Controller
@Slf4j
public class WebSocketController {
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public Message send(Message message) {
        log.info(message.toString());
        return message;
    }
}
