const subButton =  document.querySelector('.subscribe__button');
let agreementChecked = '';
const illustration = document.querySelector('.email-illustration');
const subResponse = document.querySelector('.subscribe-response');  


// checks if the checkbox is checked/ticked and returns agreementChecked variable as either truthy or falsy for later use
const checkboxChange = (checkbox) => {
    if (checkbox.checked) {
        agreementChecked = true;
    } else {
        agreementChecked = false;
    }
}; 


// this function is the logic which displays validation/invalidation of submission based on conditions met/not met
const emailValidation = () => {

    const enterEmail = document.querySelector('.subscribe__input').value;

    if (enterEmail.includes('@gmail.com') && agreementChecked === true) {

    const sendArrow = document.querySelector('.icon');
    const subText = document.querySelector('.subscribe__button-text').innerText = 'SUBSCRIBED!';

    subButton.classList.remove('subscribe__button--neutral');
    subButton.classList.add('subscribe__button--success');
    sendArrow.classList.add('icon-gone');
    subResponse.innerText = '';
    illustration.classList.remove('email-illustration-failed');
    illustration.classList.add('email-illustration-success');


    } else if (enterEmail.includes('@gmail.com') && agreementChecked !== true) {

        illustration.classList.add('email-illustration-failed');
        subResponse.innerText = 'Please agree below before you submit your email address.';


    } else {

        illustration.classList.add('email-illustration-failed');
        subResponse.innerText = 'Please enter a valid gmail address.';
    }
};


subButton.addEventListener('click', () => {
    emailValidation();

});

