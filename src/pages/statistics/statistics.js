import React from 'react';
import './statistics.scss'
import User from '../../assets/Users.png'
import Notebook from '../../assets/Notebook.png'
import Global from '../../assets/Global.png'
import Verify from '../../assets/Verify.png'
import Stack from '../../assets/Stack.png'


const Statistics = () => {
    return (
        <div className='statistics'>
            <div className="div">
                <img src={User} alt=""/>
                <div className="title1">
                    <h3>67.1k</h3>
                    <span>Students</span>
                </div>
            </div>
            <div className="div">
                <img src={Notebook} alt=""/>
                <div className="title1">
                     <h3>26k</h3>
                    <span>Certified Instructor</span>
                </div>
            </div>
            <div className="div">
                <img src={Global} alt=""/>
                <div className="title1">
                    <h3>72</h3>
                    <span>Country Language</span>
                </div>
            </div>
            <div className="div">
                <img src={Verify} alt=""/>
                <div className="title1">
                     <h3>99.9%</h3>
                    <span>Succes Rate</span>
                </div>
            </div>
            <div className="div">
                <img src={Stack} alt=""/>
                <div className="title1">
                    <h3>57</h3>
                    <span>Trusted Companies</span>
                </div>
            </div>
        </div>
    );
};

export default Statistics;