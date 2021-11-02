import React, { Component } from 'react';

import './css/Templates.css';

import Moment from 'react-moment';
import 'moment/locale/ko';

import batt from './images/batt.svg';
import signal from './images/signal.svg';
import wifi from './images/wifi.svg';

const now = new Date();

class Templates extends Component {
    render(){
        return(
            <div>
                <div className="hour"><Moment format="h:mm"/></div>
                <img src={batt} alt="battery" id="batt"/>
                <img src={wifi} alt="wifi" id="wifi"/>
                <img src={signal} alt="signal" id="signal"/>
                <div className="mhead">
                    <a href="./"><div className="mhead-content">오늘 할 일은?</div></a>
                </div>
                <div className="day"><Moment format="M월 D일 (dd)">{now}</Moment></div>
            </div>
        );
    }
}

export default Templates;