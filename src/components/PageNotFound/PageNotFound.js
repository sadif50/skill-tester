import React from 'react';
import NotFound from '../../img/404.png';

const PageNotFound = () => {
    return (
        <div className='text-center mt-5'>
            <img className='w-50' src={NotFound} alt="404 Not Found" />
        </div>
    );
};

export default PageNotFound;