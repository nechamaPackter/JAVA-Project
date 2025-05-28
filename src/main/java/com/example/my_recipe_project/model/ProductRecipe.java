@Entity
@Table
@Data

public class ProductRecipeRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private int idProduct;

    @Column
    private int idRecipe;

    @Column
    private boolean productReplacement;
    @Column
    private int idProductReplacement;
    @Column
    private String amount;
    
}