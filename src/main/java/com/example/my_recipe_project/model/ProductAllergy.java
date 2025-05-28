@Entity
@Table
@Data
public class ProductAllergyRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private int idProduct;
    
    @Column
    private int idAllergen;

}