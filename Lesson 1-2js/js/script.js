//ЗАДАНИЕ 1.1

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Число = ", '');
var n = prompt("степень = ", '');

if (n <= 1) {
  alert('Введите другую степень');
} else {
  alert( pow(x, n) );
  console.log( pow(x, n))
}

//ЗАДАНИЕ 1.2

 var arrName = [];

for(var i = 0; i < 5; i++) {
  var inputName = prompt('Введте имя пользователя','')
  
  arrName[i] = inputName;

  console.log( arrName[i] );
}

var userName = prompt('Теперь введите свое имя','');
 
function find(array) {
  for (var i = 0; i < array.length; i++) {
     if ( array[i] == userName ) return true;
  }

    return false;
}

if( find(arrName) == true ){
  alert(userName+'Вы успешно вошли')
}
else{
  alert('Ошибка')
} 
