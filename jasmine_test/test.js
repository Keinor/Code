// почему var для функции? здесь это просто function yesOrNo(value)
// yon плохое название параметра, это не общепринятое сокращение, которое усложняет чтение кода
// усложненная логика, лучше проверить value на typeof boolean и всё
var yesOrNo = function(value){
	if(typeof(value) === "boolean"){
		return `yes`;
	}
	else if(value === null) {
		return `null`;
	}
	else if(value === undefined) {
		return `undefined`;
	}
	else {
		return `no`;
	}
}

// плохое название параметра, лучше total
// код не пройдет тесты, если передать 100, он должен вернуть 9+, а вернет +
// не пройдет тест на передачу null, undefined
function counter_calculate(total){
    if(total<=9){
        return total;
    }
    else {
         return "9+";
    }
}


// название функции с маленькой буквы, названия функциям я давал
// здесь не должно быть console внутри самой функции, это некорректно с точки зрения побочных эффектов от использования функции
// 24 * 3600 * 365.25 * 1000 что за магия?
// и что за магия с | 0? если функция не может что-то посчитать, то должен быть экспепшн или null на выходе
// это дожно быть отдельными переменными / константами
// не пройдет тест на передачу null, undefined
function calculateAge(value){
    let current_date = new Date();
    let birthDate = new Date(value);
    let age = current_date.getFullYear() - birthDate.getFullYear();
    if (age < 0) {
        return null;
    }
    let month = current_date.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && current_date.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

}


// здесь не должно быть console внутри самой функции, это некорректно с точки зрения побочных эффектов
// плохое форматирование, в след раз не приму такой код на проверку
function Random(list){
 let a = Math.floor(Math.random() * list.length);
 return list[a];
}
