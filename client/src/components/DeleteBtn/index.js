import React from "react";
// import "./style.css";

// ...props - spread all of the passed props onto this element so they dont have to be defined individually
function DeleteBtn(props) {
    return (
        <span className="btn" {...props} role="button" tabIndex="0">
            x
        </span>
    );
}

export default DeleteBtn;