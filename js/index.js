const mobMenuOpenBtn = document.querySelector(".js-open-menu");
const mobMenuCloseBtn = document.querySelector(".mobmenu-close-btn");
const menuBg = document.querySelector(".burger-menu-bg");
const menu = document.querySelector(".burger-menu-bg");
const body = document.querySelector(".body");
const mobMenuNav = document.querySelector(".mob-nav-list");
const applicationForm = document.querySelector(".main-form");

function toogleMenu () {
    menu.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
};

function navClickReaction (event) {
    if (event.target.nodeName === 'A') {
        toogleMenu();
    }
};

function formSubmit (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const phone = form.elements.userPhone.value;
    const comment = form.elements.userComment.value;
    const selectedTeacher = document.querySelector('input[name="teacher"]:checked');
    const teacher = selectedTeacher.value;

    const userData = { name, email, phone, comment, teacher };


    if (name.trim() === '' || email.trim() === '') {
        return alert("Please, enter your name and email");
    }

    userData.name = name.trim();
    userData.email = email.trim();
    userData.phone = phone.trim();
    userData.comment = comment.trim();

    console.log(userData);
    form.reset();
};

mobMenuOpenBtn.addEventListener("click", toogleMenu);
mobMenuCloseBtn.addEventListener("click", toogleMenu);
mobMenuNav.addEventListener("click", navClickReaction);
applicationForm.addEventListener("submit", formSubmit);