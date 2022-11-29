package entities;

import java.io.Serializable;
import javax.persistence.*;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("category")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String name;
    private String description;
}
