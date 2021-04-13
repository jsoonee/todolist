import React, { Component } from 'react';

import './Templates.css';
import Moment from 'react-moment';
import 'moment/locale/ko';
import batt from './images/batt.png';
import signal from './images/signal.png';
import wifi from './images/wifi.png';

const now = new Date();

class Templates extends Component {
    render(){
        return(
            <div>
                <div className="hour"><Moment format="h"/></div>
                <div className="colon">:</div>
                <div className="minute"><Moment format="mm"/></div>
                <img src={batt} id="batt"/>
                <img src={wifi} id="wifi"/>
                <img src={signal} id="signal"/>
                <div className="mhead">
                    <a href="/"><div className="mhead-content">오늘 할 일은?</div></a>
                </div>
                    <div className="day"><Moment format="M월 D일 (dd)">{now}</Moment></div>
            </div>
        );
    }
}

export default Templates;