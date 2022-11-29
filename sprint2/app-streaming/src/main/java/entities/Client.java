package entities;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.io.Serializable;

@Document("client")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Client implements Serializable {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private String id;
    private String email;
    private String password;
    private String name;
    private String lastName;
    private String birthDate;
    private String phone;
}
