@Entity
@Table
@Data
public class ProductRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;

    @Column
    private Charecter imageUrl;
}