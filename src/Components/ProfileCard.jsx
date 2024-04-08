import React from "react";
import { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function ProfileCard(props){
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    return (
      <>
        <div className="profile-card" data-aos="zoom-out">
          <div className="photo-div">
            <img
              className="profile-photo"
              src={props.imageLink}
            ></img>
          </div>
          <div className="total-info">
            <div className="photo-info-div">
              <a href={props.linkedinLink}>
                <ion-icon
                  name="logo-linkedin"
                  style={{ padding: 0, fontSize: 25, color: "cornflowerblue" }}
                ></ion-icon>
              </a>
              <p className="name">{props.name}</p>
            </div>
            <p className="post">{props.post}</p>
          </div>
        </div>
      </>
    );
}

export default ProfileCard;