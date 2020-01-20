import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

  constructor(props) {
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


  componentDidMount() {
      axios.get('http://localhost:4000/profile/edit/'+ this.props.match.params.id)
          .then(response => {
              this.setState({ 
      
      person_name: this.state.person_name,
      person_Duty: this.state.person_Duty,
      person_Resumo: this.state.person_Resumo,
      person_Experience: this.state.person_Experience

       });
          })
          .catch(function (error) {
              console.log(error);
          })
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
        e.preventDefault();;


    const obj = {

      person_name: this.state.person_name,
      person_Duty: this.state.person_Duty,
      person_Resumo: this.state.person_Resumo,
      person_Experience: this.state.person_Experience

    };
    axios.post('http://localhost:4000/profile/update/' + this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/HomeView');
  }
 
  render() {
    return (
                 <div style={{marginTop: 100}}>
            <h3>update</h3>
            <form onSubmit={this.onSubmit} className='white darken-2 white-text'>
                <div className="form-group">
                    <label>Full Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
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
                    <input type="submit" value="update" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}