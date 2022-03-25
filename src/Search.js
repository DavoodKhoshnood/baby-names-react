import React from 'react';

const Search = () => <div className='content'>
    <input className='form-control' type='text' placeholder='Search...' onKeyUp={filter()}/>
</div>

const filter = () => {
    return 1
}
export default Search