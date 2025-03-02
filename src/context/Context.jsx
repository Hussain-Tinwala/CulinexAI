import { createContext, useState } from "react";
import React from "react";
export const GlobalContext = React.createContext(null)

export default function Context({ children }) {
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData]= useState(null)

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json()

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
            }

            console.log(data)

        } catch (error) {
            console.log("Error fetching data: " + error)
            setLoading(false)
            setSearchParam('')
        }
    }

    console.log(loading, recipeList)

    return (<GlobalContext.Provider value={{ searchParam, loading, recipeList, setSearchParam, handleSubmit, recipeDetailsData, setRecipeDetailsData }}>
        {children}
    </GlobalContext.Provider>
    );
}