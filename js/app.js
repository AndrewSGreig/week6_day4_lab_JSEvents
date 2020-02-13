document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSubmit = function(event){
    event.preventDefault();
    debugger;
    console.log('in the function');
    const resultParagraph = document.querySelector('#reading-list');
    resultParagraph.textContent += `Your book Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`;

    form.reset();

  };

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  console.log('at the bottom');
});
