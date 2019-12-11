let quiz = [
    {
        "id" : "1",
        "tags" : "programming",
        "type" : "select",
        "question" : "Что такое JSON?",
        "answers" : [{
            "ans_" : "пакет данных",
            "value" : "data packet"
        }
            ,{
            "ans_" : "программа windows",
            "value" : "Windows program"
            },
            {
            "ans_" : "текстовый формат обмена данными",
            "value" : "text format"
        }],
        "right_answer" : "текстовый формат обмена данными",
        "date" : "2011-06-05T13:28:24Z"},
    {
        "id" : "2",
        "tags" : "programming",
        "type" : "radio",
        "question" : "Что такое виртуальная память?",
        "answers" : [{
            "ans_" : "внутренняя память центрального процессора  ",
            "value" : "CPU internal memory"},
            {
            "ans_" : "оперативная память + файл подкачки",
            "value" : "RAM + swap file"
    },
            {"ans_" : "суммарная память всех видов памяти компьютера",
            "value" : "total memory of all types of computer memory"
        }

        ],
        "right_answer" : "оперативная память + файл подкачки",
        "date" : "2019-05-05T10:28:24Z" },
    {
        "id" : "3",
        "tags" : "programming",
        "type" : "checkbox",
        "question" : "Что такое узел в DOM-модели?",
        "answers" :[ {
            "ans_" : "HTML-тег",
            "value" : "HTML"

        },
         {   "ans_" : "функции",
             "value" : "function"
     },{
            "ans_" : "объекты",
            "value" : "objects"
     }
        ],
        "right_answer" :  [
            'HTML-тег',
            'объекты'
        ],
        "date" : "2018-01-09T16:16:26Z" }
     //   ,

    // {
    //     "id" : "4",
    //     "tags" : "programming",
    //     "type" : "radio",
    //     "question" : "Какое ключевое слово позволяет создавать объекты общего вида?",
    //     "answers" : [{
    //         "ans_" : "object",
    //         "value" : "object"
    //     },
    //     {

    //         "ans_" : "prototype",
    //         "value" : "prototype"
    //         },
    //         {

    //         "ans_" : "this",
    //         "value" : "this"
    //     }],
    //     "right_answer" : "object",
    //     "date" : "2016-01-05T19:25:24Z"},

    // {
    //     "id" : "5",
    //     "tags" : "oc",
    //     "type" : "radio",
    //     "question" : "Объекты, отвечающие, что содержится на Web-странице в окне браузера называются:",
    //     "answers" : [{
    //         "ans_" : "клиентскими",
    //         "value" : "client"
    //       },{
    //          "ans_" : "пользовательскими",
    //          "value" : "custom"
    //      },{

    //            "ans_" : "встроенными",
    //            "value" : "embedded"
    //     }],
    //     "right_answer" : "клиентскими",
    //     "date" : "2018-01-09T16:16:26Z" },
    // {
    //     "id" : "6",
    //     "tags" : "oc",
    //     "type" : "radio",
    //     "question" : "В чем причина фрагментации памяти?",
    //     "answers" : [{
    //         "ans_" : "несовпадение размеров блоков свободной памяти и требуемых размеров запрашиваемых участков",
    //         "value" : "mismatch of free memory block sizes and required sizes of requested sections"

    //        },
    //        { "ans_" : "большое число запросов",
    //         "value" : "large number of requests"},
    //         {  "ans_" : "ненадежность операционной системы",
    //         "value" : "operating system unreliability"
    //     }],
    //     "right_answer" : "несовпадение размеров блоков свободной памяти и требуемых размеров запрашиваемых участков",
    //     "date" : "2018-11-10T17:10:26Z" },
    // {
    //     "id" : "7",
    //     "tags" : "database",
    //     "type" : "radio",
    //     "question" : "Система управления базой данных (СУБД) – это:",
    //     "answers" : [{
    //         "ans_" : "комплекс программных и языковых средств, необходимых для создания и модификации базы данных",
    //         "value" : "a set of software and language tools needed to create and modify a database"
    //        },{
    //         "ans_" : "поименованная совокупность структурированных данных, относящихся к определенной предметной области",
    //        "value" : "named set of structured data related to a specific subject area"
    //       },
    //       {  "ans_" : "регулярная структура, состоящая из однотипных записей, разбитых на поля",
    //       "value" : "regular structure consisting of records of the same type, divided into fields"
    //     }],
    //     "right_answer" : "комплекс программных и языковых средств, необходимых для создания и модификации базы данных",
    //     "date" : "2019-02-09T16:41:41Z"  },
    // {
    //     "id" : "8",
    //     "tags" : "database",
    //     "type" : "radio",
    //     "question" : "Таблица базы данных – это:",
    //     "answers" : [{
    //         "ans_" : "функциональная зависимость между объектами",
    //         "value" : "functional relationship between objects"
    //        },{ "ans_" : "поименованная совокупность структурированных данных, относящихся к определенной предметной области",
    //        "value" : "named set of structured data related to a specific subject area"

    //       },{  "ans_" : "регулярная структура, состоящая из однотипных записей, разбитых на поля",
    //       "value" : "regular structure consisting of records of the same type, divided into fields"
    //     }],
    //     "right_answer" : "регулярная структура, состоящая из однотипных записей, разбитых на поля",
    //     "date" : "2018-04-19T16:56:206Z"},
    // {
    //     "id" : "9",
    //     "tags" : "database",
    //     "type" : "radio",
    //     "question" : "Транзакция — это:",
    //     "answers" :[ {
    //         "ans_" : "изменение информации в базе в результате выполнения одной операции или их последовательности, которое должно быть выполнено полностью или не выполнено вообще",
    //         "value" : "changing information in the database as a result of a single operation or their sequence, which must be completed completely or not performed at all"

    //        },{ "ans_" : "хранимые процедуры, обеспечивающие соблюдение условий ссылочной целостности",
    //        "value" : "Stored procedures that enforce referential integrity"
    //       },
    //       {  "ans_" : "поименованная совокупность таблиц, экранных форм, отчетов, запросов, относящихся к определенной предметной области",
    //       "value" : "a named set of tables, screens, reports, queries related to a specific subject area"
    //     }],
    //     "right_answer" : "изменение информации в базе в результате выполнения одной операции или их последовательности, которое должно быть выполнено полностью или не выполнено вообще",
    //     "date" : "2018-01-03T11:08:09Z"   },
    // {
    //     "id" : "10",
    //     "tags" : "database",
    //     "type" : "radio",
    //     "question" : "Связи в базе данных устанавливаются Visual FoxPro:",
    //     "answers" : [{
    //         "ans_" : "между двумя полями таблиц",
    //         "value" : "between two table fields"
    //        },{ "ans_" : "между индексами (ключами) таблиц",
    //        "value" : "between indexes (keys) of tables"
    //       },
    //       {  "ans_" : "между первичным (Primary) и внешним (Regular) индексами (ключами) таблиц",
    //       "value" : "between primary (Primary) and external (Regular) indexes (keys) of tables"
    //     }],
    //     "right_answer" : "между индексами (ключами) таблиц",
    //     "date" : "2018-01-10T20:19:20Z"  }
];


