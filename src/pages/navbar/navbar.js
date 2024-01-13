import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {DownOutlined, SearchOutlined, UpOutlined, BellOutlined, HeartOutlined, MenuOutlined} from '@ant-design/icons';
import { Dropdown, Button, Drawer } from 'antd';
import './navbar.scss'
import Logo from '../../assets/ibs_img.jpg'


const items = [
    {
        label: <span>English</span>,
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: <span>Русский</span>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: <span>O'zbekcha</span>,
        key: '2',
    },
];

const NavbarJs = () => {
    const [arrow,setArrow] = useState(true)
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState(200);
    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const showLargeDrawer = () => {
        setSize('large');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <nav className='topNav'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <Dropdown style={{cursor:"pointer"}} menu={{items,}} trigger={['click']}>
                    <div onClick={() => setArrow(arrow => !arrow)} style={{cursor:"pointer" ,display:"flex" ,gap:"6px" , aligmItems:"center"}}>
                        {
                            items[0].label
                        }
                        {
                            arrow ? <DownOutlined /> : <UpOutlined/>
                        }

                    </div>
                </Dropdown>
            </nav>
            <nav className='downNav'>
                <div className="logo">
                    <img src={Logo} alt=""/>
                    <div className="search">
                        <SearchOutlined className="search-icon"/>
                        <input placeholder="What do you want learn..." type="text" className="Search"/>
                    </div>
                </div>

                <ul>
                    <BellOutlined />
                    <button className="course-btn">View Cources</button>
                    <button className="contact">Contact</button>
                </ul>

            </nav>

            <div className="hamburger">
                <div className="icons">
                    <BellOutlined style={{fontSize:"20px"}} />
                    <Dropdown style={{cursor:"pointer"}} menu={{items,}} trigger={['click']}>
                        <div onClick={() => setArrow(arrow => !arrow)} style={{cursor:"pointer" ,display:"flex" ,gap:"6px" , aligmItems:"center"}}>
                            {
                                items[0].label
                            }
                            {
                                arrow ? <DownOutlined /> : <UpOutlined/>
                            }

                        </div>
                    </Dropdown>
                </div>
                <span onClick={showDefaultDrawer}>
                    <MenuOutlined className='menu'/>
                </span>
            </div>

            <Drawer title={"Ibs"} placement="right" size={size} onClose={onClose} open={open}>
                <nav className="mediaNav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button className="course-btn">View Cources</button>
                    <button className="contact">Contact</button>
                </nav>
            </Drawer>


            <div className="search">
                <div className="search">
                    <SearchOutlined className="search-icon"/>
                    <input placeholder="What do you want learn..." type="text" className="Search"/>
                </div>
            </div>
        </div>
    );
};

export default NavbarJs;