"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//  src/json_console_quiz.js
var App =
/*#__PURE__*/
function () {
  function App(timeForTestInMs, db) {
    _classCallCheck(this, App);

    _defineProperty(this, "user_arr", new Array());

    this.timeForTestInMs = timeForTestInMs;
    this.db = db;
    this.startDate = new Date();
    this.endDate = this.startDate.getTime() + this.timeForTestInMs;
  }

  _createClass(App, [{
    key: "isTimerEnabled",
    value: function isTimerEnabled() {
      var now = new Date();
      return now <= this.endDate;
    }
  }, {
    key: "askNextQuestion",
    value: function askNextQuestion() {
      this.user_arr[App.count] = prompt(this.db[App.count].question);
      App.count++;
    }
  }, {
    key: "run",
    value: function run() {
      while (this.isTimerEnabled() && App.count < this.db.length) {
        this.askNextQuestion();
      }
    }
  }, {
    key: "complete",
    value: function complete(user_arr) {
      alert('Время вышло');
      App.count = 0;
      var numCorrectAnsw = 0;

      while (App.count < this.db.length) {
        console.log(this.db[App.count].question + ' ответ: ' + this.db[App.count].right_answer);
        console.log('Ваш ответ ');

        if (user_arr[App.count] == this.db[App.count].right_answer) {
          console.log('правильный');
          numCorrectAnsw++;
        } else {
          console.log('неверный!');
        }

        App.count++;
      }

      return numCorrectAnsw;
    }
  }, {
    key: "result",
    value: function result(user_arr) {
      console.log('Всего правильных ответов ' + this.complete(this.user_arr));
    }
  }]);

  return App;
}();

App.count = 0;