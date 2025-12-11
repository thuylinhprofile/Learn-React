//useState: khi ng dùng cập nhật trạng thái ở input thì cái useState nó sẽ render lại và chạy lại từ trên xuống dưới,....(render trạng thái theo cập nhật), này tự viết
// import { useState } from "react";
// import "./App.css";
// function App() {
//   const [name, setName] = useState("");
//   const [list, setList] = useState ([]);
//   const handleSubmit = () => {
//     console.log(name);
//     setName(""); //xoá ở ô sau khi nhập xong
//   };
//   return (
//     <div>

//       <div style={{ padding: 32 }}>

//         <input
//           value={name}
//           placeholder="Nhập tên"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         ></input>
//         <button onClick={handleSubmit}

//         >Add</button>

//       <ul>
//         {list.map((name, index) => (
//           <li key={index}>{name}</li>          // in ra list
//         ))}
//       </ul>
//       </div>

//     </div>
//   );
// }
// export default App;

// //bài todo list có nút thêm
// import { useState } from "react";

// function App() {
//   // 1. Trạng thái cho ô nhập liệu (input)
//   const [name, setName] = useState("");

//   // 2. Trạng thái cho danh sách các tên (list - là một mảng rỗng)
//   const [list, setList] = useState([]);
//   console.log(list[0], list.at(0));
//   // Hàm xử lý khi nhấn nút "Add"
//   const handleAdd = () => {
//     // Đảm bảo tên không rỗng hoặc chỉ có khoảng trắng, .trim() Nó loại bỏ tất cả các ký tự khoảng trắng (space, tab, newline) ở đầu và cuối của chuỗi.
//     //     //Phép so sánh !== ""
//     // Ý nghĩa: So sánh giá trị đã được trim() với một chuỗi rỗng ("").

//     // Chức năng: Kiểm tra xem chuỗi sau khi loại bỏ khoảng trắng còn lại có khác (!==) với chuỗi rỗng hay không.
//     if (name.trim() !== "") {
//       // CẬP NHẬT MẢNG: Tạo mảng mới bằng cách sao chép mảng cũ (list)
//       // và thêm tên mới (name) vào cuối.
//       setList((prevList) => [...prevList, name]);
//       // Xóa nội dung trong ô input sau khi add
//       setName("");
//     }
//   };
//   const handleDelete = (index) => {
//     setList(list.filter((item, i) => i != index));
//   };

//   //học mảng:
//   /*
//   1. To string
//   2. Join
//   // thêm phần tử vào array, chèn phần tử, nối phần tử , lấy ra 1 vài phần tử của array:
//   3. Pop: xoá đi phần tử cuối mảng
//   4. Push: thêm vào 1 hoặc nhiều phần tử vào "cuối mảng" và trả về độ dài mới của mảng
//   5. Shift: xoá đi phần tử đầu mảng
//   6. Unshift: thêm vào 1 hoặc nhiều phần tử vào "đầu mảng" và trả về độ dài mới của mảng
//   7. Splicing: xoá, cắt, chèn phần tử mới vào mảng:
//   học + 7.1: xoá
//       + 7.2: cắt
//       + 7.3: chèn phần tử mới
//   8. Concat: nối array: cái trong ngoặc sẽ là cái được nối:
//   9. Slicing
// */

//   // // đây là truyền từ array sang chuỗi --> k sửa được dấu phẩy đâu!!!:
//   // var languages =[
//   //   'Javascript',
//   //   'PHP',
//   //   'Ruby'
//   // ]

