import React, { useState } from 'react';

import Userform from './UserForm.js'
import '../index.css';

const Heros = ({isLoading, items}) =>{

    return isLoading ? (<h1>Loading...</h1>) : <section>
        {items.map(item => (
            <h1>{item.name}{item.image}</h1>
        ))}
    </section>
}

export default Heros;