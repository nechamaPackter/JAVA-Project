@Entity
@Table
@Data
public class ReplayRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private int idCustomer;

    @Column
    private int idProduct;

    @Column
    private String content;

    @Column
    private int like;
    @Column
    private int dislike;

    @Column
    private DateTime date;

}