import React, { Component } from 'react';
import TodoItems from './TodoItems';
import Templates from './Templates';
import './TodoList.css';



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
                <Templates/>
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