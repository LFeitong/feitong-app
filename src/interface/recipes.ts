
export enum RecipesType{
    Brunch="Breakfast and Brunch", 
    MainDishes="Main Dishes", 
    Desserts="Desserts", 
    Drinks="Drinks"
}

export interface recipes {
    ID:number
    Kind:RecipesType
    Ingredients:string
    Directions:string
}