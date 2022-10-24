import React from 'react'
import { useHistory } from "react-router-dom";
export default function Four0Four() {
    const history = useHistory();
    return (
        <div className="FOF-body">
            <h1 className="FOF-h1">404</h1>
            <p className="FOF-p">Oops! Something is wrong.</p>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => { history.push('/') }} className="FOF-button" ><i className="icon-home"></i> Go back to Home </button>
            </div>
        </div>

    )
}
