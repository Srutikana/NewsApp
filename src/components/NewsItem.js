// // import React from 'react'

// const NewsItem = (props) => {
//   const { title, description, imageUrl, newsUrl, author, date, source } = props;

//   return (
//     <div className='my-3'>
//       <div className="card">
//         <div className="card-body">
//           <div>
//             {source && (
//               <span className="badge rounded-pill bg-danger">
//                 {source}
//               </span>
//             )}
//           </div>

//           <img 
//             src={imageUrl ? imageUrl : "https://via.placeholder.com/150"} 
//             className="card-img-top" 
//             alt={title} 
//           />

//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{description}</p>
//           <p className="card-text">
//             <small className="text-muted">
//               By {author || 'N/A'} on {new Date(date).toGMTString()}
//             </small>
//           </p>

//           <a 
//             href={newsUrl} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="btn btn-sm" 
//             style={{ backgroundColor: 'red', color: 'white' }}  // Change the button color to red
//           >
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewsItem;
import React from 'react';
// Importing the default image (news.jpg) from the components folder
import defaultImage from '../components/news1.jpg';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className='my-3'>
      <div className="card">
        <div className="card-body">
          <div>
            {source && (
              <span className="badge rounded-pill bg-danger">
                {source}
              </span>
            )}
          </div>

          {/* Use the default image if imageUrl is missing or broken */}
          <img 
            src={imageUrl || defaultImage} 
            className="card-img-top" 
            alt={title} 
            onError={(e) => e.target.src = defaultImage} // Fallback to default image on error
          />

          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author || 'N/A'} on {new Date(date).toGMTString()}
            </small>
          </p>

          <a 
            href={newsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-sm" 
            style={{ backgroundColor: 'red', color: 'white' }}  // Change the button color to red
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
