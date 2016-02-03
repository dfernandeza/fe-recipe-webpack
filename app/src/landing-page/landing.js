import Ingredient from '../stores/ingredient-store';

function renderList(ingredients) {
  const list = document.getElementById('ingredients-list');
  let ingredientsList = [];

  ingredients.forEach(function forEachIngredient(ingredient) {
    ingredientsList.push(`<li class="list-group-item"> ${ingredient.name} </li>`);
  });
  list.innerHTML = ingredientsList.join('');
}

const landing = {
  init: function init() {
    const btn = document.getElementById('add-ingredient');
    const input = document.getElementById('ingredient-input');

    let ingredients = [
      new Ingredient('ES6+'),
      new Ingredient('Webpack'),
      new Ingredient('Babel'),
      new Ingredient('PostCss'),
      new Ingredient('Karma'),
      new Ingredient('Jasmine'),
      new Ingredient('ESLint')
    ];

    renderList(ingredients);

    btn.addEventListener('click', function onAddIngredientBtnClick(e) {
      e.preventDefault();
      if (input.value) {
        ingredients.push(new Ingredient(input.value));
        renderList(ingredients);
        input.value = '';
      }
    }, false);
  }
};

export default landing;
