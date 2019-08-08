import React from "react";
// import "./style.css";

// Export the Container, Row, Col components from this file

// Container component - use a bootstrap container without having to think about class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Row component - use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Col component - bootstrap columns with less syntax
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}