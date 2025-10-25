import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import ComingSoon from './ComingSoon.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ComingSoon />  
  </StrictMode>,
)



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import ComingSoon from './ComingSoon.tsx'  // Changed this line
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ComingSoon />  
//   </React.StrictMode>,
// )