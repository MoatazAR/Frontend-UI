import React, { Component } from "react";
import './CSS/matches.css';
import plant from './pics/plant.png';
import icon1 from './pics/search.png';
import icon2 from './pics/notification.png';
import icon3 from './pics/view.png';
import icon4 from './pics/rewind.png';
import icon5 from './pics/group.png';
import Profiles from './profiles.json';
import { ProfileArray } from './profiles.js';
import { GroupsArray } from './groups.js';

class Matches extends Component {
    state = {
        accounts_on_display: 'profile',
        description: 'Top Live Matches'
    }
    groupSelection = () => {
        const description = 'Communities';
        const accounts_on_display = 'groups';
        this.setState({ description, accounts_on_display })
    }
    handleReset = () => {
        const description = 'Top Live Matches';
        const accounts_on_display = 'profile';
        this.setState({ description, accounts_on_display })
    }
    render(){
        let display = this.state.accounts_on_display;
        let table = '';
        if (display === 'profile') {
            table =  ProfileArray.map(profile => (
                <tr><td><div className='imgcontainer'><img  src={profile.imageurl} className='profilepic'/></div> <div id='tagsdiv'>{profile.tags.map(tag => (<p className='tags'>{tag}</p>))}<p></p></div> <div className='datacontainer'><p className='profilename'>{profile.name}</p></div></td></tr>
            ))
        } else if (display === 'groups'){
            table =  GroupsArray.map(profile => (
                <tr><td><div className='imgcontainer'><img  src={profile.imageurl} className='profilepic'/></div> <div id='tagsdiv'>{profile.tags.map(tag => (<p className='tags'>{tag}</p>))}<p></p></div> <div className='datacontainer'><p className='profilename'>{profile.name}</p></div></td></tr>
            ))
        }
        return (
            <div id='maindiv'>
                    <div id='div1'>
                            <img src={icon1} className='topIcons'/>
                            <img src={plant} id='plant'/>
                            <img src={icon2} className='topIcons'/>
                            <p></p>
                    <img src={icon3} className='bottomIcons' onClick={this.handleSearch}/>
                    <img src={icon4} className='bottomIcons' onClick={this.handleReset}/>
                    <img src={icon5} className='bottomIcons' onClick={this.groupSelection}/>
                    </div>
                <div id='div-2'>
                    <h1 id='pname'>{this.state.description}</h1>
                    <div id='filterdiv'>
                        <h1 id='filter' onClick=''>Filter</h1>
                    </div>
                </div>
                <div id='div3'>
                    <table>
                        { table }
                    </table>
                </div>
            </div>
        );
    }
}

export default Matches;