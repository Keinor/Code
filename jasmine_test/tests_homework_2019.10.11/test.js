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

function counter(a){
	if(a<=9){
		return a;	
	}
	else {
		return `+`;
	}
}

function DateAge(date){
	var a= ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
	console.info('Возраст');
	console.info(a);
	return a;
}

function Random(list){
 let a = Math.floor(Math.random() * list.length);
 console.info('Рандомный элемент'); 
 console.info(list[a]);
return list[a];
}
