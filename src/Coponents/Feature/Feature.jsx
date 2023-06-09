import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
            <div className='flex items-center'>
                <CheckBadgeIcon className='h-12 w-12 text-blue-500'></CheckBadgeIcon>
                 <p className=' ml-2'>{feature}</p>
            </div>
    );
};

export default Feature;