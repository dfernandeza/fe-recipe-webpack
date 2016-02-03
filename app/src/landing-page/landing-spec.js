import landing from './landing';

describe('Landing Page', () => {
  beforeEach(() => {
    document.body.innerHTML = window.__html__['app/fixtures/landing.html'];
    landing.init();
  });

  it('should create new list item when a ingredient is added to the list', () => {
    const btn = document.getElementById('add-ingredient');
    const input = document.getElementById('ingredient-input');
    const list = document.getElementById('ingredients-list');
    const currentLength = list.querySelectorAll('li').length;

    input.value = 'Cheese';
    btn.click();

    expect(list.querySelectorAll('li').length).toEqual(currentLength + 1);
  });
});
