import React from 'react';
import mongoose from 'mongoose';
require('dotenv').config()
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

function write (props) {
    return(
        <div>
            
        </div>
    )
}