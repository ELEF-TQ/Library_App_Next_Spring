package library.crud.Library.model;

import lombok.*;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;


}
