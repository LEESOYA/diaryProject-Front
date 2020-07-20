// import React, { Component } from 'react';

// import Mywritingtabs from './utils/mywritingtabs';
// import Allwritingtabs from './utils/allwritingtabs';

// class feedMainPage extends Component {
//   render() {
//     return (
//       <div className="feedmainwrap">
        
//         <div className="grassview">
//           <canvas id="daygrass" height="150" width="800" style={{border:'1px solid green', marginTop:'25px'}}></canvas>
//         </div>
//         {/* 로그인시 내 글쓰기 부분이 보임 */}
//         <div className="mywriting" style={{width:'500px'}}>
//           <div className="mywritinghead">
//             <h3>나의 글쓰기</h3>           
//           </div>
//           {/* 이렇게 쓰는게 맞는가;;; 주제탭 선택하면 오늘의 주제가 나옴 */}
//           <div className="tabs" style={{border:'1px solid gray', marginTop:'25px'}}>
//             <Mywritingtabs/>
//           </div>
//         </div>
//         {/* 다른 사람들 글 보이기*/}
//         <div className="allwriting" style={{width:'700px', border:'1px solid gray', marginTop:'50px', marginBottom:'50px'}}>
//           <div className="alltabs">
//             <Allwritingtabs/>
//           </div>
//         </div>
        
//       </div>
//     );
//   }
// }

// export default feedMainPage;