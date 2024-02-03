package com.bhh.user_authentication_service.core.mappers;

import com.bhh.user_authentication_service.api.operations.create.CreateUserResponse;
import com.bhh.user_authentication_service.persistence.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CreateUserMapper {
    CreateUserMapper INSTANCE = Mappers.getMapper(CreateUserMapper.class);

    CreateUserResponse mapToResponse(User savedUser);
}
