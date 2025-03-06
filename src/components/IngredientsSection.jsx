export default function IngredientsSection(props) {
    return (
        <>
            <div>
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list">{props.ingredientsElements}</ul>
                    {props.ingredients.length > 3 && <div className="get-recipe-container">
                        <div
                            ref={props.recipeSection}
                        >
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients</p>
                        </div>
                        <button onClick={props.getRecipe}>{props.recipeShown ? "Hide" : "Get a recipe"}</button>
                    </div>}
                </section>
            </div>
        </>
    )
}