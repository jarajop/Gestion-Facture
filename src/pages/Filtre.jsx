import React from "react";
import "../assets/style/filtre2.css"
import Monument from "../assets/img/monument.png";
import { Icon } from "@iconify/react";

function Filtre() {
  return (
    <div id="card_vehicule" className="pt-4 pl-5">
      <div className="row m-0 p-0  ">
        <div className=" content_card col-lg-3  shadow-sm p-0 mb-0 bg-white ">
          <div className="content_card_vehicule d-flex justify-content-center ">
            {" "}
            <img
              src={Monument}
              alt=""
              className=" img_card_content "
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            />
          </div>
          <div className=" content_details ">
            <div className="content_text_vehicule">
              <p className="text_vehicule  fw-bold text-break pb-2"> Lorem ipsum dolor sit amet consectetur.</p>
            </div>
           <div className=" d-flex justify-content-between p-3">
           <div className="d-flex justify-content-start ">
              <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
              <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
              <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
              <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />
              <Icon icon="mingcute:star-fill" color="#f24873" width="24" height="24" />

             
            </div>
           <div> <span className="content_avis fw-bold ">3 avis</span> </div>
           </div>
            <div className="d-flex justify-content-between p-3">
             <div className="d-flex justify-content-start">
             <Icon icon="entypo:time-slot" color="#f24873" width="28" height="28" />
              <span className="content_hour"> 2h</span>
             </div>
               <div className="">
                 <button className="button_vehicule border-0  ">
                <span className="text_button  ">CHOISIR</span>
              </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtre;


