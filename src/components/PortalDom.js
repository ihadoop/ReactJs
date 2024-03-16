import React from 'react';
import ReactDOM from "react-dom";
const PortalDom = () => {
    return ReactDOM.createPortal(
        <div>
                <h1>Portal DOM Node</h1>
        </div>,document.getElementById("portal-root")
    );
};

export default PortalDom;