// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';

// const IndexRoute = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWindowSize = () => {
//       setIsMobile(window.innerWidth <= 575); // Adjust the threshold as needed
//     };

//     // Initial check
//     checkWindowSize();

//     // Add a resize event listener to update the state
//     window.addEventListener('resize', checkWindowSize);

//     return () => {
//       // Clean up the event listener when the component unmounts
//       window.removeEventListener('resize', checkWindowSize);
//     };
//   }, []);

//   return (
//     <div>
//       {isMobile && <h1>This is the Index Route</h1>}
//       <Outlet />
//     </div>
//   );
// };

// export default IndexRoute;



import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import css from './IndexRoute.module.css'

const IndexRoute = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 575); // Adjust the threshold as needed
    };

    // Initial check
    checkWindowSize();

    // Add a resize event listener to update the state
    window.addEventListener('resize', checkWindowSize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div>
      <div className={isMobile ? css.mobilecontent : css.nonmobilecontent}>
      
        {/* Other content goes here */}
      </div>
      <Outlet />
    </div>
  );
};

export default IndexRoute;
