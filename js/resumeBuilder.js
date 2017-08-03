/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Меняем в переменной HTMLheaderName %data% на Игорь.
 var formName = HTMLheaderName.replace("%data%", "Игорь Вальнев");

 //Создаем переменную и с помощью нее меняем значение в другой переменной
 var role = "Web Developer";
 var formRole = HTMLheaderRole.replace("%data%", role);

//Выбираем блок с ID header и вставляем в него нужные переменные
$("#header").prepend(formRole);
$("#header").prepend(formName);
 

