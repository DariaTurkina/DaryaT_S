import React from 'react';

class Todo extends React.Component {

    state = { 
        taskName: this.props.taskName,
        checked: this.props.taskStatus,
        is_editable: false
    };

    checkTask() {

        let bool = !this.state.checked;
        this.setState({ checked: bool });
        this.props.checkTask(this.props.id, bool);

    }

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
        console.log('render Item');
        return(
            <div className = "Todo">
                <div>
                    <input 
                        type = "checkbox"
                        checked = { this.state.checked }
                        onClick = { (id, bool) => this.checkTask(id, bool) }
                    />
                </div>
                <div>
                    <p 
                        disabled = { this.state.is_editable }
                        onDoubleClick = { (e) => this.changeTextName(e) }
                    >
                        { this.state.taskName }
                    </p>
                    <input 
                        type = "text" 
                        id = { this.props.id }
                        defaultValue = { this.state.taskName }
                        onKeyPress = { (e) => this.isEnterPress(e) } 
                        disabled = { !this.state.is_editable }
                    />
                </div>
                <div>
                    <input 
                        type = "submit"
                        value = "X"
                        onClick = {() => this.props.deleteTask(this.props.id)}
                    />
                </div>
            </div>
        )
    }
}
export { Todo }