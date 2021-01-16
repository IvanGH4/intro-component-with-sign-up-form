const nameInput = document.querySelector('#nameInput');
const lastNameInput = document.querySelector('#lastNameInput');
const emailInput = document.querySelector('#emailInput');
const passInput = document.querySelector('#passInput');
const form = document.querySelector('#form');
const warnings = document.querySelectorAll('.err-field');
const btn = document.querySelector('.submit-btn');

btn.addEventListener('click',(e) => {
    e.preventDefault();

    validateEmail();

    if(nameInput.value == '') {
        // console.log(warnings[0]);
        warnings[0].classList.add('active');
    } else {
        warnings[0].classList.remove('active');
    }

    if(lastNameInput.value === '') {
        warnings[1].classList.add('active');
    } else {
        warnings[1].classList.remove('active');
    }
        
    if(passInput.value === '') {
        warnings[3].classList.add('active');
    } else {
        warnings[3].classList.remove('active');
    }
});


function validateEmail() {
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(emailInput.value.match(mailformat)) {
        emailInput.classList.add('success');
        warnings[2].classList.remove('active');
    }
    else {
        emailInput.classList.add('err');
        warnings[2].classList.add('active');
    }
}