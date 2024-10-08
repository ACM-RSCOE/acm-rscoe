import React from "react";
import { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="profile-card-div">
        <ProfileCard 
            imageLink={"Images/team/Anis.jpg"}
            linkedinLink={"https://www.linkedin.com/in/pavan-kulkarni-77507b253/"}
            name={"Anis"}
            post={"Chair"}
        />
        <ProfileCard 
            imageLink={"Images/team/sumitkaranjkar.JPG"}
            linkedinLink={"https://www.linkedin.com/in/sumit-karanjkar-6285a0229/"}
            name={"Sumit Karanjkar"}
            post={"Vice Chair"}
        />
        <ProfileCard 
            imageLink={"./Images/team/vaibhavikulkarni.jpg"}
            linkedinLink={"https://www.linkedin.com/in/vaibhavikulkarni25/"}
            name={"Vaibhavi Kulkarni"}
            post={"Secretary"}
        />
        <ProfileCard 
            imageLink={"./Images/team/AnandDhadiwal.jpeg"}
            linkedinLink={"https://www.linkedin.com/in/anand-dhadiwal-027076231/"}
            name={"Anand Dhadiwal"}
            post={"Treasurer"}
        />
        <ProfileCard 
            imageLink={"./Images/team/abhishekbhonde.jpg"}
            linkedinLink={"https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/"}
            name={"Abhishek Bhonde"}
            post={"Web Team Head"}
        />
        <ProfileCard 
            imageLink={"./Images/team/DheemahiGupta.jpeg"}
            linkedinLink={"https://www.linkedin.com/in/dheemahi-g-89774424b/"}
            name={"Dheemahi Gupta"}
            post={"Design Team Head"}
        />
        <ProfileCard 
            imageLink={"./Images/team/PratikKatkar.jpeg"}
            linkedinLink={"https://www.linkedin.com/in/pratik-katkar-74609a24a/"}
            name={"Pratik Katkar"}
            post={"Documentation Team Head"}
        />
        <ProfileCard 
            imageLink={"./Images/team/YashLondhe.jpeg"}
            linkedinLink={"https://www.linkedin.com/in/yashlondhe-/"}
            name={"Yash Londhe"}
            post={"Social Media Team Head"}
        />
        <ProfileCard 
            imageLink={"./Images/team/artik.png"}
            linkedinLink={"https://www.linkedin.com/in/arti-kalhapure-93869424b/"}
            name={"Arti Kalahapure"}
            post={"Documentation Team"}
        />
      </div>
    </>
  );
};

export default Profile;
