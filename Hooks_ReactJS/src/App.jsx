// import {useState} from 'react' //đang làm ứng dụng đếm số
// function App() {
//  const [counter, setCounter] = useState(1) //bài toán bắt đầu đếm số từ 1( nhưng 1 là gtri khởi tạo nên chỉ lấy đúng 1 lần đầu thôi) nên giá trị khởi tạo sẽ bằng 1 và cái số 1 này sẽ được lưu vào cái counter kia
//  //tạo ra hàm (hàm xử lý tăng), tên này tự đặt thôi.
//  const handleIncrease = () => {
//   setCounter( counter+1) //hàm setCounter như này khiến từ counter=1 thành counter+1 thì sẽ làm thay đổi giá trị ban đầu của state là 1 thành mỗi lần bấm lại +1 --> thành 2,3,4,5,.....

//   // //hoặc TH2 tách biệt hẳn với TH1 bên trên callback thì nó vẫn z mà render 1 lần thôi nhưng chạy khác bth:
//   // setCounter(prevState => prevState+1)
//   // setCounter(prevSate => prevState+1)
//   // setCounter(prevSate => prevState+1)

//  }

//   return (
//     <div className="App" style={{ padding : 20}}>
//       {/* bây giờ đi viết 1 thẻ h1 render ra cái counter này */}
//       <h1>{counter} </h1>
//        {/* viết 1 cái button có nghĩa là tăng lên, mà mình muốn tạo ra 1 cái hàm từ onClick={} để tăng lên thì ở dưới dòng const[counter, setCounter] sẽ
//        viết 1 hàm const để tăng số, goị hàm handleIncrease ở trên rồi mới gắn vào onClick{handleIncrease} */}
//       <button onClick={handleIncrease}>Increase</button>  //đoạn này gọi hàm handleIncrease rồi nên cái hàm const được tạo ở trên mới được thực thi//
//     </div>
//   )
// }

// export default App

//set State là thay thế giá trị mới:
//đang làm cái up date, xài object sẽ bị sửa --> thành object có bio
// import {useState} from 'react'
// function App() {
//  const [info, setInfo] = useState({
//   name: 'Nguyễn Văn A',
//   age: 18,
//   address:'Ha Noi, Viet Nam'
//  })
//   //bài toán bắt đầu đếm số từ 1( nhưng 1 là gtri khởi tạo nên chỉ lấy đúng 1 lần đầu thôi) nên giá trị khởi tạo sẽ bằng .... này sẽ được lưu vào cái info kia
//  //tạo ra hàm (hàm xử lý tăng), tên này tự đặt thôi.
//  const handleUpdate = () => {

//   //TH1:
//   //hoặc callback tuỳ trường hợp:
//   setInfo ( prev =>({

//     //...cần viết logic ở đây thì mới nên dùng cái này
//     ...prev,
//     bio:'yêu màu hồng của callback'
//   }))
// }

//TH2:
//   setInfo({
//     //Nếu MUỐN THÊM GIÁ TRỊ VÀO THÌ PHẢI LÀM SAO? --> ÁP DỤNG TOÁN TỬ ES6, dùng toán tử spreads rải vào
//     ...info, //chạy thử thì là k phải thay thế toàn bộ info = bio mà là thêm bio vào cùng name, age, address,...
//     bio: 'yêu màu hồng của bth' //nội dung mới được thay thế
//   })
//  }

//   return (
//     <div className="App" style={{ padding : 20}}>
//       {/* bây giờ đi viết 1 thẻ h1 render ra cái info này mà là chuỗi vì cái trên nó là object thì phải đổi nó ra dạng chuỗi: */}
//       <h1>{JSON.stringify(info)} </h1>
//        {/* viết 1 cái button có nghĩa để update, mà mình muốn tạo ra 1 cái hàm từ onClick={} để update thì ở dưới dòng const[info, setInfo] sẽ
//        viết , goị hàm handleUpdate ở trên rồi mới gắn vào onClick{handleUpdate}, nó là object thì phải đổi nó sang chuỗi */}
//       <button onClick={handleUpdate}>Update</button>  //đoạn này gọi hàm handleUpdate rồi nên cái hàm const được tạo ở trên mới được thực thi, nghĩa là ND mới của hàm được áp dụng//
//     </div>
//   );
// }

// export default App

// import {useState} from 'react'
// function Add() {
//   const[a, setA]=useState(3)
//   const[b, setB]=useState(4)
// const [sum, setSum] = useState(0);

//   const handleSum =()=>{
//     setSum(a+b)
//   }

// //   import React, { useState } from 'react';

// // function MyComponent() {
// //   const [value, setValue] = useState('');

// //   const handleChange = (event) => {
// //     setValue(event.target.value);
// //   };

// //   return (
// //     <input type="text" value={value} onChange={handleChange} />
// //   );
// // }

//  return (
//     <div className="Add" style={{ padding : 20}}>
//     <form onSubmit={handleSum}>

//       <h1>kết quả: {sum} </h1>

//       <input type="number"
//       value={a}
//           onChange={(e) => setA(Number(e.target.value))}></input>
//       <input type="number" value={a}
//           onChange={(e) => setA(Number(e.target.value))}
//           ></input>
//       <button type="submit">Sum</button>
//       </form>
//     </div>
//   )
// }

// export default Add

//thử làm lại BT của CVT:
// import { useState } from "react";

// function SumForm() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);

//   const handleChangeA = (e) => {
//     setA(Number(e.target.value)); // nhớ ép kiểu số
//   };

//   const handleChangeB = (e) => {
//     setB(Number(e.target.value));
//   };

