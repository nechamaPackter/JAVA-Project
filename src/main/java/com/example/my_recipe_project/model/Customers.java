@Entity
@Table
@Data
public class CustomersRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String phoneNumber;
    @Column
    private String password;

    
}