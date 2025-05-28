@Entity
@Table
@Data

public class CustomerAllergyRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private int idCustomer;
    @Column
    private int idAllergen;

   
}