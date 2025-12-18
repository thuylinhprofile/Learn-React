//mà 1 trong những hook được sử dụng nhiều nhất trong ứng dụng reactjs, giúp thực hiện các hiệu ứng phụ chẳng hạn như gọi api, cập nhật DOM, lắng nghe DOM event( scroll, resize màn hình,...)
//FORM CODE:
//API là một giao diện/cánh cổng cho phép hai ứng dụng khác nhau giao tiếp và trao đổi dữ liệu với nhau. Hãy tưởng tượng bạn đang ở nhà hàng.
//  Bạn là ứng dụng của bạn (React Component). Đầu bếp là máy chủ (Server/Database).
//  API là người phục vụ (Waiter). Bạn đưa yêu cầu (Order), người phục vụ mang nó đến bếp, và mang kết quả (Món ăn) quay lại cho bạn. API thường đề cập đến Web API (hay REST API). Đây là một bộ quy tắc cho phép ứng dụng khách (Client - trình duyệt của bạn) gửi yêu cầu (Request) qua Internet đến máy chủ (Server) và nhận về dữ liệu (Response) thường ở định dạng JSON hoặc XML.
//hiểu tất cả những gì về components, DOM, API, useState, useEffect:
//Tóm lại: API là cơ chế để ứng dụng frontend (React) của bạn lấy dữ liệu (như bài viết, thông tin người dùng, dữ kiện mèo, v.v.) từ Server để hiển thị.
//Mục đích: Để lấy dữ liệu động (thay đổi theo thời gian) hoặc quá lớn (không thể nhúng vào mã nguồn React) từ một nơi tập trung (Database trên Server).
// import React, { useEffect, useState } from "react";
// //bây giờ viết 1 component function: FactFetcher: Một thành phần trong React dùng để lấy và quản lý dữ liệu từ một nguồn bên ngoài như API.
// //bước 1: định nghĩa component(nhà máy sản xuất giao diện)
// function FactFetcher() {
//   const [fact, setFact] = useState("đang tải dữ kiện...");
//   const [isloading, setIsloading] = useState(true);

//   // Khối useEffect
//   useEffect(() => {
//     // ĐỊNH NGHĨA HÀM (Function Declaration/Expression)
//     const fetchRandomFact = async () => {
//       // ... mã gọi API ...
//       console.log("luồng chạy 2.1: bắt đầu gọi API");

//       try {
//         // Tên: API Call (Thao tác với bên ngoài)
//         const response = await fetch("https://catfact.ninja/fact");

//         // Tên: Data Parsing
//         const data = await response.json();

//         // Tên: State Update (Kích hoạt quá trình Re-render)
//         setFact(data.fact);
//       } catch (error) {
//         console.error("Lỗi khi tải dữ kiện:", error);
//         setFact("Lỗi: Không thể tải dữ kiện.");
//       } finally {
//         // Tên: State Update (Kết thúc tải)
//         setIsLoading(false);
//         console.log(
//           "-> luồng CHẠY 2.2: Kết thúc gọi API, state đã được cập nhật."
//         );
//       }
//     };

//     // LỆNH GỌI HÀM (Function Call)
//     fetchRandomFact(); // <<< ĐÂY LÀ CHỖ NÓ ĐƯỢC CHẠY
//   }, []);// TÊN QUAN TRỌNG: DEPENDENCY ARRAY (MẢNG PHỤ THUỘC)
//           // Giá trị: [] (Mảng rỗng). Ý nghĩa: CHỈ CHẠY MỘT LẦN duy nhất sau render đầu tiên.

//   // --------------------------------------------------------
//   // BƯỚC 4: TRẢ VỀ JSX (ĐỊNH NGHĨA VIRTUAL DOM)
//   // --------------------------------------------------------

//   // Đây là LẦN RENDER BAN ĐẦU và sau đó là CÁC LẦN RE-RENDER sau khi state thay đổi.
// return (
//     <div className="fact-container">
//       <h1>🐱 Công cụ lấy dữ kiện ngẫu nhiên 🐱</h1>

