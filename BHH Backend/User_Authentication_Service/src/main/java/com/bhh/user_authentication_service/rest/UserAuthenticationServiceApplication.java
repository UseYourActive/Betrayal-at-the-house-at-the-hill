package com.bhh.user_authentication_service.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@EnableDiscoveryClient
@EntityScan(basePackages = {"com.bhh.user_authentication_service.persistence.entities"})
@EnableJpaRepositories(basePackages = {"com.bhh.user_authentication_service.persistence.repositories"})
@ComponentScan(basePackages = {"com.bhh.user_authentication_service"})
@EnableFeignClients(basePackages = {"com.bhh.user_authentication_service.export"})
public class UserAuthenticationServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserAuthenticationServiceApplication.class, args);
    }
}
