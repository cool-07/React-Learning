import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import About from './About.jsx'
// function MyApp(){
//   return (
//     <>
//    <h1>hello friends</h1> 
//     </>
//   )
// }

const ReactElement=(
  <a href="https://google.com" target="_blank">visit me here</a>
)
const name="google";
const AnotherElemet=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'check ',
  name
)

createRoot(document.getElementById('root')).render(
  
    <App/>
  
)


