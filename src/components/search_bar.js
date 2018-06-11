import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class SearchBar extends Component{
    //every javascript object calls the first the constructor and we also need the super in this otherwise it 
    //throws an error
    constructor(props){
        super(props);
        this.state = {term:''};
    };
render(){
    return (
    <div className = "search-bar">
        <input
            value = {this.state.term}
            onChange ={event => this.onInputChange(event.target.value)}
        />
    </div>
    );
 };
 onInputChange(term)
 {
     this.setState({term});
     this.props.onSearchTermChange(term);
 }
};

export default SearchBar;