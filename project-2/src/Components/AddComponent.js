import React from 'react';

export default class AddComponent extends React.Component {

    state = { name: '' };
    isEnterPress(e) {
        this.setState = { name: e.target.value };
        if (e.which === 13) {
            document.getElementById('textInp').value = '';
            let textValue = this.setState.name;
            this.props.addTodo(textValue);
            console.log('TEXT : ', textValue);
        }
    }

    render() {
        return (
            <div className="AddComponent">
                <input
                    type = "text"
                    id = "textInp"
                    placeholder = "What needs to be done?"
                    onKeyPress = { (e) => this.isEnterPress(e) }
                    //fullWidth = {true}
                />



            </div>
        );
    }

}