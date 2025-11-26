// Destructuring, Rest
// Ôn lại ES6+

// var array = ['Javascript', 'PHP', 'Ruby'];
// var a = array[0];
// var b = array[1];
// var c = array[2];
// console.log(a, b, c);
// 8. Destructuring là cái giúp lấy được các element phần tử ở bên trong như 'Javascript', 'PHP', 'Ruby' mà k cần phải đi qua array như trên:
// -TH1: lấy tất phần tử:
// var array = ['Javascript', 'PHP', 'Ruby'];
// var [a, b, c] = array;
// console.log(a, b, c);
// - TH2: lấy ra a và c thôi:
// var array = ['Javascript', 'PHP', 'Ruby'];
// var [ a, , c] = array;

// console.log(a, c);



// -TH3: rest(lấy những toán tử còn lại)
// var array = ['Javascript', 'PHP', 'Ruby'];
// var [a, b, ...rest] = array; // có viết thêm b vào mà ở dưới k gọi b thì vẫn chỉ là lấy mỗi a thôi.
// console.log(a);
// console.log(rest);


// var course = {
// name: 'Javascript',
// price: 1000,
// image: 'image-address', //khai báo
// };
// var { name, price, image } = course; //cái này để lấy phần tử ra, nếu k lấy ở đây thì viết ở dưới cũng = 0


// console.log(name, price, image); //lấy ra mấy phần tử ở trên

// -TH3: Rest:
// var course = {
// name: 'Javascript',
// price: 1000,
// image: 'image-address',
// };
// var { name, ...rest } = course;
// console.log(name);
// console.log(rest); // cái này kiểu in ra những cái còn lại ngoài cái name ấy, vdu còn price và image thì rest in ra 

// -TH4: cách xoá 1 key object( thủ thuật):
// var course = {

// name: 'Javascript',
// price: 1000,
// image: 'image-address',
// };
// var { name, ...newObject } = course; // thay bằng newObject
// console.log(newObject); // lấy ra cũng thế
// BUT: nếu cái object phần tử ấy mà lại có thêm phần tử con nữa thì phải làm gì?


// var course = {

//     name: 'Javascript',

//     price: 1000,

//     image: 'image-address',

//     children: {

//         name: 'ReactJS'

//     }

// };

// var { name: parentName, children: { name: childrenName } } = course;

// console.log(parentName);

// console.log(childrenName);


// lấy 1 cái value không được định nghĩa kiểu gì? nếu var dưới lấy ra mà ở khai báo bên trên k có thì ta sẽ nhận được undefined:
// var course = {

//     name: 'Javascript',

//     price: 1000,

//     image: 'image-address',

// };

// var { name, description } = course;

// console.log(name);

// console.log(description);

// trên đây là code có cái description ra undefined


// Rest Parameters:
// function logger(...params) { //lúc này nhận bao nhiêu tham số cũng được, ở dưới )
// console.log(params);

// }

// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8)); //...params là lấy ra tất cả các tham số ấy nên có bao nhiêu cũng lấy

