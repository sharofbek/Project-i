import React from 'react';
import './footer.scss'
import Quote from "../../assets/Quotes.png";


const Footer = () => {
    return (
        <div>
            <div className="footer-text">
                <h1>20k+ Instructor created their success story with eduguard</h1>
                <p>
                    Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros justo,
                    id commodo ante laoreet nec. Phasellus aliquet, orci id pellentesque mollis.
                </p>
                <div className="teacher-box">
                    <img src={Quote} alt=""/>
                    <p>
                        Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
                        Pellentesque ullamcorper auctor ante, egestas interdum quam
                        facilisis commodo. Phasellus efficitur quis ex in consectetur.
                        Mauris tristique suscipit metus, a molestie dui dapibus vel.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;