//       {/* Tên: CONDITIONAL RENDERING (Hiển thị có điều kiện) */}
//       {isLoading ? (
//         // Tên: INITIAL RENDER JSX (Hiển thị ban đầu)
//         <p>LƯỜNG CHẠY 1: Đang tải dữ liệu ban đầu...</p>
//       ) : (
//         // Tên: FINAL RENDER JSX (Hiển thị sau khi state fact đã được set)
//         <p className="fact-text">
//           "{fact}"
//         </p>
//       )}

//       {/* Tên: DOM EVENT HANDLER (Gắn hàm xử lý sự kiện vào phần tử DOM ảo) */}
//       <button
//         onClick={() => {
//           // Đây là DOM Event 'click' trong React (Synthetic Event)
//           console.log('DOM Event: Nút được nhấn, nhưng không thay đổi state.');
//         }}
//         disabled={isLoading}
//       >
//         {isLoading ? 'Đang gọi API...' : 'Hoàn tất'}
//       </button>
//     </div>
//   );
// }
// // Tên: EXPORT (Cho phép component khác sử dụng)
// export default FactFetcher;
//bây g học kỹ useEffects
//TH1 gạch đầu dòng thứ 1:
// import React, {useState, useEffect} from "react";
// function Content() {
//   const [title, setTitle] = useState('');
//   //TH1.useEffect(callback) --> ít dùng:
//   // -gọi callback mỗi khi component re-render
//   // -gọi callback sau khi conponent thêm element vào DOM
//   //2.useEffect(callback, []). --> xài thường xuyên trong thực tế
//   //3.useEffect(callback,[dependency]) --> xài thường xuyên trong thực tế
//   useEffect[title, setTitle] = useState('')
//   useEffect(() => { // nó chạy ở dưới, vẫn chạy cnay nma nó đưa cho cái này callback sau đó cái này chạy ngay
//     console.log('Mounted'); //mounted này còn được in ra sau cả cái render ở dưới
//   })

//   return (
//     <div>

//       <input value={title} onchange={(e) => setTitle(e.target.value)}/>
//       {console.log('Render')}
//     </div>
//   )
// }
// export default Content;
//Th1:gạch dầu dòng t2:
// import React, {useEffect, useState} from 'react'
// const tabs=['posts', 'comments', 'albums']
// function Content() {
//   const [title, setTitle] = useState('')
//   const [posts, setPosts] = useState([])
//   const[ type, setType] = useState('posts')
//   console.log(type);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(posts => {
//         setPosts(posts);
//       });
//   }, []);

//   return (
//     <div>
//     {tabs.map(tab => (
//       <button
//         key={tab}
//         onClick={()=> setType(tab)}>
//         </button>

//     ))}
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Content;

// //useEfffect callback không deps,[] chỉ callback không thôi, của hoclaptrinhcungdung
// import React, { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState("1");
//   useEffect(() => {
//     console.log("re-render");
//   });
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={()=>setCount(count+1)}></button>

//     </div>
//   );
// }
// export default App;
//TH2: callback và mảng rỗng ([]):
// import React, { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState("1");
//   const[posts, setPosts]=useState([]);
//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //     .then(response => response.json())
//   //     .then(json => console.log(json))
//   // });
//   //useEffect(callback,[]) nó sẽ chỉ chạy hàm callback "đúng 1 lần" sau khi components được mount vào DOM
//   useEffect(() =>{
//     console.log('re-render');
//   },[]);
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={()=>setCount(count+1)}></button>
// {/* {posts.map((posts, index) => {
//   return <div key={index}>{post.title}</div>
// } )} */}
//     </div>
//   );
// }
// export default App;
// mảng deps của hoclaptrinhcungdung
// import React, { useEffect, useState } from "react";
// function App() {
//   const [count, setCount] = useState("1");
//   const [posts, setPosts] = useState([]);

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => setPosts(json));
// }, []);

// useEffect(callback, []) nó sẽ chỉ chạy hàm callback đúng 1 lần sau khi components được
// mounted vào DOM

// useEffect(callback, [deps]) nó sẽ chạy hàm callback lần đầu tiên khi components được
// mounted vào DOM

// Nó sẽ lắng sự thay đổi của giá trị deps
// khi denpendent
// useEffect(() => {
//   console.log("re-render");
// }, []);

