
// BÀI: Spread operator
// Ôn lại ES6+


// LƯU Ý TH2 của rest:
// function logger(a,b,...params) { //khúc này thêm a,b

// TH3: cách viết để cần phải obj.name và obj.price nhiều lần:
// function logger({ name, price, ...rest }) {

//     console.log(name);
// console.log(price);

//     console.log(rest);

// }

// logger({

//     name: 'Javascript',
// price: 1000,

//     description: 'Description content'

// });



// - còn TH4 của phần rest( mảng):
// function logger([a, b, ...rest]) {

//     console.log(a);
// console.log(b);
// console.log(rest);

// }

// logger([2, 6, 12, 3, 4, 41]);
// // nó sẽ in ra 2, 6 là của a và b đó, --> in ra cái còn lại

// Spread là toán tử giải
// var array1 = ['Javascript', 'Rubby', 'PHP'];
// var array2 = ['ReactJS', 'Dart'];

// var array3 = [...array2, ...array1];
// console.log(array3);

// var object1 = { name: 'Javascript' }; 

// var object2 = { age: 25 };
// var object3 = { ...object1, ...object2 };
// console.log(object3);

// var defaultConfig = {

//     api: 'https://domain-trang-khoa-hoc',

//     apiVersion: 'v1',

//     other: 'other',

// };

// var exerciseConfig = {

//     ...defaultConfig,

//     api: 'https://domain-trang-bai-tap'

// };

// console.log(exerciseConfig);




// Spread:
// var array = ['Javascript', 'PHP', 'Ruby', 'React'];

// function logger(...rest) { //rest để định nghĩa 

//     for (var i = 0; i < rest.length; i++) {

//         console.log(rest[i]);

//     }

// }

// logger(...array); //spread ...array, khi truyền đối số