//   const sum = a + b;

//   return (
//     <div>
//       <input
//         type="number"
//         value={a}
//         onChange={handleChangeA}
//         placeholder="Nhập a"
//       />
//       <input
//         type="number"
//         value={b}
//         onChange={handleChangeB}
//         placeholder="Nhập b"
//       />

//       <p>Tổng: {sum}</p>
//     </div>
//   );
// }

// export default SumForm;

//e là event object – đối tượng sự kiện được React gửi vào khi bạn gọi hàm trong event
// e.target là input bị thay đổi

// e.target.value là giá trị t gõ
//   import React, { useState } from 'react';

// function MyComponent() {
//   const [value, setValue] = useState('');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <input type="text" value={value} onChange={handleChange} />
//   );
// }

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

//fix lại BT:
// import { useState } from "react";

// function Add() {
//   const [a, setA] = useState(5);
//   const [b, setB] = useState("");
//   const [c, setC] = useState("");

//   const handleChangeA = (e) => {
//     console.log(e.target.value);
//     setA(Number(e.target.value)); // Ép kiểu số
//   };

//   const handleChangeB = (e) => {
//     setB(Number(e.target.value));
//   };

//   const handleSum = (e) => {
//     // vì dùng form onSubmit nên bắt buộc phải dùng e.
//     e.preventDefault(); //event handler ngăn form reload
//     setC(Number(a) + Number(b)); // Tính c
//   };

//   return (
//     <div className="Add" style={{ padding: 20 }}>
//       <>
//         a: {a}, b: {b}
//       </>
//       <h1>Kết quả: {c}</h1>
//       <input
//         type="number"
//         value={a}
//         onChange={handleChangeA}
//         placeholder="Nhập a"
//       />
//       <input
//         type="number"
//         value={b}
//         onChange={(e) => {
//           console.log(e.target.value);
//           setB(e.target.value);
//         }}
//         placeholder="Nhập b"
//       />
//       <button onClick={handleSum}>Tính tổng</button>
//     </div>
//   );
// }

// export default Add;

//làm tổng tích 5 ô:
import { useState } from "react";

function Add() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);

  const [T, setT] = useState(0);
  const [M, setM] = useState(0);

  const handleChangeA = (e) => {
    setA(Number(e.target.value));
  };

  const handleChangeB = (e) => {
    setB(Number(e.target.value));
  };

  const handleChangeC = (e) => {
    setC(Number(e.target.value));
  };

  const handleChangeD = (e) => {
    setD(Number(e.target.value));
  };

  const handleChangeE = (e) => {
    setE(Number(e.target.value));
  };

  const handleCaculate = () => {
    setT(a + b + c + d + e);
    setM(a * b * c * d * e);
  };

  // const handleSum = (e) => {
  //   // vì dùng form onSubmit nên bắt buộc phải dùng e.
  //   e.preventDefault(); //event handler ngăn form reload
  //   setT(Number(a) + Number(b) + Number(c) + Number(d) + Number(e)); // Tính tổng 5 số là chữ T
  // };
  // //tính tích
  // const handleMultiply = (e) => {
  //   e.preventDefault(); //event handler ngăn form reload
  //   setM(Number(a) * Number(b) * Number(c) * Number(d) * Number(e)); // Tính tổng 5 số là chữ T
  // };

    return (
    <div className="Add" style={{ padding: 350 }}>
      <>
        a: {a}, b: {b} , c:{c}, d: {d}, e:{e}
      </>
      <h1>Kết quả tổng 5 số: {T}</h1>
      <h1>Kết quả tích 5 số: {M} </h1>

      <input
        type="number"
        value={a}
        onChange={handleChangeA}
        placeholder="Nhập a"
      />
      <input
        type="number"
        value={b}
        onChange={handleChangeB}   
        placeholder="Nhập b"
      />

      <input
        type="number"
        value={c}
        onChange={handleChangeC}
        placeholder="Nhập c"
      />
      <input
        type="number"
        value={d}
        onChange={handleChangeD}
        placeholder="Nhập d"
      />
      <input
        type="number"
        value={e}
        onChange={handleChangeE}
        placeholder="Nhập e"
      />
      <div>
        <button onClick={handleCaculate}>Tính</button>
      </div>
    </div>
  );
}

export default Add;

// //bài 49. random gift
// import {useState} from 'react'
// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard',
// ]

// function App() {
//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || 'Chưa có phần thưởng'}</h1>

//       <button onClick={randomGift}>
//         Lấy thưởng
//       </button>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = () => {
//     console.log({
//       name,
//       email,
//     });
//   };

//   return (
//     <div style={{ padding: 32 }}>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />

//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// // export default App
// //bây giờ đi qua radio
// const courses =[
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'Javascript'
//   },
//   {
//     id: 3,
//     name: 'ReadtJS'
//   }
// ]
// function App () {

//   const [checked, setChecked]= useSate() //tý lưu id vào checked
// const handleSubmit =() => {

//   console.log(checked);
// }
//  return (
//   <div style={{ padding: 32}}>
//     {courses.map(course => (
//       <div key={course.id}>
//           <input
//            type="radio"
//            checked={checked ===  course.id}
//            onChange={() => setChecked(course.id)}
//           />
//       </div>
//     ))}
//     <button onClick={handleSubmit}>Register</button>
//   </div>
//  )}

//  //bài 51
// // Mounted / Unmounted

// function App() {
//   const [show, setShow] = useState(false)

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>

//       {show && <Content />}
//     </div>
//   )
// }

// export default App
