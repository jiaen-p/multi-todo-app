import React from 'react';
import mongoose from 'mongoose';
require('dotenv').config()
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});
console.log(process.env.DB_HOST)

function Fetch () {
    return(
        <div>
            <p>this is fetch jsx file</p>
        </div>
    )
}

export default Fetch;