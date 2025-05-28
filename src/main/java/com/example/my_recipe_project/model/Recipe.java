@Entity
@Table
@Data
public enum Level {
    EASY,
    MEDIUM,
    HARD
}
public enum TypeFood{
    Main_courses,
    Last_courses,
    Starters,
    Soup,
    Pies,
    Cakes,
}
public class RecipeRepository {

    @Id
    @GeneratedValue
    private int id;

    @Column
    private String name;
    
    
    @Column
    private String instructions;
    
    @Column
    private String imageUrl;
    @Column
    private Level level;

    @Column 
    private TypeFood typeFood;
    @Column
    private DateTime dateCreated;
    @Column
    private int preparationTime; 




    // Additional fields can be added as needed, such as preparation time, cooking time, etc.
}   