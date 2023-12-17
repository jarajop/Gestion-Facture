import React from "react";
import "../assets/style/filtre2.css"
import Vehicule from "../assets/img/vue_aerienne_plage.jpg";
import { Icon } from "@iconify/react";

function Filtre() {
  return (
    <div id=" card_vehicule" className="pt-4 pl-5">
      <div className="row m-0 p-0  ">
        <div className=" content_card col-lg-3  shadow-sm p-0 mb-0 bg-white">
          <div className="content_card_vehicule d-flex justify-content-center ">
            {" "}
            <img
              src={Vehicule}
              alt=""
              className=" img_card_content "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
          </div>
          <div className=" content_details">
            <div className="content_text_vehicule">
              <p className="text_vehicule "> Renault Dauster</p>
            </div>
            <div className="d-flex justify-content-start pt-3 pl-2 ">
              <Icon
                icon="mdi:user-group"
                color="#f24873"
                width="18"
                height="18"
              />
              <div className="content_max justify-content-end px-3 ">
                {" "}
                Max 4 personnes
              </div>
            </div>
            <div className="d-flex justify-content-start pt-1 pl-2">
              <Icon
                icon="fontisto:suitcase"
                color="#f24873"
                width="18"
                height="18"
              />{" "}
              <div className="content_max  px-3"> 2(23kg) 2(10kg)</div>
            </div>
            <div className="d-flex justify-content-between pl-2 pt-4">
              <p className=" content_max pt-1"> 60000 XOF</p>
              <button className="button_vehicule border-0 mr-4 mb-2 ">
                <span className="text_button  ">CHOISIR</span>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtre;


