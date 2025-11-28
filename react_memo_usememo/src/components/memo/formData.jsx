import React from "react";

export const FormData = React.memo((props) => {
  console.log("form data component");
  console.log(props)
  return (
    <div>
      <p>Form data</p>
      <p>{props.userData.username}</p>
      <p>{props.userData.password}</p>
    </div>
  );
});
