SPA/MPA là gì?
Giới thiệu
sự khác biệt: 

-SPA: cách tiếp cận hiện đại hơn, không yêu cầu tải lại trang trong quá trình sử dụng, kiểu single page.

-MPA: là cách tiếp cận cổ điển hơn, phải tải lại trang trong quá trình sử dụng( click vào đường link, chuyển sang,...)


## Tốc độ
SPA nhanh hơn khi sử dụng

Phần lớn tài nguyên được tải trong lần đầu
Trang chỉ tải thêm dữ liệu mới khi cần
MPA chậm hơn khi sử dụng
Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng
Bóc tách

SPA có phần Front-end riêng biệt
MPA: Front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án
SEO
SPA không thân thiện SEO như MPA
SPA cho trải nghiệm trên thiết bị di động tốt hơn
UX

SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
Trải nghiệm trên thiết bị di động tốt hơn
Quá trình phát triển

SPA dễ dàng tái sử dụng code (component)
SPA bóc tách FE & BE
Chia team phát triển song song
Phát triển thêm mobile app dễ dàng

##Phụ thuộc vào javascript

-SPA phụ thuộc hoàn toàn vào Javascript

-MPA có thể không cần Javascript


SPA – Single-Page Application
ReactJS là 1 trong những thư viện tạo ra SPA
Các “ông lớn” sử dụng SPA: Google, Facebook, Twitter
Các SPA khác: F8, Shopee, 30Shine, Chợ Tốt, ZingMP3
Cách triển khai
SPA – Single-Page Application → CSR → Client-side Rendering
MPA – Multi-Page Application → SSR → Server-side Rendering

BÀI Arrow function Ôn lại ES6+
TH1:
const sum = (a,b) => {

( nếu dùng ngoặc này thì phải viết thêm return vào thì máy mới hiểu)
return a+b;
}

console.log(sum(2,2));
TH2: hoac neu khong viet ngoac {} thi chi can viet, va no tu hieu day la ham return luon:
const sum =(a, b) => a+b;

console.log(sum(2,2));
TH3:
-const sum=(a,b)=>({a:a, b: b }); ( khi k bọc trong ngoặc tròn thì đằng saudấu mũi tênthì k được giống trong ngoặctròn đằng trước a,b ấy nên phải bọc lại object bằng ngoặc tròn thì n moi hieu la return () )
- neu viet co return thi viet nhu nay:
const sum = (a,b) => {

a:a;
b:b
};
};
console.log(sum(2,2));

Vì triple là hàm bình thường, không phải constructor, nên không dùng new.và k viết const ấyxem lại bài kiểm tra

TH1: không có context.
const course = {
name: 'Javascript basic!',

           getName: function() {
return this.name;
}

};
console.log(course.getName());

TH2: có context.

const course = {
name: 'Javascript basic!',

getName: function() {
return this.name;
}
};
console.log(course.getName());

TH1: k dùng arrow function:
const Course = function(name, price) {
this.name=name;
this.price=price;
}

const jsCourse = new Course('Javascript', 1000);
console.log(jsCourse);

TH2: sửa cái trên thành arrow function thì nó sẽ có 1 kiểu lỗi contructor
const Course = (name, price) => {
this.name=name;
this.price=price;
}

const jsCourse = new Course('Javascript', 1000);
console.log(jsCourse);



BÀI: Enhanced object literals
Ôn lại ES6+
1. định nghĩa key:
cái enhance object literals sẽ giúp viết code ngắn gọn hơn trong trường hợp ta định nghĩa key và value của nó dạng biến, cùng là 1 cái gì đó như name và price 

var name='Javacript';
var price =1000;
var course = {

       name= name,
price=price
};
console.log(course);
-->SAU KHI ĐƯỢC ĐỊNH NGHĨA KEY CHO OBJECT thành:
var name='Javacript';
var price =1000;
var course = {

name, (bỏ vế: name đi, đây là định nghĩa kiểu ngắn gọn)
price
};
console.log(course);

2. định nghĩa method cho object:
var name ='Javascript';
var price=1000;

 var course ={
name,

       price,
getName: function() { --> bỏ luôn cái : function đi thành: getName() {

                return name
}

};

console.log(course);--> thành console.log(course.getName());

3. Định nghĩa key cho object dưới dạng biến: ví dụ ở đây là fieldName
var fieldName = 'name'; //cái name trong ngoặc '' có thể đổi được nhé

var fieldPrice ='price';

const course ={
// cách bình thường là: name: 'Javacript', còn định nghĩa key cho object dưới dạng biến thì cho vào []
[fieldName]: 'Javascript', //fieldName là biến, ít ng dùng tnay, nếu khai báo được như bth thì càng tốt
[fieldPrice]: 1000

};

console.log(course);





Destructuring, Rest
Ôn lại ES6+

var array = ['Javascript', 'PHP', 'Ruby'];
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a, b, c);
8. Destructuring là cái giúp lấy được các element phần tử ở bên trong như 'Javascript', 'PHP', 'Ruby' mà k cần phải đi qua array như trên:
-TH1: lấy tất phần tử:
var array = ['Javascript', 'PHP', 'Ruby'];
var [a, b, c] = array;
console.log(a, b, c);
- TH2: lấy ra a và c thôi:
var array = ['Javascript', 'PHP', 'Ruby'];
var [ a, , c] = array;

