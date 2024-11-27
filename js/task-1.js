'use strict';

function printCategoryInfo(categoriesLiEl) {
  const category = categoriesLiEl.querySelector('h2').textContent;
  const elements = categoriesLiEl.querySelectorAll('li').length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
}

const categories = document
  .querySelector('ul#categories')
  .querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(el => printCategoryInfo(el));
