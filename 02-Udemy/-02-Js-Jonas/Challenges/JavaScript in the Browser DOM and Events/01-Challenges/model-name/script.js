'use strict';
// classes
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//////////////////////// functions /////////////

//////open function
const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

// close function
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

// for loop
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

/// escape tab
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
