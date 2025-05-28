import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import lombok.Data;

@Entity
@Table
@Data
public class AllergensRepository {

    @Id
    @GeneratedValue
    private int Id;

    @Column
    private String name;
}
