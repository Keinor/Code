//  src/json_console_quiz.js
class App {
     user_arr = new Array();

    constructor(timeForTestInMs,db) {
        this.timeForTestInMs=timeForTestInMs;
        this.db=db;
        this.startDate = new Date();
        this.endDate = this.startDate.getTime() + this.timeForTestInMs;

    }
    isTimerEnabled(){
        let now = new Date();
        return now <= this.endDate;

    }
    askNextQuestion(){
        this.user_arr[App.count] = prompt(this.db[App.count].question);
        App.count++;
    }

    run(){

    while(this.isTimerEnabled() && App.count < this.db.length){
        this.askNextQuestion();
}
    }
    complete(user_arr){
        alert('Время вышло');
        App.count = 0;
        let numCorrectAnsw = 0;
        while(App.count < this.db.length){

            console.log(this.db[App.count].question + ' ответ: '+this.db[App.count].right_answer);
            console.log('Ваш ответ ');
            if(user_arr[App.count] == this.db[App.count].right_answer){
               console.log('правильный');
               numCorrectAnsw++;
            } else
            {console.log('неверный!')}
            App.count++;
        }
        return numCorrectAnsw;

        }
    result(user_arr){
        console.log('Всего правильных ответов '+this.complete(this.user_arr));
    }
}
App.count = 0;




