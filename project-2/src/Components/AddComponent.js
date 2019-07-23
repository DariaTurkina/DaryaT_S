import React from 'react';
import './AddComponent.css';

export default class AddComponent extends React.Component {

    isEnterPress(e) {
        const {value} = e.target;
        if (e.which === 13) {
            document.getElementById('textInp').value = '';
            let textValue = value;
            if (textValue === '') {
                alert('You didn\'t write a task. Null values aren\'t added to the task list!');
                /* ToastsStore.error('You didn\'t write a task. Null values aren\'t added to the task list!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                }); */
            } else {
                this.props.addTodo(textValue);
            }
        }
    }

   /*  <ToastsContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnVisibilityChange
    draggable
    pauseOnHover
/> */
    render() {
        return (
            <div className = { this.props.array.length === 0 ? "AddComponent shadow" : "AddComponent borderUnder" }>
                <button 
                    className = {this.props.array.length !== 0 ? "checkAll" : "invisibleButAdd" }
                    onClick = {() => this.props.checkTask()}
                >›</button>
                <input
                    type = "text"
                    id = "textInp"
                    className = "inp"
                    placeholder = "What needs to be done?"
                    onKeyPress = { (e) => this.isEnterPress(e) }
                />
            </div>
        );
    }

}