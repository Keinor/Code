// код находит элемент с пометкой и показывает запрошенную информацию
let ru_lang = {
    auth_value_btn: "Войти",
    edit_value_btn:"Отправить",
    edit_adminPage:"Админ-панель",
    edit_mainPage:"Главная",
    edit_questionPage:"Вопросы",
    edit_settingsPage:"Настройки",
    edit_h1_addQuestion:"Добавить вопрос",
    list_value_btn:"Выйти",
    list_addQuestion:"Создать вопрос"

};

let en_lang ={
    index_quiz:"Quiz System",
    category:"Category",
    auth_value_btn:"Sign in",
    pageProgramming:"Programming",
    pageOC:"OC",
    pageDB:"DataBase",
    next_btn:"Next",
    passing_test:"Passing the test",
    copyright:"Copyright © | Quiz System | All Rights Reserved",
    terms:"Terms of Service",
    privacy_policy:"Privacy Policy"

};

function MultiLanguage(language) {
    for (let a of document.querySelectorAll('[data-name]')) {
        let field = a.dataset.name;
        a.innerHTML = language[field];
    }
}

function selectLanguage() {
    if (document.documentElement.lang === `ru`) {
        return  MultiLanguage(ru_lang);

    }
    else{
        return MultiLanguage(en_lang);
    }
}
selectLanguage();