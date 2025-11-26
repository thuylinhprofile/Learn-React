// BÀI: Enhanced object literals
// Ôn lại ES6+
// 1. định nghĩa key:
// cái enhance object literals sẽ giúp viết code ngắn gọn hơn trong trường hợp ta định nghĩa key và value của nó dạng biến, cùng là 1 cái gì đó như name và price 

// var name='Javacript';
// var price =1000;
// var course = {

//        name= name,
// price=price
// };
// console.log(course);
// -->SAU KHI ĐƯỢC ĐỊNH NGHĨA KEY CHO OBJECT thành:
// var name='Javacript';
// var price =1000;
// var course = {

// name, (bỏ vế: name đi, đây là định nghĩa kiểu ngắn gọn)
// price
// };
// console.log(course);

// 2. định nghĩa method cho object:
// var name ='Javascript';
// var price=1000;

//  var course ={
// name,

//        price,
// getName: function() { --> bỏ luôn cái : function đi thành: getName() {

//                 return name
// }

// };

// console.log(course);--> thành console.log(course.getName());

// 3. Định nghĩa key cho object dưới dạng biến: ví dụ ở đây là fieldName
// var fieldName = 'name'; //cái name trong ngoặc '' có thể đổi được nhé

// var fieldPrice ='price';

// const course ={
// // cách bình thường là: name: 'Javacript', còn định nghĩa key cho object dưới dạng biến thì cho vào []
// [fieldName]: 'Javascript', //fieldName là biến, ít ng dùng tnay, nếu khai báo được như bth thì càng tốt
// [fieldPrice]: 1000

// };

// console.log(course);
