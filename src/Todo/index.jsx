import React, { Component } from 'react'


class Todo extends Component {

    state = {
        value: '',
        items: []
    }


    InputChange = e => {
        const { value } = e.target

        this.setState(prevState => {
            return {
                ...prevState,
                value
            }
        })
    }

    AddTask = e => {
        e.preventDefault()
        
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <form action="#">
                    <input type="text" onChange={this.InputChange} />
                    <button>Send</button>
                </form>

            </div>
        )
    }


}

export default Todo