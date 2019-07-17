import React from 'react';
import './Todo_Style.css';

export default class Todo extends React.Component {

    constructor() {
        console.log('constructor!!!')
        super()
        this.state = {
            isEditable: false
        };
    }
    // state = {
    //     isEditable: false
    // };


    checkTask() {

        let bool = !this.props.taskStatus;
        this.props.checkTask(this.props.id, bool);
    }

    changeTextName() {
        console.log('!@!@!@')
        this.setState({ isEditable: true });
    }

    isEnterPress(e) {
        if (e.which === 13) {
            this.setState({ isEditable: false });
            let textValue = e.target.value;
            this.props.changeTaskName(textValue, this.props.id);
        }
    }

    onBlurHandler() {
        console.log('!!!!!');
        // this.setState({ isEditable: false })
    }

    deleteTask() {
        this.props.deleteTask(this.props.id)
    }

    render() {
        console.log(`edit ${this.props.taskName}`, this.state);
        return (
            <div className = "Todo">
                <div>
                    <input
                        type = "checkbox"
                        checked = {this.props.taskStatus}
                        onClick = {() => this.checkTask()}
                    />
                </div>
                <div>
                    <p
                        onDoubleClick = {(e) => this.changeTextName(e)}
                    >
                        {this.props.taskName}
                    </p>
                    <input
                        className = {this.state.isEditable ? "visibleInput" : "invisibleInput"}
                        type = "text"
                        id = {this.props.id}
                        defaultValue = {this.props.taskName}
                        onKeyPress = {(e) => this.isEnterPress(e)}
                        disabled = {!this.state.isEditable}
                        onBlur = {() => this.onBlurHandler()}
                    />
                </div>
                <div>
                    <button
                        onClick = {(id) => this.deleteTask(id)}
                    >X</button>
                </div>
            </div>
        )
    }
}
// export { Todo }