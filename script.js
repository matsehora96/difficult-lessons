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
    'ru': ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    'en': ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
}
let keysObj = Object.keys(arr);
(lang == keysObj[0]) ? console.log(arr.ru) : console.log(arr.en);

//Second task
let namePerson = 'Миша';
(namePerson == 'Артём') ? console.log('Директор') : 
    (namePerson == 'Максим') ? console.log('Преподаватель') : 
    console.log('Студент');