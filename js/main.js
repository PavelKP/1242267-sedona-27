let openButton = document.getElementById('search__open');
let form = document.querySelector('.search__form');
let submit = form.querySelector('.search__find-button');
let checkInDate = form.querySelector('[name = arrival-date]');
let adultsNum = form.querySelector('[name = adults-num]');
let childrenNum = form.querySelector('[name = children-num]');

let adultsNumStorage;
let childrenNumStorage;
let isStorageSupport = true;

function openClose() {

  if (form.classList.contains('modal-hide')) {
    form.classList.remove('modal-hide');
    form.classList.remove('modal-error'); 
    form.classList.add('modal-show');

    setTimeout(function () {
      checkInDate.focus()
      form.classList.remove('modal-show');
    }, 400);

    if (isStorageSupport) {
      adultsNum.value = adultsNumStorage;
      childrenNum.value = childrenNumStorage;
    }

  } else {
    form.classList.remove('modal-show');
    form.classList.add('modal-close');

    setTimeout(function () {
      form.classList.add('modal-hide');
      form.classList.remove('modal-close');
    }, 400);
  }
}


/* if localStorage works, retrieve number values */
try {
  adultsNumStorage = localStorage.getItem('adults-num');
  childrenNumStorage = localStorage.getItem('children-num');
} catch (err) {
  isStorageSupport = false;
}

/* Form is hidden, if JS works */
form.classList.add('modal-hide');

let i = 0;
openButton.addEventListener('click', function () {

  if (i === 0) {
    openClose();
    i++;
    setTimeout(function () {
      i = 0;
    }, 500);
  }
});

/* Check form */
submit.addEventListener('click', function (evt) {

  for (let i = 0; i < form.querySelectorAll('input').length; i++) {
    let input = form.querySelectorAll('input')[i];

    if (!input.value) {
      if (input.classList.contains('required')) {
        input.classList.add('red-outline');
        evt.preventDefault();

        
        form.classList.remove('modal-error');        
        form.offsetWidth = form.offsetWidth;
        form.classList.add('modal-error');

      }
    } else {
      input.classList.remove('red-outline');
      if (input.type === 'number' && isStorageSupport) localStorage.setItem(input.name, input.value);
    }
  }
})