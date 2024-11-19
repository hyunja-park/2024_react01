import React from 'react';

function Avatar({siza, person}) {
    const getImageUrl = 'https://i.imgur.com/'
    return (
       <img
        src={getImageUrl + person.imageIdg + '.jpg'}
        alt={person.name}
        width={size}
        height={size}
       />
    );
}

export default Avatar;