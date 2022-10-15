import React from "react";
import History from "./history/History.js";
import pic from '../../getflixLogo.png';
import './profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
     <img className='profile-logo' alt='logo' src={pic} ></img>
    <button className='profile-backBtn' onClick={() => {props.logout()}}> Home </button>

      <History watchedMovies={props.watchedList}/>
    </div>
  );
}

export default Profile;