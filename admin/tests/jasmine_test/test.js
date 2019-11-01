// почему var для функции? здесь это просто function yesOrNo(value)
// yon плохое название параметра, это не общепринятое сокращение, которое усложняет чтение кода
// усложненная логика, лучше проверить value на typeof boolean и всё
var yesOrNo = function(yon){
	if(typeof(yon) === "boolean"){
		return `yes`;
	}
	else if(yon === null) {
		return `null`;
	}
	else if(yon === undefined) {
		return `undefined`;
	}
	else {
		return `no`;
	}
}

// плохое название параметра, лучше total
// код не пройдет тесты, если передать 100, он должен вернуть 9+, а вернет +
// не пройдет тест на передачу null, undefined
function counter(a){
	if(a<=9){
		return a;	
	}
	else {
		return `+`;
	}
}

// название функции с маленькой буквы, названия функциям я давал
// здесь не должно быть console внутри самой функции, это некорректно с точки зрения побочных эффектов от использования функции
// 24 * 3600 * 365.25 * 1000 что за магия?
// и что за магия с | 0? если функция не может что-то посчитать, то должен быть экспепшн или null на выходе
// это дожно быть отдельными переменными / константами
// не пройдет тест на передачу null, undefined
function DateAge(date){
	var a= ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
	console.info('Возраст');
	console.info(a);
	return a;
}

// здесь не должно быть console внутри самой функции, это некорректно с точки зрения побочных эффектов
// плохое форматирование, в след раз не приму такой код на проверку
function Random(list){
 let a = Math.floor(Math.random() * list.length);
 console.info('Рандомный элемент'); 
 console.info(list[a]);
return list[a];
}
