package library.crud.Library.controller;

import library.crud.Library.Dto.RegisterDto;
import library.crud.Library.model.Role;
import library.crud.Library.model.User;
import library.crud.Library.repository.RoleRepo;
import library.crud.Library.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        if (registerDto == null ||
                registerDto.getUsername() == null || registerDto.getUsername().isEmpty() ||
                registerDto.getEmail() == null || registerDto.getEmail().isEmpty() ||
                registerDto.getPassword() == null || registerDto.getPassword().isEmpty()) {
            return new ResponseEntity<>("All fields are required", HttpStatus.BAD_REQUEST);
        }

        if (userRepo.existsByUsername(registerDto.getUsername())) {
            return new ResponseEntity<>("Username is taken", HttpStatus.BAD_REQUEST);
        }

        if (userRepo.existsByEmail(registerDto.getEmail())) {
            return new ResponseEntity<>("Email is already registered", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Role role = roleRepo.findByName("USER").orElseThrow(() -> new RuntimeException("Role 'USER' not found"));
        user.setRoles(Collections.singletonList(role));

        userRepo.save(user);

        return new ResponseEntity<>("User registered", HttpStatus.OK);
    }
}
