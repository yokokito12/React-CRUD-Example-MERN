import React, { Component } from 'react';
import { Container } from 'react-materialize';
import axios from 'axios';

export default class CreateProfile extends Component {

    constructor(props){
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonDuty = this.onChangePersonDuty.bind(this);
        this.onChangePersonResumo = this.onChangePersonResumo.bind(this);
        this.onChangePersonExperience = this.onChangePersonExperience.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    
        this.state={
            person_name: '',
            person_Duty: '',
            person_Resumo: '',
            person_Experience: '',
        }
    }
    onChangePersonName(e){
        this.setState({
            person_name: e.target.value
        });
    }
    onChangePersonDuty(e){
        this.setState({
            person_Duty: e.target.value
        });
    }
    onChangePersonResumo(e){
        this.setState({
            person_Resumo: e.target.value
        });
    }
    onChangePersonExperience(e){
        this.setState({
            person_Experience: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
    const obj = {

      person_name: this.state.person_name,
      person_Duty: this.state.person_Duty,
      person_Resumo: this.state.person_Resumo,
      person_Experience: this.state.person_Experience
    };
    axios.post('http://localhost:4000/profile/add', obj)
        .then(res => console.log(res.data));
    
        /*alert(`The Values are 
        ${this.state.person_name}, 
        ${this.state.person_Duty}, 
        ${this.state.person_Resumo}, 
        ${this.CreateProfile}`)*/

        this.setState({
            person_name: '',
            person_Duty: '',
            person_Resumo: '',
            person_Experience: ''
        })
    }

    render() {
        return (
            <Container>
            <div style={{marginTop: 100}}>
            <h3>Add New Profile</h3>
            <form onSubmit={this.onSubmit} className='white darken-2 white-text'>
                <div className="form-group">
                    <label>Full Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      style={{ 
                      width: "500px",
                    }}/>
                </div>
                
                <div class="custom-file mb-3">
                    
                    <input type="file" 
                    name="file" id="file" 
                    class="custom-file-input"/>

                    <label for="file" 
                    class="custom-file-label">
                    Choose File</label>
                </div>
            
                <div className="form-group">
                    <label>Function: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.person_Duty}
                      onChange={this.onChangePersonDuty}
                      />
                </div>
                <div className="form-group">
                    <label>Resume: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.person_Resumo}
                      onChange={this.onChangePersonResumo}
                      />
                </div>
                   <div className="form-group">
                    <label>Experience: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.person_Experience}
                      onChange={this.onChangePersonExperience}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Profile" className="btn btn-primary"/>
                </div>
            </form>
        </div>
             </Container>
        )
    }
}