import React from 'react';

class Todo extends React.Component {

    checkTask() {

        let id = document.getElementById(this.props.id).id;
        this.props.checkTask(id);
        //
    }

    deleteTask() {

        let id = document.getElementById(this.props.id).id;
        console.log('>>>>>>>>>', this.props.id)
        this.props.deleteTask(id);
    }

    render() {
        console.log('PROPS : ', this.props)
        return(
            <div className = "Todo">
                <div>
                    <input 
                        type = "checkbox" 
                        checked = { this.props.taskStatus }
                        //onChange = { (e) => this.checkTask(e) }
                    />
                </div>
                <div>
                    <p>{ this.props.taskName }</p>
                </div>
                <div>
                    <input 
                        type = "submit"
                        id = { this.props.id }
                        value = "X"
                        onClick = { (e) => this.deleteTask(e) }
                    />
                </div>
            </div>
        )
    }
}
export { Todo }