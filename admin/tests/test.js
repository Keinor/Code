/*function(flag){
	if(typeof(flag) === "boolean"){
		return `yes`;
	}
	else if(typeof(yon) === "undefined") {
		return undefined;
	}
	else {
		return null;
	}
}*/

function counter(total){
	if(total<=9){
		return total;
	
	}
	else {
		var tot = 9+`+`;
		return tot;
	}
}

function calculateAge(value){
	var a= ((new Date().getTime() - new Date(value)) / (24 * 3600 * 365.25 * 1000));
	console.info('Возраст');
	console.info(a);
	return a;
}
/*
function Random(list){
 let a = Math.floor(Math.random() * list.length);
 console.info('Рандомный элемент'); 
 console.info(list[a]);
return list[a];
}
*/