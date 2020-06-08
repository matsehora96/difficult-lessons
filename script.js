//First task
let lang = 'ru';
//a
if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
//b
switch (lang) {
    case 'ru': 
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}
//c
let arr = {
    ru: ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    en: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
}
console.log(arr.ru);

//Second task
let namePerson = 'Коля';
let result = (namePerson == 'Артём') ? console.log('Директор') : 
    (namePerson == 'Максим') ? console.log('Преподаватель') : 
    console.log('Студент');