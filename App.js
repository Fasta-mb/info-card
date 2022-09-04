import React from "react";
import './styles.css';
import Card from "./Card";
import Card1 from './images/Card1.png';
import Card2 from './images/Card2.jpg';
import Card3 from './images/Card3.jpg';



const App = () => {
    return (
        <div className="container">
            <Card 
            profile={Card2}
            name="Mardochee Brice"/>
            <Card
            profile={Card1} 
            name="Jessica Moresi"/>
            <Card
            profile={Card3} 
            name="Evens Brice"/>
        </div>
    )
};




export default App;


