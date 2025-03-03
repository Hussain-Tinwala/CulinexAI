import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/context'

export default function Details() {
  const { id } = useParams()
  const { recipeDetailsData, setRecipeDetailsData, handleAddtoFavourite, favouritesList } = useContext(GlobalContext)
  // console.log(params)

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const data = await res.json()
        console.log(data)

        if(data?.data)
        {
          setRecipeDetailsData(data?.data)
        }

      } catch (error) {
        console.log("Error fetching data: " + error)

      }
    }
    getRecipeDetails()
  }, [])

  return (  
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img src={recipeDetailsData?.recipe?.image_url} alt="Recipe Item" className='w-full h-full object-cover block group-hover:scale-105 duration-300'/>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
      <span className="text-sm text-cyan-700 font-medium">{recipeDetailsData?.recipe?.publisher}</span>
      <h3 className="font-bold truncate text-black">{recipeDetailsData?.recipe?.title}</h3>
      <div>
        <button
          className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'
          onClick={()=>handleAddtoFavourite(recipeDetailsData?.recipe)}
        >
          {favouritesList && favouritesList.length>0 &&
            favouritesList.findIndex((item)=>item.id===recipeDetailsData?.recipe?.id)!==-1 ? "Remove from favourites": "Add to Favourites"
          }
          
        </button>
      </div>
      <div className='border-2'>
        <span className='text-2xl font-bold text-black'>Ingredients</span>
        <ul className='flex flex-col gap-3'>
          {recipeDetailsData?.recipe?.ingredients.map((item)=>
          <li>
              <span className='text-1xl font-semibold text-black'>{item.quantity} {item.unit}</span>
              <span className='text-1xl font-semibold text-black'>{item.description}</span>

          </li>)}
        </ul>
      </div>

      </div>

    </div>
  )
}