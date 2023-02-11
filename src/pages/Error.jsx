import React from 'react';
import{Link} from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <h1>Error page</h1>

         <Link to="/">
            <h2>back</h2>
         </Link>
        </div>
    );
};

export default Error;