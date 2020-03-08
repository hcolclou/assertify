import React, { Component } from 'react';
import './Styles.css'

class TextPage extends Component {
    state ={
        entry: "",
        output:"this will be the output"
    }

    onChange = (e) => {
        this.setState({
            entry: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.state.entry has the text input
        console.log(this.state.entry)
    }

    render() {
        return(
            <div className="container row">
                <div className="card col s6 deep-purple lighten-4">
                <textarea className="textarea" onChange={this.onChange} onSubmit={this.onSubmit} />
                <a className="waves-effect btn deep-purple lighten-2 waves-light" onClick={this.onSubmit}>Analyze</a>
                </div>
                <div className="col s6">
                <p>
                    {this.state.output}
                </p>
                </div>
            </div>
        )
    }
}

export default TextPage;