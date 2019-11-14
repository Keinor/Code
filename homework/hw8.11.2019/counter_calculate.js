function counter_calculate(total){
    if(total<=9){
        return total;
    }
    else {
         return "9+";
    }
}


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

function resultOfCounter(total,age) {
    let el = document.createElement(`div`);
    el.innerHTML = `<strong>Счётчик: </strong>${counter_calculate(total)}` + `<br><strong>Возраст: </strong>${calculateAge(age)}`;
    document.body.append(el);
}
resultOfCounter(41,"1998.09.19");

