
"use strict";


//**************** HTML elements ********************//

let headerElements= {};
headerElements["$header"] = document.getElementById('header');
headerElements["$hamburger"] = document.getElementById('hamburger');

let loginElements = {};
loginElements["$form"] = document.getElementById('login-form');
loginElements["$inputs"] = loginElements.$form.getElementsByClassName('form__input');
loginElements["$btnReveal"] = loginElements.$form.getElementsByClassName('form__input');
loginElements["$requirementsInfo"] = loginElements.$form.getElementsByClassName('form__requirements');
loginElements["$revealButton"] = loginElements.$form.getElementsByClassName('form__btn-reveal');


//************* Event listeners *************//

headerElements.$hamburger.addEventListener('click', hamburgerHandler);


for(let el = 0; el < loginElements.$revealButton.length; el++){

    loginElements.$revealButton[el].addEventListener('click', revealBtnHandler);
}

for(let el = 0; el < loginElements.$inputs.length; el++){
    loginElements.$inputs[el].addEventListener('blur', inputBlurHandler);
}

loginElements.$form.addEventListener('submit', formSubmitHandler);

//*********** Event Handler functions *************//

function inputBlurHandler(e){
    let $input = e.target;
    setOccupiedInput($input.value, $input);
}

/**
 * Handles the hamburger click event
 * @param e
 */
function hamburgerHandler(e){
    let $hamburger = e.target;
    if($hamburger.classList.toggle("header__hamburger--open")){

    }
}

/**
 * Handles the reveal button click event
 * @param e
 */
function revealBtnHandler(e) {
    let $revealBtn = e.target;
    let $input = $revealBtn.parentNode.getElementsByClassName("form__input")[0];
    if ($revealBtn.classList.toggle("form__btn-reveal--revealed")) {
        $input.type ='text';
    }else{
        $input.type = 'password';
    }
}

function formSubmitHandler(e){
    if(!validateLogin()){
        e.preventDefault();
    }
}

//**************** Functions *************************//

let validations = {
    required: function(value){
        return value !== '';
    },
    email: function(value){
        return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
};

/**
 * Prototypical validate function
 * Only checks if inputs are empty
 * If so adds an error class to form
 */
function validateLogin(){
    for (let el = 0; el<loginElements.$inputs.length; el++){
        let $input = loginElements.$inputs[el];
        if(!$input.value) { //Empty Input
            setFormError(true);
        }else if($input.id === "email"){
            if(!validations.email($input.value)){
                setFormError(true);
                return false;
            }
        }else{
            setFormError(false);
            return true;
        }
    }
}

/**
 * Sets the classes for Error-Look of the form
 * @param hasError
 */
function setFormError(hasError){
    if (hasError){
        toggleClass(true, loginElements.$form, 'form--error');
    }else{
        toggleClass(false, loginElements.$form, 'form--error');
    }
}

/**
 * Toggles the class to mark an occupied input
 * @param isOccupied
 * @param $input
 */
function setOccupiedInput(isOccupied, $input){
    toggleClass(isOccupied, $input, 'form__input--occupied');
}

/**
 * Helper to add/remove a class of a element
 * @param add
 * @param $el
 * @param className
 */
function toggleClass(add, $el, className){
    if(add){
        if(!$el.classList.contains(className)) {
            $el.classList.add(className);
        }
    }else{
        $el.classList.remove(className);
    }
}

function toggleNavi(open){
    if(open){
        //
    }
}

/**
 * Helper to check if element has a class
 * @param element
 * @param cls
 * @returns {boolean}
 */
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}










