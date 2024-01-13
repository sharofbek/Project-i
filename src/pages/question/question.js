import React from 'react';
import './question.scss'
import Newspaper from '../../assets/NewspaperClipping.png'
import Card from '../../assets/IdentificationCard.png'
import Video from '../../assets/PlayCircle.png'
import Hands from '../../assets/Handshake.png'


const Question = () => {
    return (
        <div className='question'>
            <h1>How you'll become successful instructor</h1>
            <div className="card-group">
                <div className="card">
                    <img src={Newspaper} alt=""/>
                    <h3>1. Apply to become instructor.</h3>
                    <span>
                        Sed et mattis urna. Sed tempus fermentum est,
                        eu lobortis nibh consequat eu.
                    </span>
                </div>
                <div className="card">
                    <img src={Card} alt=""/>
                    <h3>2. Setup & edit your profile.</h3>
                    <span>
                        Duis non ipsum at leo efficitur pulvinar. Morbi
                        semper nisi eget accumsan ullamcorper.
                    </span>
                </div>
                <div className="card">
                    <img src={Video} alt=""/>
                    <h3>3. Create your new course.</h3>
                    <span>
                        Praesent congue ornare nibh sed ullamcorper.
                        Proin venenatis tellus non turpis scelerisque.
                    </span>
                </div>
                <div className="card">
                    <img src={Hands} alt=""/>
                    <h3>4. Start teaching & earning</h3>
                    <span>
                        Praesent congue ornare nibh sed ullamcorper.
                        Proin venenatis tellus non turpis scelerisque.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Question;