console.log(a, c);



-TH3: rest(lấy những toán tử còn lại)
var array = ['Javascript', 'PHP', 'Ruby'];
var [a, b, ...rest] = array; // có viết thêm b vào mà ở dưới k gọi b thì vẫn chỉ là lấy mỗi a thôi.
console.log(a);
console.log(rest);


var course = {
name: 'Javascript',
price: 1000,
image: 'image-address', //khai báo
};
var { name, price, image } = course; //cái này để lấy phần tử ra, nếu k lấy ở đây thì viết ở dưới cũng = 0


console.log(name, price, image); //lấy ra mấy phần tử ở trên

-TH3: Rest:
var course = {
name: 'Javascript',
price: 1000,
image: 'image-address',
};
var { name, ...rest } = course;
console.log(name);
console.log(rest); // cái này kiểu in ra những cái còn lại ngoài cái name ấy, vdu còn price và image thì rest in ra 

-TH4: cách xoá 1 key object( thủ thuật):
var course = {

name: 'Javascript',
price: 1000,
image: 'image-address',
};
var { name, ...newObject } = course; // thay bằng newObject
console.log(newObject); // lấy ra cũng thế
BUT: nếu cái object phần tử ấy mà lại có thêm phần tử con nữa thì phải làm gì?


var course = {

    name: 'Javascript',

    price: 1000,

    image: 'image-address',

    children: {

        name: 'ReactJS'

    }

};

var { name: parentName, children: { name: childrenName } } = course;

console.log(parentName);

console.log(childrenName);


lấy 1 cái value không được định nghĩa kiểu gì? nếu var dưới lấy ra mà ở khai báo bên trên k có thì ta sẽ nhận được undefined:
var course = {

    name: 'Javascript',

    price: 1000,

    image: 'image-address',

};

var { name, description } = course;

console.log(name);

console.log(description);

trên đây là code có cái description ra undefined


Rest Parameters:
function logger(...params) { //lúc này nhận bao nhiêu tham số cũng được, ở dưới )
console.log(params);

}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8)); //...params là lấy ra tất cả các tham số ấy nên có bao nhiêu cũng lấy



BÀI: Spread operator
Ôn lại ES6+


LƯU Ý TH2 của rest:
function logger(a,b,...params) { //khúc này thêm a,b

TH3: cách viết để cần phải obj.name và obj.price nhiều lần:
function logger({ name, price, ...rest }) {

    console.log(name);
console.log(price);

    console.log(rest);

}

logger({

    name: 'Javascript',
price: 1000,

    description: 'Description content'

});



- còn TH4 của phần rest( mảng):
function logger([a, b, ...rest]) {

    console.log(a);
console.log(b);
console.log(rest);

}

logger([2, 6, 12, 3, 4, 41]);
// nó sẽ in ra 2, 6 là của a và b đó, --> in ra cái còn lại

Spread là toán tử giải
var array1 = ['Javascript', 'Rubby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array1];
console.log(array3);

var object1 = { name: 'Javascript' }; 

var object2 = { age: 25 };
var object3 = { ...object1, ...object2 };
console.log(object3);

var defaultConfig = {

    api: 'https://domain-trang-khoa-hoc',

    apiVersion: 'v1',

    other: 'other',

};

var exerciseConfig = {

    ...defaultConfig,

    api: 'https://domain-trang-bai-tap'

};

console.log(exerciseConfig);




Spread:
var array = ['Javascript', 'PHP', 'Ruby', 'React'];

function logger(...rest) { //rest để định nghĩa 

    for (var i = 0; i < rest.length; i++) {

        console.log(rest[i]);

    }

}

logger(...array); //spread ...array, khi truyền đối số



JS modules
Ôn lại ES6+
bài này khá nhiều cách và hay loạn nên phải xem lại nhiều lần, viết bên app.js và logger.js và constants.js bên vscode nên xem lại, có khoảng hơn 3 VD

Lưu ý: React đã có phiên bản 18
React, ReactDOM:
cái này clone react 18 về


Cách thêm React vào Website
React, ReactDOM
giới thiệu là chủ yếu: 

//Github → để xem mã nguồn

NPMJS → dành cho cài React bằng npm (React + bundler như Vite/CRA)

UNPKG → để nhúng React vào file index.html (React CDN)

//2. Add React to website

//3.Official docs



Cách thêm React vào Website
React, ReactDOM:
thư viện React @17 vào website:
<script crossorigin src="https://unpkg.com/react@17.0.0/umd/react.production.min.js"></script>



BÀI: document.createElement() để làm gì?
React, ReactDOM



<script>

// DOM

const h1DOM = document.createElement('h1')

h1DOM.title = 'Hello'

h1DOM.className = 'heading'

h1DOM.innerText = 'Hello guys!'

document.body.appendChild(h1DOM)



// React -> React-DOM

const h1React = React.createElement('h1', {

title: 'Hello',

className: 'heading'

}, 'Hello guys!')

</script>


