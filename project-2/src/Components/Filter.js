import React from 'react';

export default class Filter extends React.Component {

    /*constructor(props) {
        super(props);
        this.state = { taskMass: [...this.props.massive]};
    }*/
    
    
    Counter(e) {
        let count=0;
        for (let i=0;i<e.tasks.name.length;i++) {
            if (e.tasks.status===0) {
                count++;
            }
        }
        console.log('COUNTEEEEEEEER :', count);
        return count;
    }

    ShowAll() {
        //
    }

    ShowActive() {
        //
    }

    ShowComleted() {
        //
    }

    CleanCompleted() {
        //
    }
    
    render() {
        const tasks = this.props;
        return (
            <div className="Filter">
                <div className="Counter">
                    <p>{ (e) => this.Couter(e) } items left</p>
                </div>
                <div className="FilterButtons">
                    <input type="submit" value="All"></input>
                    <input type="submit" value="Active"></input>
                    <input type="submit" value="Completed"></input>
                </div>
                <div className="ClearingButton">
                    <input type="submit" value="Clear completed" onClick={() => this.clearAll()}>
                        
                    </input>
                </div>
            </div>
        )
    }

}