import React from 'react';
import './call.scss'
import Girl from "../../assets/Girl3.jpg";
import Arrow from '../../assets/ArrowRight.png'

const Call = () => {
    return (
        <div className='call'>
            <div className="img">
                <img src={Girl} alt=""/>
            </div>
            <div className="call-text">
                <h1>Don’t worry we’re always here to help you</h1>
                <p>
                    Mauris aliquet ornare tortor, ut mollis arcu luctus quis.
                    Phasellus nec augue malesuada, sagittis ligula vel,
                    faucibus metus. Nam viverra metus eget nunc dignissim.
                </p>
                <ul>
                    <li><img src={Arrow} alt=""/> Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.</li>
                    <li> <img src={Arrow} alt=""/> Those who are looking to reboot their work life and try a new profession that.</li>
                    <li> <img src={Arrow} alt=""/> Nunc auctor consequat lorem, in posuere enim hendrerit sed.</li>
                    <li> <img src={Arrow} alt=""/> Duis ornare enim ullamcorper congue.</li>
                </ul>
                <div>
                    <p>Email us, anytime anywhere</p>

                    <h4>help.eduguard@gamil.com</h4>
                </div>
            </div>


        </div>
    );
};

export default Call;