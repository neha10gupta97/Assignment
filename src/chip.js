import React, { Component } from 'react';

export default class Chip extends Component {

    constructor(props){
        super(props);
        this.closeChip = this.closeChip.bind(this);
    }

    closeChip(){
        debugger
        $('#chip'+this.props.id).addClass('hidden');
    }


    render() {
        return (
        <div className="chip-container" id={"chip" + this.props.id}>
            <div className="user-img"></div>
            <div className="user-name">{this.props.name}</div>
            <div className="close" onClick={this.closeChip}>X</div>        
        </div>
        );
    }
}
