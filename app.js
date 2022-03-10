const app_id = "d4b775dd"
const app_key = "734ddbad481c1d357d2806b62af85528"

const input = document.querySelector("input")
const button = document.querySelector("button")
const results = document.querySelector('.results')


const getRecipe = async (query="pizza")=>{

    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`
    console.log(endpoint)

    const stream =  await fetch(endpoint)
    const data = await stream.json()

    data.hits.map((item)=>{
        const recipe = item.recipe
        const image = document.createElement('img')
        image.setAttribute('src', recipe.image)
        results.appendChild(image)
    })

}

const getRecipeWithDes = async (query="pizza")=>{

    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`

    const stream =  await fetch(endpoint)
    const {hits} = await stream.json()

    hits.map(({recipe})=>{
        const image = document.createElement('img')
        image.setAttribute('src', recipe.image)
        results.appendChild(image)
    })

}


button.addEventListener("click",(e)=>{
    getRecipe(input.value)
})