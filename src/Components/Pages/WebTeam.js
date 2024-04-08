import React from "react";
import { useEffect } from "react";
//import "../App.css"
import Aos from "aos";
import "aos/dist/aos.css";
import ProfileCard from "./../ProfileCard";
const WebTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="teamheader-web">
        <p>Web Team</p>
        <h6 className="p">
          Technology passionates, who grind to keep the ACM website updated and
          running smoothly equipped with Modern Technologies and talent like
          great working standards and team work.
        </h6>
      </div>
      <div className="profile-card-div">
        <ProfileCard 
            imageLink={"./Images/team/abhishekbhonde.jpg"}
            linkedinLink={"https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/"}
            name={"Abhishek Bhonde"}
        />
        <ProfileCard 
            imageLink={"Images/team/sumitkaranjkar.JPG"}
            linkedinLink={"https://www.linkedin.com/in/sumit-karanjkar-6285a0229/"}
            name={"Sumit Karanjkar"}
        />
        <ProfileCard 
            imageLink={"./Images/team/abhishekdhanke.png"}
            linkedinLink={"https://www.linkedin.com/in/abhishek-dhanke-226354216/"}
            name={"Abhishek Dhanke"}
        />
        <ProfileCard 
            imageLink={"./Images/team/sahilkandhare.jpg"}
            linkedinLink={"https://www.linkedin.com/in/sahilk027/"}
            name={"Sahil Kandhare"}
        />
        <ProfileCard 
            imageLink={"./Images/utkarsh.png"}
            linkedinLink={"https://www.linkedin.com/in/utkarsh-jaulkar"}
            name={"Utkarsh Jaulkar"}
        />
      </div>
    </div>
  );
};

export default WebTeam;
