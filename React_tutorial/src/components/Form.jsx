//form handling tutorial:


import React, { Component } from 'react'

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments: ''
        }
    }

    handleUsernameChange =(event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event =>{
        this.setState({
            username: event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }

    render(){
        return(
            <form  onSubmit={this.handleSbumit}>
                <div>
                    <label htmlFor="">UserName</label>
                    <input 
                       type="text" 
                       value={this.state.username} 
                       onChange={this.handleUsernameChange}
                    />
                </div>

                <div>
                    <label htmlFor="">Comments</label>
                    <textarea 
                       name="" 
                       id=""
                       value={this.state.comments} 
                       onChange={this.handleCommentsChange}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="">Topic</label>
                    <select name="" id="" value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                    </select>
                    
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form