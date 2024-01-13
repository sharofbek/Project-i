import React from 'react';
import './rules.scss'
import Girl from '../../assets/GIrl2.jpg'

const Rules = () => {
    return (
        <div className='rules'>
            <div className="rules-text">
                <h1>Instructor rules & regulations</h1>
                <p>
                    Sed auctor, nisl non elementum ornare,
                    turpis orci consequat arcu, at iaculis quam leo nec libero.
                    Aenean mollis turpis velit,
                    id laoreet sem luctus in.
                    Etiam et egestas lorem.
                </p>
                <ul>
                    <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
                    <li>Nam leo tortor, tempus et felis non.</li>
                    <li>Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.</li>
                    <li>Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.</li>
                </ul>
            </div>

            <div className="img">
                <img src={Girl} alt=""/>
            </div>
        </div>
    );
};

export default Rules;