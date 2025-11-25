// const a = {
//     fullName: 'John Doe',
//     age: 30, 
//     address: {
//         city: 'New York',
//         zip: '10001',

//     }
// }


// console.log(a.address);

//toán tử SPREAD:
// var array1 = ['Javascript', 'Rubby', 'PHP'];
// var array2 = ['ReactJS', 'Dart'];
// var array3 = [...array2, ...array1];
// console.log(array3);

// var object1 = {
//     name: 'Javascript'
// };

// var object2 = {
//     age: 25
// };

// var object3 = {
//     ...object1,
//     ...object2
// };

// console.log(object3);


//  var array1=['Javacript', 'PHP', 'Ruby'];

//  var array2=['React', 'Dart'];

//  var array3=[...array1, ...array2];
 
//  console.log(array3);



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

// var array = ['Javascript', 'PHP', 'Ruby', 'React'];

// function logger(...rest) { //rest để định nghĩa 

//     for (var i = 0; i < rest.length; i++) {

//         console.log(rest[i]);

//     }

// }

// logger(...array); //spread ...array, khi truyền đối số


// // //12.JS MODULES
// import logger from './logger.js'; //này là kiểu export thẳng vì khi đẩy default bên logger thông thường

// logger('Test Message...', 'warn', TYPE_ERROR, TYPE_LOG, TYPE_WARN);
 
//VD2 về modules, nếu export bên kia kiểu expost ra cái const
//VD3:
import logger from './logge/index.js';// import default bình thường vì bên logger.js mình dùng export default
//or
//import constants, {TYPE_LOG, TYPE_ERROR, TYPE_WARN} from'./constants.js' --> không đươc--> phải import * as constants from'./constants.js' RỒI DÙNG constants.TYPE_LOG mới hết lỗi
//console.log(constants);
// import {TYPE_ERROR, //KHI NHÌN THẤY IMPORT TRONG NGOẶC NHƯ NÀY NGHĨA LÀ KHÔNG PHẢI DEFAULT, VÀ NGƯỢC LẠI
//         TYPE_WARN, 
//         TYPE_LOG}
// from './constants.js'; //import bình thường không cần default vì bên constants.js mình không dùng export default mà chỉ dùng export const
// logger  ('Test Message...', TYPE_WARN); 
// cái bên trên bài 13 tạm thời gác lại, xem đi xem lại nhiều lần, còn VD4 nữa

