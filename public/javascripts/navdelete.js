const checks = document.querySelectorAll('input[type="checkbox"]');
const textSelected = document.getElementById('items-selected-delete');
const navbar = document.getElementById('delete-navbar');
const deleteButton = document.getElementById('delete-button-div');

let ingredientsToDelete = 0;

checks.forEach(check => {
    check.addEventListener('change', (e) =>{
      if (check.checked === true){
          ingredientsToDelete++;
      } else {
          ingredientsToDelete--;
      }
      textSelected.innerHTML = `${ingredientsToDelete} selected`;
        if (ingredientsToDelete === 0){
            textSelected.classList.add('hidden-text');
            deleteButton.classList.add('hidden-text');
            
        } else {
            textSelected.classList.remove('hidden-text');
            deleteButton.classList.remove('hidden-text');

        }
      console.log(ingredientsToDelete);
    });
});
