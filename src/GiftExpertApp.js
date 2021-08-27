import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// GifExpertApp

function GiftExpertApp () {
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map(category => 
                        <GifGrid category={ category }/>
                        )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;