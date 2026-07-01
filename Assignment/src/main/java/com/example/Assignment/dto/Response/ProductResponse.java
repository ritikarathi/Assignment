package com.example.Assignment.dto.Response;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductResponse {

    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer quantity;
}