//   useEffect(() => {
//     console.log("re-render" + count);
//   }, [count]); //[count] này nó đang lắng sự thay đổi của giá trị count được khai báo ở trên useState kia kìa

//   return (
//     <div>
//       <div> {count}</div>
//       <button onClick={() => setCount(count + 1)}>Click me</button>

//       {/* {posts.map((post, index) => {
//         return <div key={index}>{post.title}</div>;
//       })} */}
//     </div>
//   );
// }

// export default App;
//(callback, [deps]) f8: [deps] ở đây đơn giản chỉ là biến thôi
// // 3. Callback luôn được gọi lại mỗi khi deps thay đổi
// import React, { useEffect, useState } from "react";

// function Content() {
//   const tabs = ["posts", "comments", "albums"]; //React vẽ giao diện: Nó vẽ ra 3 cái nút.

//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts"); //Lúc này type đang là 'posts' (giá trị mặc định).

//   useEffect(() => {
//     // Effect sẽ chạy khi `type` thay đổi
//     console.log("Type changed: bắt đầu đi tải dữ liệu cho type", type); // khi render lần 1 nó chưa chạy ngay đâu, chỉ là note lại là có 1 cái effect ở đây

//     // gọi API theo type
//     // Cấu trúc chuẩn: useEffect( callback_function, dependency_array là cái [type] đó)
//     fetch(`https://jsonplaceholder.typicode.com/${type}`) // Gọi API theo cái 'type' hiện tại
//       .then((res) => res.json()) //.then nghĩa là sau khi server trả lời xong, thì làm việc này,...
//       //Nếu không có .then, JavaScript sẽ chạy tuột xuống dưới luôn trong khi dữ liệu chưa về -> Lỗi undefined.
//       //Tại sao setPosts(posts) lại nằm trong .then?:
//       // Vì chỉ khi nào có dữ liệu (data) về tay rồi, ta mới được phép cập nhật vào State để vẽ lên màn hình.
//       .then((posts) => {
//         setPosts(posts);
//         console.log("2.đã tải xong và lưu dữ liệu");
//       })
//       .catch((err) => {
//         console.error("Fetch error", err);
//         setPosts([]);
//       });
//   }, [type]); // <-- quan trọng: dependency là type, là react lôi" sổ tay" ra so sánh: giá trị type cũ lần render trước là'posts'
//   // và giá trị type mới(vừa render xong):'comment'--> đánh dấu cái effect này cần phải chạy lại sau khi vẽ xong giao diện

