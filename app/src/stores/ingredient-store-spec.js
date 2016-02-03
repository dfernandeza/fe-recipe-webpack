import Ingredient from './ingredient-store';

describe('Ingredient', () => {
  it('should create a ingredient instance without a name', () => {
    const ingredient = new Ingredient();
    expect(ingredient.name).toBe('N/A');
  });
});
