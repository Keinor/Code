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
        "right_answer" : "a",
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
        "right_answer" : "s",
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
        "right_answer" : "d",
        "date" : "2018-01-09T16:16:26Z" },
    {
        "id" : "4",
        "tags" : "programming",
        "questionType" : "single",
        "question" : "Какое ключевое слово позволяет создавать объекты общего вида?",
        "answers" : {
            "ans_1" : "object",
            "ans_2" : "prototype",
            "ans_3" : "this"
        },
        "right_answer" : "object",
        "date" : "2016-01-05T19:25:24Z"},
    {
        "id" : "5",
        "tags" : "oc",
        "questionType" : "single",
        "question" : "Объекты, отвечающие, что содержится на Web-странице в окне браузера называются:",
        "answers" : {
            "ans_1" : "клиентскими",
            "ans_2" : "пользовательскими",
            "ans_3" : "встроенными"
        },
        "right_answer" : "клиентскими",
        "date" : "2018-01-09T16:16:26Z" },
    {
        "id" : "6",
        "tags" : "oc",
        "questionType" : "single",
        "question" : "В чем причина фрагментации памяти?",
        "answers" : {
            "ans_1" : "несовпадение размеров блоков свободной памяти и требуемых размеров запрашиваемых участков",
            "ans_2" : "большое число запросов",
            "ans_3" : "ненадежность операционной системы"
        },
        "right_answer" : "несовпадение размеров блоков свободной памяти и требуемых размеров запрашиваемых участков",
        "date" : "2018-11-10T17:10:26Z" },
    {
        "id" : "7",
        "tags" : "database",
        "questionType" : "single",
        "question" : "Система управления базой данных (СУБД) – это:",
        "answers" : {
            "ans_1" : "комплекс программных и языковых средств, необходимых для создания и модификации базы данных",
            "ans_2" : "поименованная совокупность структурированных данных, относящихся к определенной предметной области",
            "ans_3" : "регулярная структура, состоящая из однотипных записей, разбитых на поля"
        },
        "right_answer" : "комплекс программных и языковых средств, необходимых для создания и модификации базы данных",
        "date" : "2019-02-09T16:41:41Z"  },
    {
        "id" : "8",
        "tags" : "database",
        "questionType" : "single",
        "question" : "Таблица базы данных – это:",
        "answers" : {
            "ans_1" : "функциональная зависимость между объектами",
            "ans_2" : "поименованная совокупность структурированных данных, относящихся к определенной предметной области",
            "ans_3" : "регулярная структура, состоящая из однотипных записей, разбитых на поля"
        },
        "right_answer" : "регулярная структура, состоящая из однотипных записей, разбитых на поля",
        "date" : "2018-04-19T16:56:206Z"},
    {
        "id" : "9",
        "tags" : "database",
        "questionType" : "single",
        "question" : "Транзакция — это:",
        "answers" : {
            "ans_1" : "изменение информации в базе в результате выполнения одной операции или их последовательности, которое должно быть выполнено полностью или не выполнено вообще",
            "ans_2" : "хранимые процедуры, обеспечивающие соблюдение условий ссылочной целостности",
            "ans_3" : "поименованная совокупность таблиц, экранных форм, отчетов, запросов, относящихся к определенной предметной области"
        },
        "right_answer" : "изменение информации в базе в результате выполнения одной операции или их последовательности, которое должно быть выполнено полностью или не выполнено вообще",
        "date" : "2018-01-03T11:08:09Z"   },
    {
        "id" : "10",
        "tags" : "database",
        "questionType" : "single",
        "question" : "Связи в базе данных устанавливаются Visual FoxPro:",
        "answers" : {
            "ans_1" : "между двумя полями таблиц",
            "ans_2" : "между индексами (ключами) таблиц",
            "ans_3" : "между первичным (Primary) и внешним (Regular) индексами (ключами) таблиц"
        },
        "right_answer" : "между индексами (ключами) таблиц",
        "date" : "2018-01-10T20:19:20Z"  }
];

let db = new App(5000*quiz.length, quiz);
db.run();

db.result();