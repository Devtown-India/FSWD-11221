const application_id = '8ad6c7fd'
const application_key = '4d521a38ec59b892fe20018242272e5f'

const input = document.querySelector('#search input')
const button = document.querySelector('#search button')
const container = document.querySelector('div.recipe-container')


const getRecipe = async (query) => {

    const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${application_id}&app_key=${application_key}`

    const res = await fetch(endpoint)
    const data = await res.json()
    const { hits } = data

    return hits
}

const createRecipeCard = (image, name, cookTime, recipeUrl) => {
    return ` <div class="ft-recipe">
            <div class="ft-recipe__thumb">
                <span id="close-modal"><i class="ion ion-md-close"></i></span>
                <h3>Today's Featured Recipe</h3>
                <img src=${image} alt="Strawberry Waffle" />
            </div>
            <div class="ft-recipe__content">
                <header class="content__header">
                    <div class="row-wrapper">
                        <h2 class="recipe-title">${name}</h2>
                        <div class="user-rating"></div>
                    </div>
                    <ul class="recipe-details">
                        <li class="recipe-details-item time">
                            <i class="ion ion-ios-clock-outline"></i
                ><span class="value">${cookTime}</span><span class="title">Minutes</span>
              </li>
            
            </ul>
          </header>
          <p class="description">
            There’s no better way to celebrate May being National Strawberry
            Month than by sharing a sweet treat with your pup!!! Strawberries...
          </p>
          <footer class="content__footer"><a href=${recipeUrl}>View Recipe</a></footer>
        </div>
      </div>`
}


const handleSearch = async () => {
    // clear the previous images if any
    container.innerHTML = null

    const query = input.value
    const hits = await getRecipe(query)
    hits.forEach(hit => {
        const { recipe } = hit
        const ele = document.createElement('div')
        const markup = createRecipeCard(recipe.image, query, recipe.totalTime, recipe.url)
        ele.innerHTML = markup
        console.log(markup)
        container.appendChild(ele)
    })
}


button.addEventListener('click', handleSearch)

