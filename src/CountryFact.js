import React from "react";

function Country(props) {
  console.log("Props ", props);
  const myStyle = { width: "18rem" };

  return (
    <div className="card" style={myStyle}>
         <h3>Flag</h3>
      <img src={props.img} class="card-img-top" alt="..."  />
      <div class="card-body">
         
        <p class="card-text"> Capital : {props.name} </p>
      </div>
    </div>
  );
}

//? export the component
export default Country;