//   return (
//     <div style={{ padding: 12 }}>
//       <div style={{ marginBottom: 8 }}>
//         <button
//           onClick={() =>
//             setTitle((prev) => (prev ? "" : "Hoc lap trinh tai F8"))
//           }
//         >
//           Toggle
//         </button>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           gap: 6,
//           alignItems: "center",
//           marginBottom: 12,
//         }}
//       >
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             style={
//               type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
//             }
//             onClick={() => setType(tab)}
//           >
//             {tab}
//           </button>
//         ))}

//         {/* input để thay đổi title (ví dụ video có input) */}
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Type a title..."
//           style={{ marginLeft: 8 }}
//         />
//       </div>

//       <div>
//         <h3>{type}</h3>
//         {/* hiển thị posts / comments / albums */}
//         <ul>
//           {posts && posts.length > 0 ? (
//             posts.slice(0, 20).map((item) => (
//               <li key={item.id}>
//                 {/* nhiều endpoint có trường khác nhau, ưu tiên title rồi name rồi body */}
//                 {item.title || item.name || item.body || JSON.stringify(item)}
//               </li>
//             ))
//           ) : (
//             <li>No data</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return <Content />;
// }

// //useState là nhớ, để nhớ
// ví dụ đi
// useState (Trí nhớ): Giúp robot nhớ được nó đang mặc áo màu gì, trong túi có bao nhiêu tiền.

// Ví dụ: const [tien, setTien] = useState(0);

// Vấn đề: Khi robot nhớ ra là "Hết tiền rồi",
// nó phải làm hành động là "Đi rút tiền".
// Hành động "Đi rút tiền" này chính là Side Effect.
// Nếu t viết code "Đi rút tiền" khơi khơi trong component thì con robot sẽ bị điên: cứ mỗi mili-giây nó lại chạy ra cây ATM một lần (Re-render liên tục).

// useEffect sinh ra để: Kiểm soát hành động của robot. Bảo nó là: "Chỉ đi rút tiền khi ví rỗng thôi nhé, đừng có đi lung tung."
// Tại sao lại viết fetch bên trong useEffect mà không viết thẳng ra ngoài?
// Nếu t viết fetch thẳng ra ngoài (ngang hàng với const), mỗi khi component render lại (ví dụ t gõ 1 chữ vào ô input), nó sẽ gọi API một lần.
//  -> Hậu quả: Server sập, trình duyệt treo vì spam request. -> Giải pháp: Nhốt nó vào trong useEffect để kiểm soát: "T cho phép b chạy thì b mới được chạy".
//Về vị trí (Line 241): "Em đặt fetch trong useEffect để tránh việc gọi API vô tội vạ mỗi khi component re-render. Nó là một Side Effect."

// Về tham số Em truyền [type] vào dependency array. Ý nghĩa là: Chỉ khi nào người dùng đổi loại tab (biến type thay đổi), thì mới gọi API mới.

// Về logic chạy: "Khi type thay đổi, useEffect chạy hàm fetch. Sau khi fetch thành công (trong .then), t mới setPosts để cập nhật dữ liệu và hiển thị ra UI. Việc này
//  đảm bảo dữ liệu luôn đồng bộ với tab đang chọn."

// // deps của f8
// import React, { useState, useEffect } from "react";
// function Content() {
//   const tabs = ["posts", "comments", "albums"];

//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [ShowGoToTop, setShowGoToTop] = useState(false); // de gia tri mac dinh se la true hoac false tuy ra setup

//   useEffect(() => {
//     console.log("dữ liệu type đang cập nhật:", type);

//     // gọi API theo type
//     // Cấu trúc chuẩn: useEffect( callback_function, dependency_array là cái [type] đó)
//     fetch(`https://jsonplaceholder.typicode.com/${type}`) // Gọi API theo cái 'type' hiện tại
//       .then((res) => res.json()) //.then nghĩa là sau khi server trả lời xong, thì làm việc này,...
//       //Nếu không có .then, JavaScript sẽ chạy tuột xuống dưới luôn trong khi dữ liệu chưa về -> Lỗi undefined.
//       //Tại sao setPosts(posts) lại nằm trong .then?:
//       // Vì chỉ khi nào có dữ liệu (data) về tay rồi, ta mới được phép cập nhật vào State để vẽ lên màn hình.
//       .then((posts) => {
//         setPosts(posts);
//         console.log("2.đã tải xong và lưu dữ liệu");
//       });
//   }, [type]); // <-- quan trọng: dependency là type, là react lôi" sổ tay" ra so sánh: giá trị type cũ lần render trước là'posts'
//   // và giá trị type mới(vừa render xong):'comment'--> đánh dấu cái effect này cần phải chạy lại sau khi vẽ xong giao diện
//   useEffect(() => {
//     const handleScroll = () => {
//       console.log(window.scrollY);
//       if (window.scrollY >= 200) {
//         //show: hiện ra thì để true
//         setShowGoToTop(true);
//       } else {
//         //hide, ẩn đi thì hiện là false
//         setShowGoToTop(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//   }, []);
//   console.log("re-render");
//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   backgroundColor: "#333",
//                 }
//               : {}
//           }
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}

//       {posts.map((post) => (
//         <li key={post.id}>{post.title || post.name}</li> // dùng post.id làm khóa định danh. Nhưng lỡ mà bài viết này không có id (bị lỗi hay thiếu dữ liệu), thì hãy dùng tạm post.title làm khóa
//       ))}
//       {ShowGoToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom: 20,
//           }}
//         >
//           Go to top
//         </button>
//       )}
//     </div>
//   );
// }
// // export default Content;
// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setCount(count + 1);
//     }, 1000);

//     // cleanup
//     return () => clearTimeout(timerId);
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// export default App;
// Side effects
// test:
// Import 2 hook cơ bản từ React
// useState: lưu dữ liệu thay đổi theo thời gian
// useEffect: chạy code theo vòng đời component

// //test quản lý nhân viên:
// import { useEffect, useState } from 'react';

