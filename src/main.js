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
    this.populateList = this.populateList.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.updateChipData = this.updateChipData.bind(this);
  }

  componentDidMount(){
    this.handleBackspace();
  }

  handleBackspace(e){
    var _this = this;
    var flag = false;
    $(window).keydown(function(e){
      if (e.keyCode == 8 || e.keyCode == 46) {
          debugger
        var chipList = _this.state.chipData;
        var len = chipList.length;
        var lastChipName = '';
        if(len)
          lastChipName = chipList[len-1];
        if(!flag){
            $('#chip-'+lastChipName).addClass('highlight');
            flag = !flag;
        }
        else{
            $('#chip-'+lastChipName).addClass('hidden');
            chipList.pop();
            _this.setState({chipData:chipList});
            flag = !flag;                   
        }
      }
	  });
  }

  updateInput(e){
    this.setState({input: e.target.value});
    
  }

  updateChipData(name){
      debugger
    var list = this.state.chipData;
    list.splice( list.indexOf(name), 1 );
    this.setState({chipData:list});
  }


  showList(){
    $('.list-container').removeClass('hidden');
    $('.input-label').addClass('hidden');
  }

  addChip(e){
    var data = this.state.chipData;
    var item = e.target.innerHTML;
    if(!data.includes(item)){
        data.push(item);
        this.setState({chipData: data});
    }
  }

  populateChipData(){
    var chips = [];
    var nameList = this.state.chipData;
    var len = nameList.length;
    for( var i=0;i<len;i++){
      chips.push(
        <Chip key={i} name={nameList[i]} update_chip_data={this.updateChipData} />
      );
    }
    return(
      <div className = "chip-container-div">
        {chips}      
      </div>
    )
  }

  populateList(){
    var listData = [];
    var items = this.state.list;
    for(var i=0;i<items.length;i++){
      var item = items[i].toLowerCase();
      var input = this.state.input;
      if(input)
        input = input.toLowerCase();
      if(item.indexOf(input) >= 0){
        listData.push(
          <li key={i} onClick={this.addChip}>{items[i]}</li>
        )
      } 
    }
    return(
      <div>
        {listData}
      </div>
    )
  }

  render() {

    // var list = this.state.list
    //     .filter(items => this.state.input === '' || items.includes(this.state.input))
    //     .map((item, index) => <li key={index} onClick={this.addChip}>{item}</li>);

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
            {this.populateList()}
          </ul>
        </div>
        
      </div>
    );
  }
}