let formEl = document.querySelector('.js-form');

let controlWrapperEl = formEl.querySelector('.js-form-control');

const FIELD_NAME = 'answer';

let count=-1;

 let arr = [];

 let check_back =document.querySelector('#answerBox');
let question_count = document.querySelector('.question_count');
let itt=1;
function generateFieldForAnswer({ type, question, answers }) {

    if(type == 'select'){
      return `
        <div class='form-control'>
            <div>
                ${question}
            </div>
             <select id='${FIELD_NAME}' >                        
               ${answers.map((item)=>{
                return `
                      <option  value='${item.value}'>${item.ans_}</option>                      
                   
                    `
            })}
                </select>
                <span>Вопрос ${itt++} из 10 </span> 
                
        </div>
        
    `;
    }
    return `
        <div class='form-control'>
            <div>
                ${question}
            </div>
               ${answers.map((item)=>{
                return `
                    <label class='${type}'>
                        <input type='${type}'  name='${FIELD_NAME}' data-value='${item.value}' />                        
                        <span>${item.ans_}</span>
                    </label>
                    `
            })}
               <span>Вопрос ${itt++} из 10 </span> 
        </div>
           ` ;

}

function extractCheckboxListValue(checkboxEls) {
    let result = [];

    for (let el of checkboxEls) {
        if (el.checked) {
            result.push(el.dataset.value);
        }
    }

    return result;
}

function attachToForm(html) {
    let controlEl = document.createElement('div');
    controlEl.innerHTML = html;
    controlWrapperEl.append(controlEl);
        
    
}

function generateDynamicForm() {
    let controlHTML = '';

    ++count;

    controlHTML += generateFieldForAnswer(quiz[count]); 
    attachToForm(controlHTML);


}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
 

    let formValue = {
        [FIELD_NAME]: extractCheckboxListValue(formEl.elements[FIELD_NAME])
    };
  
      let objSel = document.querySelector('#answer');
      if(objSel!=null){
        let key = objSel.options[objSel.selectedIndex].value;
         formValue = {    [FIELD_NAME]: key    };
  
      }

    console.info(formValue);

    if(formValue.answer.length == 0){
        alert("Вы не выбрали ответ!");
        count--;
        --itt;

    }

   
    arr.push(formValue.answer);

let residual = quiz.length-count;
    if( residual == 1){

    check_back.classList.remove("check_back_hidden");

    check_back.innerHTML+='Ответы:'+'</br>';
        for(let i=0; i<arr.length; i++){
          check_back.innerHTML +='<div>'+arr[i] +'<div>' ;
            
            }
          
         return document.querySelector('.btn-next').disabled=true;
    
     }
       
    generateDynamicForm();
    document.querySelector('.form-control').remove();


});

generateDynamicForm();