//   // //9.Slicing: --> slice: cắt để "lấy" 1 vài hay toàn bộ element:
//   // var languages =[
//   //   'Javascript', //0
//   //   'PHP',        //1
//   //   'Ruby'        //2
//   // ]
//   // //console.log(languages.slice(0)) là cắt nguyên mảng
//   // console.log(languages.slice(0,2)) //cái đầu là vị trí cắt, cái sau là vị trí dừng cắt( nó sẽ cắt từ vị trí chọn đầu đến vtri chọn sau)/ nếu muốn cắt đến hết mảng thì chỉ điền 1 số thôi VD: (1)
//   // //8.Concat: nối array: cái trong ngoặc sẽ là cái được nối:
//   // var languages =[
//   //   'Javascript',
//   //   'PHP',
//   //   'Ruby'
//   // ];
//   // var languages2=[
//   //   'Dart',
//   //   'Ruby'
//   // ];
//   // console.log(languages.concat(languages2)) // nếu tráo chỗ languages và languages2 cho nhau thì vị trí in ra cũng tráo cho nhau
//   // //7.splicing:
//   // var languages =[
//   //   'Javascript', //0
//   //   'PHP',   //1
//   //   'Ruby' //2
//   // ]
//   // languages.splice(1, 2, 'Dart','Java') //splice(start: number, deleteCount?: number): string[]. số thứ 3 kia là số xoá hết 3 số, kể từ số 1 kia, còn 'Dart' với 'Java' là truyền vào.
//   // console.log(languages)
//   // //6.Unshift:
//   // console.log(languages.unshift('Java','dart'))
//   // console.log(languages)
//   // //5:shift: xoá phần tử đầu mảng, ngược lại với pop:
//   // console.log(languages.shift())
//   // console.log(languages)
//   // //4.push:thêm vào 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng
//   // console.log(languages.push('Dart','Java'))
//   // console.log(languages)
//   //3.pop:
//   // console.log(languages.pop()) //pop là để xoá element cuối mảng, và trả lại phần tử đã xoá
//   // //vdu gọi pop 1 lần nữa: console.log(languages.pop()) thì 2 cái cuối sẽ bị xoá.
//   //2.join:
//   // console.log(languages.join(', ')) // 2. Join --> giống hệt 1. toString
//   //1.string:
//   //1.to string: là chuyển dữ liệu của th languages này từ array sang string
//   //console.log(languages.toString()). // 1.toString

//   //này của phần code bài tập:
//   return (
//     <div style={{ padding: 400 }}>
//       {/* KHU VỰC NHẬP VÀ THÊM */}

//       <input
//         value={name}
//         placeholder="Nhập tên tại đây..."
//         // Cập nhật trạng thái 'name' mỗi khi người dùng gõ
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button
//         onClick={handleAdd}
//         // // Vô hiệu hóa nút nếu ô input không có chữ
//         // disabled={name.trim() === ""}
//       >
//         Add
//       </button>

//       {/* KHU VỰC HIỂN THỊ DANH SÁCH (CÓ KHUNG) */}

//       <div
//         // Style tối giản cho khung của list
//         style={{
//           border: "1px solid black", //đường kẻ khung
//           padding: "20px", //khoảng cách của list với khung
//           marginTop: "15px", //khoảng cách ở trên, so với ô nhập tên
//         }}
//       >
//         {list.length === 0 ? ( //list.length === 0: Đây là điều kiện kiểm tra xem mảng trạng thái list có bao nhiêu phần tử. Nếu số lượng phần tử bằng 0 (tức là mảng rỗng), điều kiện này trả về true.
//           //Toán tử === dùng để so sánh hai giá trị. Điều đặc biệt là nó không chỉ kiểm tra giá trị mà còn kiểm tra kiểu dữ liệu của chúng.
//           // ? (<p>...</p>): Nếu điều kiện là true, React sẽ hiển thị thẻ <p> với nội dung "Danh sách trống."

//           // :  :Đây là từ khóa else (ngược lại). còn ? --> là giá trị nếu đúng, : --> là giá trị nếu sai

//           // (...): Nếu điều kiện là false (tức là list.length > 0), React sẽ hiển thị khối code tiếp theo, là danh sách không có thứ tự (<ul>).
//           <p>Danh sách trống.</p>
//         ) : (
//           <ul style={{ paddingLeft: 20 }}>
//             {/* -Dùng .map() để lặp qua mảng và in từng tên ra thẻ <li> Lặp qua từng phần tử trong mảng list.
//             - Thực hiện một hàm với mỗi phần tử.
//             - Tạo ra một mảng mới chứa kết quả trả về của hàm đó,
//             - item: Là giá trị của phần tử hiện tại trong mảng (ví dụ: "An", "Bình").
//             - index: Là vị trí (chỉ mục) của phần tử hiện tại (bắt đầu từ 0) sau đó trả về một phần tử JSX (thẻ <li>) cho mỗi lần lặp */}
//             {list.map(
//               (
//                 item,
//                 index // đây là hàm mũi tên (Arrow Function) được truyền vào .map()
//               ) => (
//                 <li key={index}>
//                   {item}{" "}
//                   <button onClick={() => handleDelete(index)}>Delete</button>{" "}
//                 </li> //key qtắc bắt buộc phần tử nào đã thay đổi, được thêm vào hoặc bị xóa, còn {item} chính là tên mà người dùng đã nhập) ngay bên trong thẻ <li>.
//               )
//             )}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

