import React from 'react';

const Link = ({route}) => {
    return (
        <>
            <li key={route.id} className='mr-5 bg-purple-200 '>
                <a href={route.path}>{route.name}
                </a>
             </li>
        </>
    );
};

export default Link;