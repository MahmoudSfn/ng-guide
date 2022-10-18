import { Injectable } from "@angular/core";
import { Subject } from "rxjs-compat";

import { Ingredient } from "src/shared/ingredient.model";
import { Recipe } from "../recipes/recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Garlic Butter Chicken',
            'Tender, juicy chicken bathed in a rich garlic butter sauce with a splash of wine for extra flavor!! This EASY stovetop chicken recipe is ready in 15 minutes and will become a family FAVORITE!!',
            'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
            [
                new Ingredient('Olive oil', 1),
                new Ingredient('Boneless skinless chicken breasts', 3),
                new Ingredient('Salute Seasoning', 21),
                new Ingredient('Salt', 1),
                new Ingredient('Pepper', 1),
                new Ingredient('White wine or chicken broth', 1),
                new Ingredient('Butter', 1)
            ]
        ),
        new Recipe(
            'Sheet Pan Jambalaya',
            'Easy Jambalaya with Sausage and Shrimp — The EASIEST and BEST recipe for jambalaya you’ll ever taste that’s ready in 20 minutes!! Juicy sausage and shrimp with tender rice and the PERFECT amount of kick will keep you going back for more!!',
            'https://www.averiecooks.com/wp-content/uploads/2019/08/jambalaya-4.jpg',
            [
                new Ingredient('Olive oil', 1), 
                new Ingredient('Cajun seasoning', 1), 
                new Ingredient('Raw shrimp', 1),
                new Ingredient('Cooked rice', 1),
                new Ingredient('Salsa', 1),
                new Ingredient('Green onions', 1),
                new Ingredient('Cooked smoked sausage', 1),
                new Ingredient('Yellow onion', 1)
            ]
        ),
        new Recipe(
            'Shrimp Ceviche',
            'The EASIEST way to make traditional shrimp ceviche and it tastes the BEST!! Ready in 30 minutes, great as an appetizer, side, or as a healthy main course that everyone LOVES!!',
            'https://www.averiecooks.com/wp-content/uploads/2019/07/ceviche-6.jpg',
            [
                new Ingredient('Shrimp', 1),
                new Ingredient('Lime juice', 1),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Avocado', 1),
                new Ingredient('Jalapeño or serrano chile pepper', 1),
                new Ingredient('Cucumber', 1),
                new Ingredient('Red onion', 1),
            ]
        ),
        new Recipe(
            'Grilled Lime Cilantro Chicken',
            'EASY, ready in 10 minutes, and the cilantro chicken is so TENDER, juicy, and full of Mexican-inspired flavor!! Put this HEALTHY chicken recipe on your summer menu rotation and it’ll be a hit with everyone!!',
            'https://www.averiecooks.com/wp-content/uploads/2019/06/limecilantrochicken-8.jpg',
            [
                new Ingredient('Boneless skinless chicken breasts', 1),
                new Ingredient('Lime juice and zest', 1),
                new Ingredient('Olive oil', 1),
                new Ingredient('Honey', 1),
                new Ingredient('Fresh cilantro', 1),
                new Ingredient('Kosher salt and pepper', 1),
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        // return this.recipes.slice()[id];
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}