import React, {Component} from 'react';
import { Link } from "react-router-dom"


class Viewleads extends Component{
    constructor(props) {
        super(props)
        this.state={
            contact: this.props.info.contact,
            lead: this.props.info.lead,
            address: this.props.info.address,
            id: this.props.info.id,
            display: false,
            newLead: this.props.info.lead,
            newAddress: this.props.info.address,
            newContact: this.props.info.contact
        }
    }
    // updateContact = e => {
    //     this.setState({ [this.state.contact]: this.contact })
    //     console.log(this.contact)
    // }

    updateContact = () => {
        this.props.updateContact(this.props.info.id, this.state.newLead, this.state.newAddress, this.state.newContact);

    }

    leadChange = ({target}) => {
        console.log(this.name)
        this.setState({ [target.name]: target.value});
    }

    toggleDisplay = () => {
        this.setState({
            display: !this.state.display
        })
    }
    updateContact = () => {
       const updatedInfo = {
           newLead: this.state.newLead,
           newAddress: this.state.newAddress,
           newContact: this.state.newContact,
           id: this.state.id
       }
        this.props.updateContact(updatedInfo);
    }
    
    render(){
        if(this.state.display === true) {
            return (
                <div>
                   
                    <h5>Contact Name:</h5>
                    {this.state.contact}<br />
                    <h5>Lead Name:</h5> 
                   {this.state.lead}<br />
                    <h5>Address:</h5>
                    {this.state.address} <br />
                    
                <button onClick={this.toggleDisplay}>Update Contact</button>

                <div>
                <button onClick={() => this.props.onDelete(this.props.info.id)}>Delete</button>
                </div>
                
                    <form >
                        <label >Contact Name:</label>
                        <input type="text" name="newContact" onChange={this.leadChange} />
                        <label >Lead Name:</label>
                        <input type="text" name="newLead" onChange={this.leadChange} />
                        <label >Address:</label>
                        <input type="text" name="newAddress" onChange={this.leadChange} />
                        <button type="button" onClick={this.updateContact}>Submit</button>
                    </form>
                </div>
            )
        }
        return(
            <div>
                
                   <h5>Contact Name:</h5> 
                   {this.state.contact}<br />
                    <h5>Lead Name:</h5>
                    {this.state.lead}<br />
                    <h5>Address:</h5>
                    {this.state.address} <br />

                <button type="button" onClick={this.toggleDisplay}>Update Contact</button>
                <div>

                <div>
                <button onClick={() => this.props.onDelete(this.props.info.id)}>Delete</button>
                </div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}


export default Viewleads;