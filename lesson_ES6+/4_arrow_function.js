// BÀI Arrow function Ôn lại ES6+
// TH1:
// const sum = (a,b) => {

// ( nếu dùng ngoặc này thì phải viết thêm return vào thì máy mới hiểu)
// return a+b;
// }

// console.log(sum(2,2));
// TH2: hoac neu khong viet ngoac {} thi chi can viet, va no tu hieu day la ham return luon:
// const sum =(a, b) => a+b;

// console.log(sum(2,2));
// TH3:
// -const sum=(a,b)=>({a:a, b: b }); ( khi k bọc trong ngoặc tròn thì đằng saudấu mũi tênthì k được giống trong ngoặctròn đằng trước a,b ấy nên phải bọc lại object bằng ngoặc tròn thì n moi hieu la return () )
// - neu viet co return thi viet nhu nay:
// const sum = (a,b) => {

// a:a;
// b:b
// };
// };
// console.log(sum(2,2));

// Vì triple là hàm bình thường, không phải constructor, nên không dùng new.và k viết const ấyxem lại bài kiểm tra

// TH1: không có context.
// const course = {
// name: 'Javascript basic!',

//            getName: function() {
// return this.name;
// }

// };
// console.log(course.getName());

// TH2: có context.

// const course = {
// name: 'Javascript basic!',

// getName: function() {
// return this.name;
// }
// };
// console.log(course.getName());

// TH1: k dùng arrow function:
// const Course = function(name, price) {
// this.name=name;
// this.price=price;
// }

// const jsCourse = new Course('Javascript', 1000);
// console.log(jsCourse);

// TH2: sửa cái trên thành arrow function thì nó sẽ có 1 kiểu lỗi contructor
// const Course = (name, price) => {
// this.name=name;
// this.price=price;
// }

// const jsCourse = new Course('Javascript', 1000);
// console.log(jsCourse);
