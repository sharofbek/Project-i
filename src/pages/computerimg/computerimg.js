import React from 'react';
import './compute.scss'
import Computer from '../../assets/computer.png'
import {CheckCircleFilled} from "@ant-design/icons";

const Computerimg = () => {
    return (
        <div className='computer'>
            <div className="img">
                <img src={Computer} alt=""/>
            </div>

            <div className="computer-text">
                <h1>
                    Why you’ll start teaching on Eduguard
                </h1>
                <p>
                    Praesent congue ornare nibh sed ullamcorper.
                    Proin venenatis tellus non turpis scelerisque,
                    vitae auctor arcu ornare. Cras vitae nulla
                    a purus mollis venenatis.
                </p>

                <div className="check">
                    <CheckCircleFilled style={{color:"#23BD33", fontSize:"28px"}}/>
                    <div className="check-text">
                        <h3>Tech your students as you want.</h3>
                        <span>
                            Morbi quis lorem non orci fermentum euismod.
                            Nam sapien tellus, aliquam nec porttitor vel,
                            pellentesque at metus.
                        </span>
                    </div>
                </div>
                <div className="check">
                    <CheckCircleFilled style={{color:"#23BD33", fontSize:"28px"}}/>
                    <div className="check-text">
                        <h3>Manage your course, payment in one place.</h3>
                        <span>
                            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.
                            Nullam vel libero pharetra, euismod turpis et, elementum enim.
                        </span>
                    </div>
                </div>
                <div className="check">
                    <CheckCircleFilled style={{color:"#23BD33", fontSize:"28px"}}/>
                    <div className="check-text">
                        <h3>Chat with your students.</h3>
                        <span>
                            Nullam mattis lectus ac diam egestas posuere.
                            Praesent auctor massa orci, ut fermentum eros dictum id.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Computerimg;