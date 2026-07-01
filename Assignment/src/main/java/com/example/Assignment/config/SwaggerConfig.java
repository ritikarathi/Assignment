package com.example.Assignment.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("REST API with JWT Authentication")
                        .version("1.0")
                        .description("Scalable REST API with Authentication & Role-Based Access")
                        .contact(new Contact()
                                .name("Ritika Rathi")
                                .email("your-email@example.com")
                        )
                );
    }
}