import React from "react";

const Alert = ( {alert} ) => {
    return (
        <>
            {alert && ( <div className= {alert.includes ('Felicitaciones') ? 'alert-success' : 'alert-danger'}>
                {alert}
            </div>
            )}
        </>
    );
};

export default Alert;