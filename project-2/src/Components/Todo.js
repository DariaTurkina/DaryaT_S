import React from 'react';

export default class Todo extends React.Component {

    state = {
        is_editable: false
    };
/* 
    checkTask() {

        let bool = !this.props.taskStatus;
        this.props.checkTask(this.props.id, bool);
    } */

    changeTextName() {
        this.setState({ is_editable: true });
    }

    isEnterPress(e) {
        if (e.which === 13) {
            let textValue = e.target.value;
            this.setState({ taskName: textValue });
            this.props.changeTaskName(textValue, this.props.id);
            this.setState({ is_editable: false });
        }
    }

    render() {
        return (
            <div className = "Todo">
                <div>
                    <input
                        type = "checkbox"
                        checked = {this.props.taskStatus}
                        onClick = {() => this.props.checkTask(this.props.id, !this.props.taskStatus)}
                    />
                </div>
                <div>
                    <p
                        disabled = {this.state.is_editable}
                        onDoubleClick = {(e) => this.changeTextName(e)}
                    >
                        {this.props.taskName}
                    </p>
                    {
                        this.state.is_editable && 
                        <input
                            type = "text"
                            id = {this.props.id}
                            defaultValue = {this.props.taskName}
                            onKeyPress = {(e) => this.isEnterPress(e)}
                            disabled = {!this.state.is_editable}
                        />
                    }
                </div>
                <div>
                    <button
                        onClick = {() => this.props.deleteTask(this.props.id)}
                    >X</button>
                </div>
            </div>
        )
    }
}
// export { Todo }