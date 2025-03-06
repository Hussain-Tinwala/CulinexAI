import React, { useEffect, useState } from 'react'
import RecipeSection from './RecipeSection'
import IngredientsSection from './IngredientsSection'

function AI() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsElements = ingredients.map((item) => {
        return (
            <li>{item}</li>
        )
    })

    const [recipeShown, setRecipeShown]= useState(false)

    function getRecipe(){
        setRecipeShown(prev=>!prev)
    }

    const recipeSection= React.useRef(null)
    useEffect(()=>{
        if(recipeShown!==""&& recipeSection.current!==null)
        {
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }

    }, [recipeShown])

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted")
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return (
        <main>
            <form
                onSubmit={handleSubmit}
                className='input'
            >
                <input type="text"
                    placeholder='e.g oregano'
                    name='ingredient'
                />
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        Add
                    </span>
                </button>
            </form>
            {ingredients.length>0 && 
                <IngredientsSection 
                ingredients={ingredients} 
                ingredientsElements={ingredientsElements} 
                getRecipe={getRecipe} 
                recipeShown={recipeShown} 
                recipeSection={recipeSection}

                />
            }
            { recipeShown &&
                <RecipeSection />
            }
        </main>
    )
}

export default AI