import React, { Component } from "react";
import './CSS/profile.css';
import ContentEditable from 'react-contenteditable';
import brain from './pics/brain-profile.png';
import icon1 from './pics/search.png';
import icon2 from './pics/notification.png';
import icon3 from './pics/view.png';
import icon4 from './pics/rewind.png';
import icon5 from './pics/group.png';
import Form from "./Commons/form";
import Select from './Commons/select';


class Profile extends Component {

    state = {
        namevalue: 'Name',
        nationalities: ['  Nationality','Australia', 'Brazil', 'Canada', 'Denmark', 'Egypt', 'France', 'Germany', 'Italy', 'Japan', 'Kuwait', 'Lithuania', 'Mongolia', 'Noway', 'Oman', 'Peru', 'Qatar', 'Russia', 'Spain', 'Turkey', 'United States', 'Venezuela'],
        universities: ['  University', 'UBC', 'UCLA', 'U of T', 'UC Berkeley', 'UPenn', 'UC Irvine', 'NYU'],
        data: ['Name', 'Gender', 'Nationality', 'Age', 'Belief-System', 'Occupation', 'University'],
        dataFields: {name: '<input placeholder = "  Name" class = "inputFields" id="nameValue" />', 
        gender: '<select class = "inputFields" > <option default value="Gender">Gender</option> <option value="Male">Male</option> <option value="Female">Female</option> </select>',
        age: '<input placeholder = "  Age" type="Number"  class = "inputFields" />',
        occupation: '<input placeholder = "  Occupation"  class = "inputFields" />',
        beliefsystem: '<select class = "inputFields" > <option default value="Gender">Belief System</option> <option value="christianity">Christianity</option> <option value="islam">Islam</option> <option value="buddhism">Buddhism</option>  <option value="judiaism">Judaism</option> </select>',},
        bool: true
    }
    handleChange = (e) => {
    }
    handleReset = () => {
        const name = {...this.state.name};
        const occupation = {...this.state.occupation};
        const age = {...this.state.age};
        const gender = {...this.state.data.gender};
        const beliefsystem = {...this.state.data.beliefsystem};
        const nationalities = [...this.state.nationalities];
        const universities = [...this.state.universities];
        const bool = !(this.state.bool);
        {{this.setState({name, occupation, age, gender, beliefsystem, nationalities, universities, bool})}}
    }
    render(){
        let bolean = this.state.bool;
        let nation = '';
        let uni = '';
        if (bolean) {
        nation = <div><Select name='inputFields' options= {this.state.nationalities} placehold='Nationality'/></div>;
        uni = <div><Select name='inputFields' options= {this.state.universities} placehold='University'/></div>;
        } else {
          nation = <Select name='inputFields' options= {this.state.nationalities} placehold='Nationality'/>;
          uni = <Select name='inputFields' options= {this.state.universities} placehold='University'/>;
        }
        return (
            <div id='maindiv'>
                <div id='div1'> 
                    <img src={icon1} className='topIcons'/>
                    <img src={brain} id='brain'/>
                    <img src={icon2} className='topIcons'/>
                    <p></p>
                    <img src={icon3} className='bottomIcons'/>
                    <img src={icon4} className='bottomIcons'  onClick={this.handleReset}/>
                    <img src={icon5} className='bottomIcons'/>
                </div>
                <div id='div2'>
                    <div id='div2-1'>
                    <ContentEditable 
                        html = {this.state.dataFields.name}
                        onChange = {this.handleChange}
                    />
                    <ContentEditable 
                        html = {this.state.dataFields.gender}
                        onChange = {this.handleChange}
                    />
                    {nation}
                    <ContentEditable 
                        html = {this.state.dataFields.age}
                        onChange = {this.handleChange}
                    />
                    <ContentEditable 
                        html = {this.state.dataFields.beliefsystem}
                        onChange = {this.handleChange}
                    />
                     <ContentEditable 
                        html = {this.state.dataFields.occupation}
                        onChange = {this.handleChange}
                    />
                    {uni}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Profile;