import { ProductModel } from "./ProductModel"
export type RecipeModel={
    id:number,
    name:string,
    instructions:string,
    imageUrl:string,
    level:string,
    typeFood:string,
    dateCreated:Date,
    preparationTime:number,
    products:ProductModel[],
    //תגובות

}
