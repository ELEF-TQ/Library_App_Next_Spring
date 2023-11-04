package library.crud.Library.model;

import lombok.*;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id" , referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName = "id")
    )
    private List<Role> roles =new ArrayList<>();

}
