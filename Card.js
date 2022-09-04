import React from 'react';

import LinkedIn from './images/Linkedin.png';
import Facebook from './images/Facebook.png';
import Twitter from './images/Twitter.png';
import Instagram from './images/Instagram.png';

const Card = (props) => {
    return (
        <div className="cards">
            <img src={props.profile} alt="profile" className="profile"/>
            <div className="card--body">
                <h2 className="card--title">{props.name}</h2>
                <h3>Frontend Developer</h3>
                <p className="domain">mardochee@.websites.net</p>
                <div>
                    <button className="btn--1">
                        <span className="material-symbols-outlined email">
                            mail
                        </span>
                        Email
                    </button>
                   
                </div>
                <h2 className="align h2">About</h2>
                <p className="align">I am a frontend developer with a 
                    particular interest in making things
                    simple and automating daily tasks. 
                    I try to keep up with security and best 
                    practices, and am always looking for new 
                    things to learn.</p>

                <h2 className="align h2">Interest</h2>
                <p className="align">Food expert. Music scholar. Reader. 
                   Internet fanatic. Bacon buff. 
                   Entrepreneur. Travel geek. Pop culture 
                   ninja. Coffee fanatic.</p>
            </div>
            <div className="footer">
                <img src={Facebook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Instagram} alt="instagram" />
            </div>
        </div>
    )
};

export default Card;