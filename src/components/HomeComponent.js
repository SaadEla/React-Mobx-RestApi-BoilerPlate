import React from 'react';
import  '../css/Home.css';
import giphy from '../assets/giphy.gif';

function HomeComponent(props) {
    setTimeout(() => {
        props.history.push('/Post')
    }, 2000);
    return (
        <div >
        <img className="image"  src={giphy} />
        </div>
    );
}

export default HomeComponent;
