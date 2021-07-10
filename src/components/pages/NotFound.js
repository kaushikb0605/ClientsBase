import React from 'react'
import { useHistory } from 'react-router';

const NotFound = () => {
    let history=useHistory();
    return (
        <div className="not-found">
            <h1 className="display-1">Page Not Found</h1>
            {
                setTimeout(()=>
                    history.push("/"),3000)
            }
        </div>
    )
};

export default NotFound;
