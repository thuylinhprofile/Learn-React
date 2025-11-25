// function logger(log, type='log') {
//     console[type](log);   // viết xong cái import này thì phải export ra chỗ khác thì nó mới nạp ra và dùng được
// }
// export default logger;  //export+default+ để xuất hàm 'logger' ra ngoài
//VD2 về modules VÀ 1 MODULES CHỈ DEFAULT ĐƯỢC 1 LẦN THÔI.

import {TYPE_LOG} from '../constants.js'; //VD3(13)
function logger (log, type=TYPE_LOG){     // VD3(13)
 }
// import logger from './logger/index.js'; //import default bình thường vì bên logger.js mình dùng export default
//  function logger (log, type='log'){     // viết xong cái import này thì phải export ra chỗ khác thì nó mới nạp ra và dùng được
//     console[type](log) //cái này dùng để in ra console VÀ type là kiểu gì thì in ra kiểu đó, mặc định là 'log'
//  }
 //còn đây là kiểu VD2: export ra 1 cái biến 
// export const TYPE_LOG ='log'
// export const TYPE_ERROR='error'
// export const TYPE_WARN='warn' // bây giờ mình có cái từ khoá export như này nên làm thế nào để xuất biến này ra ngoài được? mà mỗi file chỉ được 1 default.
//--> VẬY HÃY PHẨY SAU LOGGER Ở IMPOR ở bên app.js: import logger,{TYPE_LOG, TYPE_ERROR, TYPE_WARN} from'./logger.js' RỒI IMPORT THEO CÁCH BÌNH THƯỜNG KHÔNG CẦN DEFAULT NỮA

export default logger; //này của VD1, export default để xuất hàm 'logger' ra ngoài

// cái bên trên bài 13 tạm thời gác lại, xem đi xem lại nhiều lần