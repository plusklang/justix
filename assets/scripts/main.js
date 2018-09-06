
"use strict";

let headerElements= {};
headerElements["$header"] = document.getElementById('header');
headerElements["$hamburger"] = document.getElementById('hamburger');

let loginElements = {};
loginElements["$form"] = document.getElementById('login-form');
loginElements["$inputs"] = loginElements.$form.getElementsByClassName('form__input');
loginElements["$btnReveal"] = loginElements.$form.getElementsByClassName('form__input');
loginElements["$requirementsInfo"] = loginElements.$form.getElementsByClassName('form__requirements');
loginElements["$revealButton"] = loginElements.$form.getElementsByClassName('form__btn-reveal');

//Event listeners

headerElements.$hamburger.addEventListener('click', function(e){
    hamburgerHandler(e);
});

for(let el = 0; el < loginElements.$revealButton.length; el++){

    loginElements.$revealButton[el].addEventListener('click', function(e){
        revealBtnHandler(e);
    });
}

//Event Handler functions

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
    alert('reveal button');
    if ($revealBtn.classList.toggle("form__btn-reveal--revealed")) {
        $input.type ='text';
    }else{
        $input.type = 'password';
    }
}


function login(){
    //Some login stuff
}


function toggleNavi(open){
    if(open){
        //
    }
}










