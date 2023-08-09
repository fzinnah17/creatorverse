// // // how to render the name, url, description, and imageURL
// // import React from 'react';

// // function ContentCreator({ creator }) {
// //     return (
// //         <div className="creator-container">
// //             <img src={creator.imageURL} alt={creator.name} />
// //             <h2>{creator.name}</h2>
// //             <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
// //             <p>{creator.description}</p>
// //         </div>
// //     );
// // }

// // export default ContentCreator;


// // ContentCreator.jsx

// // import React from 'react';
// // import './ContentCreator.css';

// // function ContentCreator({ creator }) {
// //     return (
// //         <div className="card-wrap">
// //             <div className="card">
// //                 <img className="card-image" src={creator.imageURL} alt={creator.name} />
// //                 <div className="card-content">
// //                     <h2>{creator.name}</h2>
// //                     <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
// //                     <p>{creator.description}</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default ContentCreator;


// // import React from 'react';
// // import './ContentCreator.css';

// // function ContentCreator({ creator }) {
// //   return (
// //     <div className="card-wrap">
// //       <div className="card">
// //         <img className="card-image" src={creator.imageURL} alt={creator.name} />
// //         <div className="card-content">
// //           <div className="content-header">
// //             <h2>{creator.name}</h2>
// //             <a href={creator.url} target="_blank" rel="noopener noreferrer">
// //               {creator.url}
// //             </a>
// //           </div>
// //           <p>{creator.description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContentCreator;


// // import React from 'react';
// // import './ContentCreator.css';

// // function ContentCreator({ creator }) {
// //   return (
// //     <div className="centered-container">
// //       <div className="card-wrap">
// //         <div className="card">
// //           <img className="card-image" src={creator.imageURL} alt={creator.name} />
// //           <div className="card-content">
// //             <div className="content-header">
// //               <h2>{creator.name}</h2>
// //               <a href={creator.url} target="_blank" rel="noopener noreferrer">
// //                 {creator.url}
// //               </a>
// //             </div>
// //             <p>{creator.description}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContentCreator;



// plain card with overlay
// import React from 'react';
// import './ContentCreator.css';

// function ContentCreator({ creator }) {
//   return (
//     <div className="card-wrap">
//       <div className="card">
//         <div className="image-container">
//           <img className="card-image" src={creator.imageURL} alt={creator.name} />
//           <div className="image-overlay">
//             <div className="quote-text">
//               <p>{creator.name}</p>
//             </div>
//           </div>
//         </div>
//         <div className="card-content">
//           <div className="content-header">
//             <h2>{creator.name}</h2>
//             <a href={creator.url} target="_blank" rel="noopener noreferrer">
//               {creator.url}
//             </a>
//           </div>
//           <p>{creator.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContentCreator;




// import React, { useState } from 'react';
// import './ContentCreator.css';

// function ContentCreator({ creators }) {
//   const [currentPage, setCurrentPage] = useState(0);

//   const nextPage = () => {
//     if (currentPage < creators.length - 1) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   const previousPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   return (
//     <div className="book">
//       {creators.map((creator, index) => (
//         <div
//           key={index}
//           id={`page-${index}`}
//           className="page"
//           style={{ zIndex: creators.length - index }}
//         >
// <div className="default-position left-img left-cover" data-date={new Date().toLocaleDateString()}>
//             <div className="image-container">
//               <img
//                 className="card-image"
//                 src={creator.imageURL}
//                 alt={creator.name}
//               />
//               <div className="image-overlay">
//                 <div className="quote-text">
//                   <p>{creator.name}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="default-position right-img right-cover card-content">
//             <h2>{creator.name}</h2>
//             <a href={creator.url} target="_blank" rel="noopener noreferrer">
//               {creator.url}
//             </a>
//             <p>{creator.description}</p>
//           </div>

//           {index !== 0 && (
//             <div onClick={previousPage} className="btn btn-prev">
//               <span className="arrow-btn">←</span>
//             </div>
//           )}

//           {index !== creators.length - 1 && (
//             <div onClick={nextPage} className="btn btn-next">
//               <span className="arrow-btn">→</span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ContentCreator;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCreator } from '../utils';

import './ContentCreator.css';

function ContentCreator({ creators }) {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const nextPage = () => {
    if (currentPage <= creators.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this content creator?")) {
      await deleteCreator(creators[currentPage - 1].id);
      previousPage(); // move to the previous page after deletion
    }
  };


  return (
    <div className="book">
      {currentPage === 0 && (
        <div className="page cover-page">
          <div className="default-position left-img left-cover" data-date={new Date().toLocaleDateString()}>
            <span className="cover-text">Name: John, Course: Web Dev, ID: 12345, Date: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      )}
  
      {currentPage > 0 && currentPage <= creators.length && (
        <div className="page">
          <div className="default-position left-img left-cover">
            <div className="image-container">
              <img className="card-image" src={creators[currentPage - 1].imageURL} alt={creators[currentPage - 1].name} />
            </div>
          </div>
          <div className="default-position right-img right-cover card-content">
            <h2>{creators[currentPage - 1].name}</h2>
            <a href={creators[currentPage - 1].url} target="_blank" rel="noopener noreferrer">
              {creators[currentPage - 1].url}
            </a>
            <p>{creators[currentPage - 1].description}</p>
            <button onClick={() => navigate(`/view/${creators[currentPage - 1].id}`)}>View</button>
            <button onClick={() => navigate(`/edit/${creators[currentPage - 1].id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
  
      {currentPage === creators.length + 1 && (
        <div className="page add-page">
          <button>Add a new page</button>
        </div>
      )}
  
      {currentPage > 0 && (
        <div onClick={previousPage} className="btn btn-prev">
          <span className="arrow-btn">←</span>
        </div>
      )}
  
      {currentPage <= creators.length && (
        <div onClick={nextPage} className="btn btn-next">
          <span className="arrow-btn">→</span>
        </div>
      )}
    </div>
  );
  
}

export default ContentCreator;

