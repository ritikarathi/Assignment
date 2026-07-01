package com.example.Assignment.bootstrap;

import com.example.Assignment.entity.User;
import com.example.Assignment.enums.Role;
import com.example.Assignment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        if (!userRepository.existsByEmail("admin@gmail.com")) {

            User admin = User.builder()
                    .name("Admin")
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("admin123"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            userRepository.save(admin);

            System.out.println("✅ Default Admin Created");
        }
    }
}