//học map:
//map duyệt qua từng phần tử của mảng này, và mỗi khi nó duyệt qua tới phần tử nào thì nó sẽ call lại cái function mà ta đã truyền ở tham số/đối số của th map
//nghĩa là nó duyệt qua phần tử nào thì nó sẽ gọi ngược lại cái vd: var newCourses= courses.map(courseHandler);  thế nên cta mới nhận được cái course ở function: function courseHandler(course) { console.log(course)};
// function App() {
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 1
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 1
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 200
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 1
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 10
//     },
//     {
//         id: 7,
//         name: 'Ruby',
//         coin: 12
//     },
// ];

// function courseHandler(course) { // lần thứ nhất nó chạy qua các cái bên trên thì nó trả về course này
//     // console.log(course);
//     return course; //tóm lại cái function này nó return lại cái gì thì cái vị trí trong cái element đó ở trong cái mảng mới sẽ nhận được cái đó, vdu: newCourse

// }
// var newCourses = courses.map(courseHandler);  //newCourses này này

// console.log(newCourses);  //newCourses
// }
// export default App;

// //làm bài tập ví dụ:
// function App() {
//   var courses = [
//     {
//       id: 1,
//       name: "Javascript",
//       coin: 0,
//     },
//     {
//       id: 2,
//       name: "HTML, CSS",
//       coin: 1,
//     },
//     {
//       id: 3,
//       name: "Ruby",
//       coin: 1,
//     },
//     {
//       id: 4,
//       name: "PHP",
//       coin: 200,
//     },
//     {
//       id: 5,
//       name: "ReactJS",
//       coin: 1,
//     },
//     {
//       id: 6,
//       name: "Ruby",
//       coin: 10,
//     },
//     {
//       id: 7,
//       name: "Ruby",
//       coin: 12,
//     },
//   ];

//   function courseHandler(course, index, originArray) {
//     // lần thứ nhất nó chạy qua các cái bên trên thì nó trả về course này
//     // console.log(course);
//     return {
//       id: course.id,
//       name: `khoa hoc : ${course.name}`, //${course.name} là name cũ, name là tên mới
//       coin: course.coin,
//       coinText: `Gia: ${course.coin}`,
//       index: index,
//       originArray: courses,
//     };
//   }
//   var newCourses = courses.map(courseHandler); //newCourses này này

//   console.log(newCourses); //newCourses
// }
// export default App;
//làm bài tạo mảng a gồm các phần tử 1-->5
// mảng b có các mảng a+2
// function App() {

// const a = [1, 2, 3, 4, 5];

// // mảng b gồm các phần tử của a + 2
// const b = a.map(a => a + 2);

// console.log( 'mang a=', a);
// console.log('mang b=', b);
// }
// export default App;
// map() hoạt động như sau:

// map sẽ duyệt từng phần tử của mảng a (gồm 5 phần tử)

// Với mỗi phần tử, nó thực hiện hàm a => a + 2

// Rồi trả về một mảng mới

//10/12/2025
//Bài tập: Dark / Light Theme Toggle:
// Mục tiêu:
// Nhấn nút → chuyển theme Light ↔ Dark
// Nền đổi màu
// Chữ đổi màu
// Sử dụng useState

// import { useState } from "react";

// function App() {
//   // 1. Tạo state để lưu theme
//   const [theme, setTheme] = useState("light");

//   // 2. Hàm đổi theme qua lại: Nếu theme là light → đổi sang dark
//                             // Nếu theme là dark → đổi sang light
//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");   // Nếu đang light → chuyển sang dark
//     } else {
//       setTheme("light");  // Nếu đang dark → chuyển về light
//     }
//   };

//   // 3. Làm style cho cả trang dựa trên theme
//   const appStyle = {
//     height: "100vh",      // cho full màn hình
//     padding: 20,          // cách mép cho đẹp

//     // Nếu theme đứng bên trái là "light" ⇒ dùng giá trị đầu
//     // Nếu không phải (tức là "dark") ⇒ dùng giá trị sau
//     backgroundColor: theme === "light" ? "white" : "black", //Nếu theme === "light" thì dùng "white", Còn nếu không phải, thì dùng "black"
//     color: theme === "light" ? "black" : "white",  // nếu light → nền trắng, nếu dark → nền đen
//     // đổi màu chữ theo theme

