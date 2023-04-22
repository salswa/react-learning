const head = React.createElement("div", {id:"heading", className:"heading"}, 
             [
                React.createElement("h1", {id:"child"}, "Hello world react here!"),
                React.createElement("h1", {id:"child"}, "Hello world react here!")
             ]
            );
console.log("heading",head);
const reactroot = ReactDOM.createRoot(document.getElementById("react-root"));
console.log("reactroot",reactroot);
reactroot.render(head);