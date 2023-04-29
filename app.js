import React from "react";
import ReactDOM from "react-dom/client";

 const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
 console.log("heading", heading);
 const elem = (
   <div className="span">Span element</div>
 );
 const Title = () => {
   return (
      <h1 id="heading" className="title-jsx" tabIndex="1">
         {elem}
         Namaste React from JSX!
      </h1>
   )};
 //console.log("JSXheading",JSXheading);

 const newTitle = (
   <div>
      <Title/>
      <h1 className="personal">Swati</h1>
   </div>
   
 );
 const HeadingComponent = () => {
   return (
      <>
         COMPONENT COMPOSITION STARTS HERE!
         <Title></Title>
      <h1 className="heading" id="heading">
         Namaste React from React Functional Component!
      </h1>
      {newTitle}
      <>
      <div>12345</div>
      </>
      </>
      
   )
 };


 const root = ReactDOM.createRoot(document.getElementById('root'));
 const jsxRoot = ReactDOM.createRoot(document.getElementById('jsx-root'));
 //jsxRoot.render(title);
 root.render(<HeadingComponent/>);