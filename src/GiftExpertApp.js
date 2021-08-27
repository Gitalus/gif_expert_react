import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';
// GifExpertApp

function GiftExpertApp () {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // function handleAdd() {
    //     setCategories(cats => [ 'HxH', ...cats]);
    // }


    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;