// function App() {

//   // ======================
//   // STATE DANH SÁCH NHÂN VIÊN
//   // ======================

//   //  KHÔNG truyền giá trị ban đầu
//   // → employees ban đầu = undefined
//   // → mục đích: dùng useEffect để khởi tạo lần đầu
//   const [employees, setEmployees] = useState();

//   // ======================
//   // STATE CHO FORM NHẬP
//   // ======================

//   // Lưu tên người dùng nhập
//   const [name, setName] = useState('');

//   // Lưu năm sinh người dùng nhập
//   const [birthYear, setBirthYear] = useState('');

//   // Lưu giới tính đang chọn
//   const [gender, setGender] = useState('Nam');

//   // ======================
//   // useEffect: CHẠY 1 LẦN KHI COMPONENT MOUNT
//   // ======================

//   useEffect(() => {
//     // Dữ liệu nhân viên ban đầu (fake data)
//     const data = [
//       { id: 1, name: 'An', birthYear: 2000, gender: 'Nam' },
//       { id: 2, name: 'Bình', birthYear: 1999, gender: 'Nữ' },
//     ];

//     // Lấy năm hiện tại (vd: 2025)
//     const currentYear = new Date().getFullYear();

//     // map: duyệt từng nhân viên
//     // → thêm thuộc tính age cho mỗi người
//     const dataWithAge = data.map((item) => ({
//       ...item, // giữ nguyên id, name, birthYear, gender
//       age: currentYear - item.birthYear, // tính tuổi
//     }));

//     // Cập nhật state employees
//     // → trigger component render lại
//     setEmployees(dataWithAge);

//   }, []);
//   // [] = dependency array rỗng
//   // → useEffect chỉ chạy 1 lần duy nhất
//   // → giống componentDidMount

//   // ======================
//   // HÀM THÊM NHÂN VIÊN
//   // ======================

//   const handleAdd = () => {

//     // Nếu chưa nhập đủ dữ liệu → chặn
//     if (!name || !birthYear) {
//       alert('Vui lòng nhập đủ thông tin');
//       return; // dừng hàm
//     }

//     // Lấy năm hiện tại
//     const currentYear = new Date().getFullYear();

//     // Tạo object nhân viên mới
//     const newEmployee = {
//       id: Date.now(), // tạo id duy nhất
//       name: name, // tên từ input
//       birthYear: Number(birthYear), // ép kiểu string → number
//       gender: gender, // giới tính
//       age: currentYear - birthYear, // tính tuổi
//     };

//     // setEmployees với callback
//     // prev = danh sách cũ
//     // → tạo mảng mới, KHÔNG sửa mảng cũ
//     setEmployees((prev) => [...prev, newEmployee]);

//     // Reset form sau khi thêm
//     setName('');
//     setBirthYear('');
//     setGender('Nam');
//   };

//   // ======================
//   // HÀM XOÁ NHÂN VIÊN
//   // ======================

//   const handleDelete = (id) => {

//     // filter: tạo mảng mới
//     // → loại bỏ nhân viên có id trùng
//     setEmployees((prev) =>
//       prev.filter((item) => item.id !== id)
//     );
//   };

//   // ======================
//   // CHẶN LỖI KHI CHƯA CÓ DATA
//   // ======================

//   // Lần render đầu:
//   // employees === undefined
//   // → không được map()
//   if (!employees) {
//     return <p>Đang tải dữ liệu...</p>;
//   }

//   // ======================
//   // JSX RENDER GIAO DIỆN
//   // ======================

//   return (
//     <div>

//       <h2>Quản lý nhân viên</h2>

//       {/* FORM NHẬP */}
//       <div>
//         {/* Input tên */}
//         <input
//           placeholder="Tên"
//           value={name} // giá trị lấy từ state
//           onChange={(e) => setName(e.target.value)}
//           // mỗi lần gõ → cập nhật state
//         />

//         {/* Input năm sinh */}
//         <input
//           placeholder="Năm sinh"
//           value={birthYear}
//           onChange={(e) => setBirthYear(e.target.value)}
//         />

//         {/* Select giới tính */}
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option>Nam</option>
//           <option>Nữ</option>
//         </select>