//     // transition: "0.3s",   // đổi màu mượt mượt
//   };

//   // 4. UI trả ra màn hình
//   return (
//     <div style={appStyle}>
//       <h1>Dark / Light Theme</h1>

//       {/* Hiển thị theme hiện tại */}
//       <p>Theme hiện tại: {theme}</p>

//      {/* nút bấm đổi theme */}
//       <button onClick={toggleTheme}>
//         Đổi theme
//       </button>
//     </div>
//   );
// }

// export default App;

//bài 9: bấm nút để đổi ảnh
// import { useState } from "react";

// function App() {
//   // 1. State để lưu ảnh hiện tại
//   const [image, setImage] = useState("img1");

//   // 2. Hàm đổi ảnh
//   const changeImage = () => {
//     if (image === "img1") {
//       setImage("img2"); // đổi qua ảnh 2
//     } else {
//       setImage("img1"); // đổi lại ảnh 1
//     }
//   };

//   // 3. Chọn link ảnh dựa trên state
//   let imageUrl = "";
//   if (image === "img1") {
//     imageUrl = "https://thichtrangtri.com/wp-content/uploads/2025/05/anh-phong-canh-chill-22.jpg"; // ảnh 1
//   } else {
//     imageUrl = "https://thichtrangtri.com/wp-content/uploads/2025/05/anh-phong-canh-chill-17.jpg"; // ảnh 2
//   }

//   return (
//     <div style={{ padding: 40 }}>
//       <h1>Đổi ảnh bằng nút bấm</h1>

//       {/* Hiển thị ảnh */}
//       <img
//         src={imageUrl}
//         alt="random"
//         style={{ width: 350, borderRadius: 10 }}
//       />

//       <br />

//       {/* Nút đổi ảnh */}
//       <button
//         onClick={changeImage}
//         style={{ marginTop: 20, padding: "10px 20px" }}
//       >
//         Đổi ảnh
//       </button>
//     </div>
//   );
// }

// export default App;
//like fb tăng:
// import { useState } from "react";

// function App() {
//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <div style={{ padding: "20px", fontSize: "24px" }}>
//       <button onClick={handleLike} style={{ padding: "10px 20px" }}>
//         Like
//       </button>

//       <p>Likes: {likes}</p>
//     </div>
//   );
// }

// export default App;

// cái khó hơn của quan ly ng dung( chưa xong, đang dở):
// import { useState } from 'react';

// function UserProfileManager() {
//   // Bước 1: Khai báo State là một Object (đối tượng)
//   const [user, setUser] = useState({
//     hoVaTen: '',
//     tuoi: 0,
//     email: ''
//   });
//   // Bước 2: Hàm xử lý chung khi người dùng gõ vào bất kỳ ô Input nào
//   const handleChange = (e) => {

//     // Viết gọn: Lấy name (tên trường) và value (giá trị mới)
//     const { name, value } = e.target;

//     // Cập nhật Object State
//     setUser(prevUser => ({
//         // Bắt buộc: Sao chép các trường cũ (hoVaTen, tuoi, email)
//         ...prevUser,

//         // Cập nhật trường hiện tại: [hoVaTen]: 'Giá trị mới'
//         [name]: value
//     }));
//   };

//   return (
//     <div style={{ marginTop: '20px', border: '1px solid black', padding: '15px' }}>
//       <h3>Form Nhập Thông Tin Cá Nhân</h3>

//       {/* Input 1: Họ và Tên */}
//       <label>Họ và Tên: </label>
//       <input
//         type="text"
//         name="hoVaTen"
//         value={user.hoVaTen}
//         onChange={handleChange}
//         placeholder="Nhập tên"
//       />

//       {/* Input 2: Tuổi */}
//       <label>Tuổi: </label>
//       <input
//         type="number"
//         name="tuoi"
//         value={user.tuoi}
//         onChange={handleChange}
//         placeholder="Nhập tuổi"
//       />

//       {/* Input 3: Email */}
//       <label>Email: </label>
//       <input
//         type="email"
//         name="email"
//         value={user.email}
//         onChange={handleChange}
//         placeholder="Nhập email"
//       />
//       <p style={{ color: 'red', marginTop: '10px' }}>
//       </p>
//     </div>
//   );
// }

// export default UserProfileManager;
