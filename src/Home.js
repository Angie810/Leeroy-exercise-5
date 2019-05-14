import React ,{Component}from 'react';
import "@kenshooui/react-multi-select/dist/style.css";
import MultiSelect from "@kenshooui/react-multi-select";

class Home extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            items:[
                {id:0,label:"Seattle: Amazon"},
                {id:1,label:"Cupertino: Apple"},
                {id:2,label:"Menlo Park: Facebook"},
                {id:3,label:"Mountain View: Google"},
                {id:4,label:"Sundsvall: Leeroy"},
                {id:5,label:"Palo Alto: Tesla"}
    ],
    selectedItems:[]};
    }
  
    handleChange(selectedItems) {
        this.setState({ selectedItems });
      }  
    
    render(){
        const { items, selectedItems } = this.state;
        return(

        <MultiSelect items={items} selectedItems={selectedItems} onChange={this.handleChange}/>

      );
    }
}

export default Home;