//         {/* Nút thêm */}
//         <button onClick={handleAdd}>
//           Thêm
//         </button>
//       </div>

//       {/* DANH SÁCH NHÂN VIÊN */}
//       <ul>
//         {employees.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.age} tuổi - {item.gender}

//             <button onClick={() => handleDelete(item.id)}>
//               Xoá
//             </button>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// }

// export default App;

//end test

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubscribe
    - Clear timers
*/

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted

// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// ------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// // 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mount đầu tiên)import { useState } from 'react';
// import { useState } from 'react';

// const lessons = [
//   { id: 1, name: 'ReactJS là gì? Tại sao nên học ReactJS?' },
//   { id: 2, name: 'SPA/MPA là gì?' },
//   { id: 3, name: 'Arrow function' },
// ];

// function App() {
//   const [lessonId, setLessonId] = useState(1);

//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li
//             key={lesson.id}
//             style={{
//               color: lessonId === lesson.id ? 'red' : '#333',
//               cursor: 'pointer',
//             }}
//             onClick={() => setLessonId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';

// function App() {
//   // KHÔNG gán giá trị ban đầu
//   const [employees, setEmployees] = useState();

//   // State cho form nhập
//   const [name, setName] = useState('');
//   const [birthYear, setBirthYear] = useState('');
//   const [gender, setGender] = useState('Nam');

//   // Khởi tạo dữ liệu lần đầu
//   useEffect(() => {
//     const data = [
//       { id: 1, name: 'Phương', birthYear: 2000, gender: 'Nam' },
//       { id: 2, name: 'Mai', birthYear: 1999, gender: 'Nữ' },
//     ];

//     const currentYear = new Date().getFullYear();

//     const dataWithAge = data.map((item) => ({
//       ...item,
//       age: currentYear - item.birthYear,
//     }));

//     setEmployees(dataWithAge);
//   }, []);

//   // Thêm nhân viên
//   const handleAdd = () => {
//     if (!name || !birthYear) {
//       alert('Vui lòng nhập đủ thông tin');
//       return;
//     }

//     const currentYear = new Date().getFullYear();

//     const newEmployee = {
//       id: Date.now(),
//       name: name,
//       birthYear: Number(birthYear),
//       gender: gender,
//       age: currentYear - birthYear,
//     };

//     setEmployees((prev) => [...prev, newEmployee]);

//     // Reset form
//     setName('');
//     setBirthYear('');
//     setGender('Nam');
//   };

//   // Xoá nhân viên
//   const handleDelete = (id) => {
//     setEmployees((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Chặn lỗi lúc chưa có dữ liệu
//   if (!employees) {
//     return <p>Đang tải dữ liệu...</p>;
//   }

//   return (
//     <div>
//       <h2>Quản lý nhân viên</h2>

//       {/* FORM NHẬP */}
//       <div>
//         <input
//           placeholder="Tên"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           placeholder="Năm sinh"
//           value={birthYear}
//           onChange={(e) => setBirthYear(e.target.value)}
//         />

//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option>Nam</option>
//           <option>Nữ</option>
//         </select>

//         <button onClick={handleAdd}>Thêm</button>
//       </div>

//       {/* DANH SÁCH */}
//       <ul>
//         {employees.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.age} tuổi - {item.gender}
//             <button onClick={() => handleDelete(item.id)}>Xoá</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// //bài tập a Thiện để nhập a mà b cũng nhập theo:
// import { useEffect, useState } from 'react';

// function App() {
//   const [valueA, setValueA] = useState('');
//   const [valueB, setValueB] = useState('');

//   // - Lắng nghe [valueA] thay đổi
//   // - Cập nhật B bằng giá trị valueA , callback sẽ được goị lại mỗi khi deps thay đổi
//   useEffect(() => {
//     setValueB(valueA);
//   }, [valueA]);
// //   lấy giá trị của A đắp sang cho B.

// // Phần Điều kiện (Deps Array): [valueA]
// //bài tập anh Thiện:
//  console.log("re-render");

//   return (
//     <div>
//       <h2>FORM NHẬP A,B: </h2>
//       <div>
//         <input
//           type='text'
//           placeholder="nhập giá trị a"
//           value={valueA}
//           onChange={(e) => setValueA(e.target.value)} // setA xong nó chạy useEffect vì [deps] đang là valueA nên khi A thay đổi useEffect sẽ chạy lại và cập nhật setValueB(valueA); là B có giá trị của A
//         />

