import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name: 'Free', price: 0 , features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use this feature',
            'Hudail Featured Feature',
            'Ajaira Feature'
        ]},
        {id: 2, name: 'Medium', price: 9.99 , features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use this feature',
            'Hudail Featured Feature',
            'Ajaira Feature'
        ]},
        {id: 3, name: 'Premium', price: 19.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use this feature',
            'Hudail Featured Feature',
            'Ajaira Feature'
        ] },
        {id: 3, name: 'Premium Gold', price: 39.99, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use this feature',
            'Hudail Featured Feature',
            'Ajaira Feature'
        ] },
    ]
    return (
        <div className='mt-12'>
            <h1 className='text-5xl font-bold bg-indigo-300 p-12 text-center text-white'>Best Deal of the town</h1>
           <div className='grid grid-cols-3 gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
           {
             pricingOption.map( option => <PricingOption key={option.id} option={option}></PricingOption>)
           }
           </div>
        </div>
    );
};

export default Pricing;