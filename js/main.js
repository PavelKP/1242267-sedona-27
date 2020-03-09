let openButton = document.getElementById('search__open');
let form = document.querySelector('.search__form');
let submit = form.querySelector('.search__find-button');
let checkInDate = form.querySelector('[name = arrival-date]');
let adultsNum = form.querySelector('[name = adults-num]');
let childrenNum = form.querySelector('[name = children-num]');

let adultsNumStorage;
let childrenNumStorage;
let isStorageSupport = true;

/* if localStorage works, retrieve number values */
try {
  adultsNumStorage = localStorage.getItem('adults-num');
  childrenNumStorage = localStorage.getItem('children-num');
} catch (err) {
  isStorageSupport = false;
}

/* Form is hidden, if JS works */
form.classList.add('modal-hide');

/* Open modal window and push number values*/
openButton.addEventListener('click', function() {
  form.classList.toggle('modal-hide');
  form.classList.toggle('modal-show');
  
  setTimeout(function() {
    checkInDate.focus()
  }, 400);


  if (isStorageSupport) {
    adultsNum.value = adultsNumStorage;
    childrenNum.value = childrenNumStorage;
  }
});

/* Check form */
submit.addEventListener('click', function(evt) {

  for (let i=0; i < form.querySelectorAll('input').length; i++) {
    let input = form.querySelectorAll('input')[i];

    if (!input.value) {
      if (input.classList.contains('required')) {
        input.classList.add('red-outline');
        evt.preventDefault();
      }
    }
    else {
      input.classList.remove('red-outline');
      if (input.type === 'number' && isStorageSupport) localStorage.setItem(input.name, input.value);
    }     
  }
})




