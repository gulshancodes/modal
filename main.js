/* Modal using Pure Javascript */

const body = document.body;
const modal = document.querySelector('#modal');
const modalWrapper = document.querySelector('.modal_wrapper');
const modalOpenBtn = document.querySelector('.open_btn');
const modalCloseBtn = document.querySelector('.close_btn');


// opening the Modal
modalOpenBtn.addEventListener('click', () => {
    body.classList.add('overflow_hide');
    modal.classList.add('open');
});


// closing the Modal
modalCloseBtn.addEventListener('click', () => {
    body.classList.remove('overflow_hide');
    modal.classList.remove('open');
});


// closing the Modal on clicking outside of it.
window.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
        body.classList.remove('overflow_hide');
        modal.classList.remove('open');
    }
});


// closing the Modal on pressing the 'Escape' key.
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        body.classList.remove('overflow_hide');
        modal.classList.remove('open');
    }
});