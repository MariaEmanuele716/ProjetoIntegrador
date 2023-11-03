import React from "react";
import "../App.css";
import { Button, ConfigProvider } from "antd";
import {
  BehanceOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";
import Image from "../../src/Assets/Home/Background.jpg";

const Inicio = () => (
  <div
    style={{
      display: "flex",
      height: "91vh",
      justifyContent: "center",
      padding: 80,
      background: `url("${Image}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    {/* <img className='' src={Image} alt="" /> */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        paddingTop: 80,
      }}
    >
      <div className="profile-details-name">
        <span className="primary-text" style={{ color: "white" }}>
          Olá, meu nome é Emanuele
        </span>
      </div>
      <div className="profile-details-role">
        <span className="primary-text" style={{ color: "white", fontSize: 30 }}>
          Eu sou uma{" "}
          <span className="highlighted-text" style={{ color: "#702DFF" }}>
            ILUSTRADORA
          </span>
        </span>
      </div>
      <div
        className="profile-options"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "flex-start",
        }}
      >
        <Button style={{ backgroundColor: "#fff" }} shape="round">
          Leia mais &gt;
        </Button>
        <div className="profile-options">
          <BehanceOutlined style={{ fontSize: "30px", margin: 5 }} />
          <InstagramOutlined style={{ fontSize: "30px", margin: 5 }} />
          <LinkedinOutlined style={{ fontSize: "30px", margin: 5 }} />
          <DribbbleOutlined style={{ fontSize: "30px", margin: 5 }} />
        </div>
      </div>
    </div>
    <div className="profile-picture">
      <div className="profile-picture-background">
        <div className="colz-icon"></div>
      </div>
    </div>
  </div>
);

export default Inicio;
