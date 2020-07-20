import React, { Component } from 'react';

const dodgerStyle = { color: "DodgerBlue" };
const redStyle = { color: "#f50057"};
const whiteStyle = { color: "white"};

export default class GetDate extends Component {
    // Setting the interval so the counter counts down
    componentDidMount() {
        this.interval = setInterval(() => this.setState({}), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        // Get current date
        let today = new Date().getTime();
        let year = new Date().getFullYear();
    
        // Get 2021 new years date
        let theGreat2021 = new Date("Jan 1, 2021 00:00:00").getTime();
        
        // Calculate the difference
        let distance = theGreat2021 - today;
        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((distance % (1000 * 60)) / 1000);
    
        if (year === 2020) {
            return (
                <div className="App-content">
                    <h2>2020 has been not so great... so here's a countdown to (hopefully) a better year.</h2>
                    <h2 style={whiteStyle}>
                        {`${days} `} <span style={redStyle}>days </span>
                        {`${hours} `} <span style={redStyle}>hours<br /></span>
                        {`${mins} `} <span style={dodgerStyle}>mins </span>
                        {`${secs} `} <span style={dodgerStyle}>secs<br /></span>
                    </h2>
                    <h6>#2020IsOverParty</h6>
                </div>
            );
        } else {
            return (
                <div className="App-content">
                    <h1>#2020IsOverParty</h1>
                    <h2>Finally, 2020 is over. I'm sure the world is doing great now!</h2>
                    <iframe title="WeDidIt" alt="2020IsNowOverVideo" src="https://www.youtube.com/embed/0FODZB3ofKo?autoplay=1&loop=1" frameborder="0"></iframe>
                </div>
            );
        }
    }
}