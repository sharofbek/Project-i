import React from 'react';
import './block.scss'
import Girl from '../../assets/girl1.png'

const Block = () => {
    return (
        <div className='block'>
            <div className="text">
                <h1>Become an Instuctor</h1>
                <p>
                    Become an instructor & start teaching with 26k certified instructors.
                    Create a success story with 67.1k Students — Grow yourself with 71 countries.
                </p>
                <button>
                    Get Started
                </button>

            </div>
            <div className="foto">
                <img src={Girl} alt=""/>
            </div>

        </div>
    );
};

export default Block;