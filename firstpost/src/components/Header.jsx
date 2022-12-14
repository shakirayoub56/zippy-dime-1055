import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { SideBar } from "./Sidebar";
import { Searchbar } from "./Searchbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerbox}>
        <SideBar />

        <Link to="/">
          {" "}
          <img
            style={{ width: "150px", height: "50px", marginLeft: "300px" }}
            src="https://www.firstpost.com/static/images/fp-desk-logo.png"
          />
        </Link>

        <div className={styles.icon}>
          <a href="https://www.facebook.com/firstpostin">
            <img
              style={{ marginTop: "13px", width: "25px", height: "25px" }}
              src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
            />
          </a>

          <a href="https://twitter.com/firstpost">
            <img
              style={{ marginTop: "13px", width: "25px", height: "25px" }}
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            />
          </a>

          <a href="https://www.instagram.com/firstpost/">
            <img
              style={{ marginTop: "13px", width: "25px", height: "25px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            />
          </a>

          <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured">
            <img
              style={{
                marginTop: "13px", width: "25px", height: "25px",
                borderRadius: "50px",
              }}
              src="https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png"
            />
          </a>
        </div>

        <div style={{height:"35px",width:"2.5px",backgroundColor:"gray",marginTop:"8px",borderRadius:"50px"}}></div>

        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
