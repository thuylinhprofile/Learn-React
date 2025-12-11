
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
import React, {useEffect, useState} from 'react'
const tabs=['posts', 'comments', 'albums']
function Content() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const[ type, setType] = useState('posts')
  console.log(type);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
    {tabs.map(tab => (
      <button
        key={tab}
        onClick={()=> setType(tab)}>
        </button>

    ))}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Content;