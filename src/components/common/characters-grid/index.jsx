import React from 'react'
import CharacterItem from '../character-item';
import Spinner from '../spiner';
const CharactersGrid = ({ isLoading, items }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className='cards'>
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} isLoading={isLoading}/>
            ))}
        </section>
    );
}

export default CharactersGrid;
