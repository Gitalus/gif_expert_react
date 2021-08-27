import React, { useState} from 'react';
// GifExpertApp

function GiftExpertApp () {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    function handleAdd() {
        setCategories(cats => [ 'HxH', ...cats]);
    }


    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;