import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { postNewData } from '../../store/signup/actions'

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname : '',
            email : '',
            passowrd: '',
        };
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submit = (e) =>{
        e.preventDefault();
        const postData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            passowrd: this.state.passowrd
        };
        this.props.postNewData(postData);
        this.setState({
            firstname:'',
            lastname : '',
            email : '',
            passowrd: '',
        })
        
        // fetch('http://localhost:3000/Users',{
        //     method: 'POST',
        //     headers: {
        //         'Content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(postData)
        // }).then(res => res.json())
        // .then(data => console.log(data));
    }

    render(){
        return(
            <div className="post-container">
                <form className="form" onSubmit={this.submit}>
                    <input 
                        type="text" 
                        required 
                        name="firstname"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    /><br></br>
                    <input 
                        type="text" 
                        required 
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    /><br></br>
                    <input 
                        type="text" 
                        required 
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /><br></br>
                    <input 
                        type="password" 
                        required 
                        name="passowrd"
                        value={this.state.passowrd}
                        onChange={this.handleChange}
                    /><br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}


export default connect(null,{postNewData})(SignUp);