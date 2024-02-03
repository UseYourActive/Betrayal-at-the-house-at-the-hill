package com.bhh.user_authentication_service.persistence.repositories;

import com.bhh.user_authentication_service.persistence.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
}
