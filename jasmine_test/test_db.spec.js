let quiz = [
    {
        "id" : "1",
        "tags" : "programming",
        "questionType" : "single",
        "question" : "Что такое JSON?",
        "answers" : {
            "ans_1" : "пакет данных",
            "ans_2" : "программа windows",
            "ans_3" : "текстовый формат обмена данными"
        },
        "right_answer" : "текстовый формат обмена данными",
        "date" : "2011-06-05T13:28:24Z"},
    {
        "id" : "2",
        "tags" : "programming",
        "questionType" : "single",
        "question" : "Что такое виртуальная память?",
        "answers" : {
            "ans_1" : " внутренняя память центрального процессора",
            "ans_2" : "оперативная памать + файл подкачки",
            "ans_3" : "суммарная память всех видов памяти компьютера"
        },
        "right_answer" : "оперативная памать + файл подкачки",
        "date" : "2019-05-05T10:28:24Z" },
    {
        "id" : "3",
        "tags" : "programming",
        "questionType" : "single",
        "question" : "Как называется файл подкачки в Windows?",
        "answers" : {
            "ans_1" : "pagefile.sys",
            "ans_2" : "Bootfont.bin",
            "ans_3" : "hiberfil.sys"
        },
        "right_answer" : "pagefile.sys",
        "date" : "2018-01-09T16:16:26Z" }
        ];


let db2 = new App(5000,quiz);

describe("Ответ от пользователя", function () {
    let ans = ['текстовый формат обмена данными', 'оперативная памать + файл подкачки', 'pagefile.sys'];
    it("Кол-во правильных вопросов - все",function () {
     expect(db2.complete(ans)).toEqual(3);
 })
});
describe("Ответ от пользователя", function () {
    let ans = ['текстовый формат обмена данными', 'внутренняя память центрального процессора', 'pagefile.sys'];
    it("Кол-во правильных вопросов - 2",function () {
        expect(db2.complete(ans)).toEqual(2);
    })

});
describe("Ответ от пользователя", function () {
    let ans = ['программа windows', ' внутренняя память центрального процессора', 'Bootfont.bin'];
    it("Кол-во правильных вопросов - ниодного",function () {
        expect(db2.complete(ans)).toEqual(0);
    })

});