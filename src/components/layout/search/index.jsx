import React from 'react'

const Search = ({ setSearchWord }) => {
    return (
        <section className='search'>
            <form>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Search characters"
                    onChange={e => setSearchWord(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search;