//         <input
//           type='text'
//           placeholder="nhập giá trị b"
//           value={valueB}

//           onChange={(e) => setValueB(e.target.value)}
//         />

//         {/*  Truyền valueA vào */}
//         <button onClick={() => setValueB(valueA)}>ADD</button>
//       </div>
//     </div>
//   );
// }
// export default App;

// import { useEffect, useState } from 'react';

// function App() {
//   // KHÔNG gán giá trị ban đầu
//   const [employees, setEmployees] = useState();

//   // State cho form nhập
//   const [name, setName] = useState('');
//   const [birthYear, setBirthYear] = useState('');
//   const [gender, setGender] = useState('Nam');

//   // Khởi tạo dữ liệu lần đầu
//   useEffect(() => {
//     const data = [
//       { id: 1, name: 'Phương', birthYear: 2000, gender: 'Nam' },
//       { id: 2, name: 'Mai', birthYear: 1999, gender: 'Nữ' },
//     ];

//     const currentYear = new Date().getFullYear();

//     const dataWithAge = data.map((item) => ({
//       ...item,
//       age: currentYear - item.birthYear,
//     }));

//     setEmployees(dataWithAge);
//   }, []);

//   // Thêm nhân viên
//   const handleAdd = () => {
//     if (!name || !birthYear) {
//       alert('Vui lòng nhập đủ thông tin');
//       return;
//     }

//     const currentYear = new Date().getFullYear();

//     const newEmployee = {
//       id: Date.now(),
//       name: name,
//       birthYear: Number(birthYear),
//       gender: gender,
//       age: currentYear - birthYear,
//     };

//     setEmployees((prev) => [...prev, newEmployee]);

//     // Reset form
//     setName('');
//     setBirthYear('');
//     setGender('Nam');
//   };

//   // Xoá nhân viên
//   const handleDelete = (id) => {
//     setEmployees((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Chặn lỗi lúc chưa có dữ liệu
//   if (!employees) {
//     return <p>Đang tải dữ liệu...</p>;
//   }

//   return (
//     <div>
//       <h2>Quản lý nhân viên</h2>

//       {/* FORM NHẬP */}
//       <div>
//         <input
//           placeholder="Tên"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           placeholder="Năm sinh"
//           value={birthYear}
//           onChange={(e) => setBirthYear(e.target.value)}
//         />

//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option>Nam</option>
//           <option>Nữ</option>
//         </select>

//         <button onClick={handleAdd}>Thêm</button>
//       </div>

//       {/* DANH SÁCH */}
//       <ul>
//         {employees.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.age} tuổi - {item.gender}
//             <button onClick={() => handleDelete(item.id)}>Xoá</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// //bài tập a Thiện để nhập a mà b cũng nhập theo:
// import { useEffect, useState } from 'react';

// function App() {
//   const [valueA, setValueA] = useState('');
//   const [valueB, setValueB] = useState('');

//   // - Lắng nghe [valueA] thay đổi
//   // - Cập nhật B bằng giá trị valueA , callback sẽ được goị lại mỗi khi deps thay đổi
//   useEffect(() => {
//     setValueB(valueA);
//   }, [valueA]);
// //   lấy giá trị của A đắp sang cho B.

// // Phần Điều kiện (Deps Array): [valueA]
// //bài tập anh Thiện:
//  console.log("re-render");

//   return (
//     <div>
//       <h2>FORM NHẬP A,B: </h2>
//       <div>
//         <input
//           type='text'
//           placeholder="nhập giá trị a"
//           value={valueA}
//           onChange={(e) => setValueA(e.target.value)} // setA xong nó chạy useEffect vì [deps] đang là valueA nên khi A thay đổi useEffect sẽ chạy lại và cập nhật setValueB(valueA); là B có giá trị của A
//         />

//         <input
//           type='text'
//           placeholder="nhập giá trị b"
//           value={valueB}

//           onChange={(e) => setValueB(e.target.value)}
//         />

