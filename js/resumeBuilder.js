
//Меняем в переменной HTMLheaderName %data% на Игорь.
 var formName = HTMLheaderName.replace("%data%", "Игорь Вальнев");

 //Создаем переменную и с помощью нее меняем значение в другой переменной
 var role = "Web Developer";
 var formRole = HTMLheaderRole.replace("%data%", role);

//Выбираем блок с ID header и вставляем в него нужные переменные
$("#header").prepend(formRole);
$("#header").prepend(formName);


/*Добавляем имя, фамилию и другие данные с помощью 
объекта*/
/*var bio = {
	"Firstname" : "Игорь",
	"Lastname" : "Вальнев",
	"contacts" : 89067150583,
	"image" : "images/fry.jpg",
	"skils" : [
		"Ученье",
		"свет",
		"а",
		"неученье",
		"чуть",
		"свет",
		"и",
		"на",
		"работу"
	],
	"message" : "Welcome to my homepage!"
};

$("#main").append(bio.Firstname);
*/
/*Создаем пустой объект, а потом добавляем к нему свойства*/
/*var work = {};
work.city = "Раменское";
work.age = 8;
work["status"] = "stoped";
work["interesting"] = "no";

$("#main").append(work.city);
$("#main").append(work["status"]);*/
/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*Рассказ о моей карьере, учебе, курсах. JSON*/

/*Работа: Работадатель, название, где находится, стаж*/
var work = {
	"jobs": [
 	{
 		"employer" : "МЧС России",
 		"title": "ОНД по Раменскому району",
 		"location" : "Раменский район Московская область",
 		"dates" : "2008-2017"
 	},
 	{
 		"employer" : "ООО Аплана",
 		"title": "Аплана",
 		"location" : "Москва",
 		"dates" : "2017-н.в"
 	}]
 }
 var projects ={
 	"projects" : [
 	{
 		"title" : "Сайт ОНД по Раменскому р-ну",
 		"dates" : "2017-2017",
 		"description" : "Сайт ОНД по Раменскому р-ну"
 	},
 	{
 		"title" : "Сайт PhotonSecurity.ru",
 		"dates" : "2017-н.в.",
 		"description" : "Сайт фирмы по пожарной сигнализации"
 	}]
}
