import React, { Component } from 'react';
import Chip from './chip';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {input: '', 
      list: ['Mark', 'Jane', 'Julie', 'Ross', 'Chandler', 'Monica', 'Aman'],
      chipData: []
    };
    this.updateInput = this.updateInput.bind(this);
    this.addChip = this.addChip.bind(this);
    this.populateChipData = this.populateChipData.bind(this);
  }

  updateInput(e){
    this.setState({input: e.target.value});
    
  }

  showList(){
    $('.list-container').removeClass('hidden');
    $('.input-label').addClass('hidden');
  }

  addChip(e){
    var data = this.state.chipData;
    data.push(e.target.innerHTML);
    this.setState({chipData: data});
  }

  populateChipData(){
    var chips = [];
    var nameList = this.state.chipData;
    var len = nameList.length;
    for( var i=0;i<len;i++){
      chips.push(
        <Chip key={i} name={nameList[i]} id={i}/>
      );
    }
    return(
      <div className = "chip-container-div">
        {chips}      
      </div>
    )
  }


  render() {

    var list = this.state.list
        .filter(items => this.state.input === '' || items.includes(this.state.input))
        .map((item, index) => <li key={index} onClick={this.addChip}>{item}</li>);

    return (
      <div className="container">
        <div className="chip-data-container">
          {this.populateChipData()}
        </div>
        <div className="input-container">
          <input type="text" id="input-item" onChange={this.updateInput} onFocus={this.showList}/>
          <label className="input-label" htmlFor="input-item">Start Typing..</label>
        </div>
        <div className="list-container hidden">
          <ul>
            {list}
          </ul>
        </div>
        
      </div>
    );
  }
}
