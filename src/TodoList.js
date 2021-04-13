import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';
import Moment from 'react-moment';
import 'moment/locale/ko';
import batt from './images/batt.png';
import signal from './images/signal.png';
import wifi from './images/wifi.png';


const now = new Date();

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value="";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return(item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }

    render(){
        return(
            <div className="phone">
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
                <div className="todoListMain">
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input ref={(a) => this._inputElement = a} 
                            placeholder="할 일을 입력하세요">
                            </input>
                            <button type="submit">추가</button>
                        </form>
                    </div>
                    <TodoItems 
                    entries={this.state.items}
                    delete={this.deleteItem}/>
                </div>
            </div>
        );
    }
}

export default TodoList;