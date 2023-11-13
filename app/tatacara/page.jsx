// "use client"
// import React, { useEffect, useRef } from 'react'

// const page = () => {

//   return (
//     // <div>
//     //   <embed src="/panduan.pdf" width="100%" height="2000" className='mw-100 mh-100' type="application/pdf"></embed>
//     // </div>
//   )
// }

// export default page

// "use client"
// import Content from './content.mdx'
// import "./content.css"

// export default function Panduan() {
//   return (
//     <div className="tatacara-margin">
//     <div className="tatacara-wrapper">
//     <Content />
//     </div>
//     </div>
//   )
// }
import "./content.css"

const Page = () => {
  return (
    <div className="panduan-wrapper">
      <object data="/panduan.pdf" type="application/pdf" width="100%" height="800px">
        <p>Unable to display PDF file. <a href="/panduan.pdf">Download</a> instead.</p>
      </object>
    </div>
  );
};
export default Page;