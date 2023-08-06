// // how to render the name, url, description, and imageURL
// import React from 'react';

// function ContentCreator({ creator }) {
//     return (
//         <div className="creator-container">
//             <img src={creator.imageURL} alt={creator.name} />
//             <h2>{creator.name}</h2>
//             <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
//             <p>{creator.description}</p>
//         </div>
//     );
// }

// export default ContentCreator;


// ContentCreator.jsx

// import React from 'react';
// import './ContentCreator.css';

// function ContentCreator({ creator }) {
//     return (
//         <div className="card-wrap">
//             <div className="card">
//                 <img className="card-image" src={creator.imageURL} alt={creator.name} />
//                 <div className="card-content">
//                     <h2>{creator.name}</h2>
//                     <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
//                     <p>{creator.description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ContentCreator;


// import React from 'react';
// import './ContentCreator.css';

// function ContentCreator({ creator }) {
//   return (
//     <div className="card-wrap">
//       <div className="card">
//         <img className="card-image" src={creator.imageURL} alt={creator.name} />
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


// import React from 'react';
// import './ContentCreator.css';

// function ContentCreator({ creator }) {
//   return (
//     <div className="centered-container">
//       <div className="card-wrap">
//         <div className="card">
//           <img className="card-image" src={creator.imageURL} alt={creator.name} />
//           <div className="card-content">
//             <div className="content-header">
//               <h2>{creator.name}</h2>
//               <a href={creator.url} target="_blank" rel="noopener noreferrer">
//                 {creator.url}
//               </a>
//             </div>
//             <p>{creator.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContentCreator;

import React from 'react';
import './ContentCreator.css';

function ContentCreator({ creator }) {
  return (
    <div className="card-wrap">
      <div className="card">
        <div className="image-container">
          <img className="card-image" src={creator.imageURL} alt={creator.name} />
          <div className="image-overlay">
            <div className="quote-text">
              <p>{creator.name}</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="content-header">
            <h2>{creator.name}</h2>
            <a href={creator.url} target="_blank" rel="noopener noreferrer">
              {creator.url}
            </a>
          </div>
          <p>{creator.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ContentCreator;



