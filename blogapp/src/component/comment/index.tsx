// import React from "react";
// import Modal from "react-modal";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ReadMoreButton } from "../../styles/SectionOne";
// import {ReadMoreContainer} from "../../styles/comment"

// function Comment() {
//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
      
//     },
//   };
//   const [commentData, setComentData] = useState("");

//   // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement("#root");

//   let subtitle: any;
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
    
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
  

// //   const handleSubmit = (data: any) => {
// //     data.preventDefault();
// //     getComment(data);
// //     console.log("Form submitted:", commentData);
// //     setIsOpen(false);
// //   };

//   const getComment = async (data: any) => {
//     // console.log(data)
//     const res = await axios.post(
//       `http://localhost:5000/users/createComment/`,
//       data
//     );
//     // console.log(res.data.data);
//   };

//   return (
//     <>
//       {/* <button onClick={openModal}>
//         <i
//           className="fa-sharp fa-regular fa-comment"
//           style={{ cursor: "pointer" }}
//         ></i>
//       </button> */}
//        <ReadMoreButton onClick={openModal}>
//                 ReadMore<i className="fa-solid fa-arrow-right"></i>
//               </ReadMoreButton>
            
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <ReadMoreContainer>
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add Comment</h2>

//         <form>
//           <input
//             type="text"
//             id="lastName"
//             value={commentData}
//             onChange={(e) => setComentData(e.target.value)}
//           />
//           <button onClick={getComment} type="button">
//             Comment
//           </button>
//         </form>
//         </ReadMoreContainer>
//       </Modal>
    
//     </>
//   );
// }

// export default Comment;
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index