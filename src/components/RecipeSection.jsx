export default function RecipeSection({ recipe }) {
    return (
        <>
            <div className="recipe">
                {/* {recipe ? (
                    <>
                        <h2>{recipe.strMeal}</h2>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <p>{recipe.strInstructions}</p>
                    </>
                ) : (
                    <p>No Recipe Available</p>
                )} */}
                <h1>Chocolate Chip Cookies</h1>

                <h3>Ingredients:</h3>
                <ul>
                    <li>1 cup unsalted butter, softened</li>
                    <li>3/4 cup granulated sugar</li>
                    <li>3/4 cup packed brown sugar</li>
                    <li>2 1/4 cups all-purpose flour</li>
                    <li>1 teaspoon baking soda</li>
                    <li>1/2 teaspoon salt</li>
                    <li>2 teaspoons vanilla extract</li>
                    <li>2 large eggs</li>
                    <li>2 cups semi-sweet chocolate chips</li>
                </ul>

                <h3>Instructions:</h3>
                <ol>
                    <li>Preheat the oven to 350°F (175°C).</li>
                    <li>In a large bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.</li>
                    <li>Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.</li>
                    <li>In a separate bowl, whisk together the flour, baking soda, and salt.</li>
                    <li>Gradually add the dry ingredients to the wet ingredients, mixing until just combined.</li>
                    <li>Fold in the chocolate chips.</li>
                    <li>Drop rounded tablespoons of dough onto ungreased baking sheets, spaced about 2 inches apart.</li>
                    <li>Bake for 10-12 minutes or until golden brown around the edges. Let cool on the baking sheet for a few minutes before transferring to a wire rack.</li>
                    <li>Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.</li>
                    <li>In a separate bowl, whisk together the flour, baking soda, and salt.</li>
                    <li>Gradually add the dry ingredients to the wet ingredients, mixing until just combined.</li>
                    <li>Fold in the chocolate chips.</li>
                    <li>Drop rounded tablespoons of dough onto ungreased baking sheets, spaced about 2 inches apart.</li>
                    <li>Bake for 10-12 minutes or until golden brown around the edges. Let cool on the baking sheet for a few minutes before transferring to a wire rack.</li>
                    <li>Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract.</li>
                    <li>In a separate bowl, whisk together the flour, baking soda, and salt.</li>
                    <li>Gradually add the dry ingredients to the wet ingredients, mixing until just combined.</li>
                    <li>Fold in the chocolate chips.</li>
                    <li>Drop rounded tablespoons of dough onto ungreased baking sheets, spaced about 2 inches apart.</li>
                    <li>Bake for 10-12 minutes or until golden brown around the edges. Let cool on the baking sheet for a few minutes before transferring to a wire rack.</li>
                </ol>
            </div>
        </>
    )
}