//         {/*  Truyền valueA vào */}
//         <button onClick={() => setValueB(valueA)}>ADD</button>
//       </div>
//     </div>
//   );
// }
// export default App;
//baitappppppppppppppppppppppppppppppppppppp:

import { useEffect, useState } from "react";

function App() {
  //  KHÔNG truyền giá trị ban đầu
  // → employees ban đầu = undefined
  // → mục đích: dùng useEffect để khởi tạo lần đầu
  const [employees, setEmployees] = useState([]);
  // STATE CHO FORM NHẬP

  const [name, setName] = useState("");

  // Lưu năm sinh người dùng nhập
  const [birthYear, setBirthYear] = useState("");

  // Lưu giới tính đang chọn
  const [gender, setGender] = useState("Nam");
  // useEffect: CHẠY 1 LẦN KHI COMPONENT MOUNT

  useEffect(() => {
    // Dữ liệu nhân viên ban đầu (fake data)
    const data = [
      { id: 1, name: "Hoàng", birthYear: 2000, gender: "Nam" },
      { id: 2, name: "Vinh", birthYear: 1999, gender: "Nữ" },
    ];

    // Lấy năm hiện tại (vd: 2025)
    const currentYear = new Date().getFullYear();

    // map: duyệt từng nhân viên
    // → thêm thuộc tính age cho mỗi người
    const dataWithAge = data.map((item) => ({
      //map dùng dữ liệu mới thì dùng
      ...item, // giữ nguyên id, name, birthYear, gender
      age: currentYear - item.birthYear, // tính tuổi
    }));

    // Cập nhật state employees là lưu mảng này vào state employees ấy
    // → trigger component render lại
    //employees không phải dữ liệu gốc, mà là:

    // dữ liệu được suy ra (derive) từ birthYear
    setEmployees(dataWithAge);
  }, []);
  // [] = dependency array rỗng
  // → useEffect chỉ chạy 1 lần duy nhất
  // → giống componentDidMount
  // HÀM THÊM NHÂN VIÊN

  const handleAdd = () => {
    // Lấy năm hiện tại
    const currentYear = new Date().getFullYear();

    // Tạo object nhân viên mới
    const newEmployee = {
      id: Date.now(), // tạo id duy nhất( trả về số mili giây hiện tại-> luôn khác nhau)
      name: name, // tên từ input
      birthYear: Number(birthYear), // ép kiểu string → number
      gender: gender, // giới tính
      age: currentYear - Number(birthYear), // tính tuổi
    };

    // setEmployees với callback
    // prev là State dsach cũ ngay trước khi update
    // → tạo mảng mới, KHÔNG sửa mảng cũ( dùng khi cần thêm xoá sửa dựa vào state cũ)
    setEmployees((prev) => [...prev, newEmployee]); //Lấy danh sách nhân viên cũ, rồi thêm nhân viên mới vào, sau đó lưu lại danh sách mới thì prev = danh sách cũ

    // Reset form sau khi thêm
    setName("");
    setBirthYear("");
    setGender("Nam");
  };

  // HÀM XOÁ NHÂN VIÊN
  const handleDelete = (id) => {
    // filter: tạo mảng mới
    // → loại bỏ nhân viên có id trùng
    setEmployees((prev) => prev.filter((item) => item.id !== id));
  };
  //giao diện:
  return (
    <div>
      <h2>Quản lý nhân viên</h2>

      {/* FORM NHẬP */}
      <div>
        {/* Input tên */}
        <input
          placeholder="Tên"
          value={name} // giá trị lấy từ state
          onChange={(e) => setName(e.target.value)}
          // mỗi lần gõ → cập nhật state
        />

        {/* Input năm sinh */}
        <input
          placeholder="Năm sinh"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />

        {/* Select giới tính */}
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>Nam</option>
          <option>Nữ</option>
        </select>

        {/* Nút thêm */}
        <button onClick={handleAdd}>Thêm</button>
      </div>

      {/* DANH SÁCH NHÂN VIÊN */}
      <ul>
        {employees.map(
          (
            item //item này là employee 1 nvien trong mảng, như nhau
          ) => (
            // hoặc viết employee.id
            <li key={item.id}>
              {item.name} - {item.age} tuổi - {item.gender}
              <button onClick={() => handleDelete(item.id)}>Xoá</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
