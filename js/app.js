document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSubmit = function(event){
    event.preventDefault();
    console.log('in the function');
    const resultList = document.querySelector('#reading-list');

    const newLi = document.createElement('li');
    newLi.textContent = `Your book Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`;
    resultList.appendChild(newLi);
    // resultParagraph.textContent += `Your book Title: ${event.target.title.value}, Author: ${event.target.author.value}, Category: ${event.target.category.value}`;

    form.reset();

  };

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const handleDeleteAllButtonClick = function(){
    const readingList = document.querySelector('#reading-list');
    while (readingList.firstChild) readingList.removeChild(readingList.firstChild);

  }
  const button = document.querySelector('#deleteAll');
  button.addEventListener('click', handleDeleteAllButtonClick);

  console.log('at the bottom');
});
