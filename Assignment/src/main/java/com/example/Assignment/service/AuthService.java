package com.example.Assignment.service;

import com.example.Assignment.dto.Request.LoginRequest;
import com.example.Assignment.dto.Request.RegisterRequest;
import com.example.Assignment.dto.Response.AuthResponse;

public interface AuthService {

    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
