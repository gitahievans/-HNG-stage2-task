import React from "react";

function Profile() {
  return (
    <div className="pfl-container">
      <div className="pfl_details" align="center">
        <img
          id="profile_img"
          src="https://images.pexels.com/photos/904332/pexels-photo-904332.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="me"
        />
        <p id="twitter">
          <span>Twitter: </span>
          <span>gitahievans</span>
        </p>
        <p id="slack">
          <span>Slack: </span>
          <span>gitahievans</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
