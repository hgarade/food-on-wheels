import React from "react";
import Logo from "../../asset/logo.svg";
import SocialMediaComponent from "../SocialMedia/SocialMediaComponent";

const FooterComponent = () => {
  return (
    <div className="bg-slate-200 flex flex-col">
      <div className="p-4 m-4 flex gap-4">
        <img className="w-32 h-32 " src={Logo} />
        <div className="flex flex-col">
          <div className=" font-bold">Food On Wheels</div>
          <div className=" font-semibold">Developed By :- Harshal Garade</div>
          <div className=" font-semibold">
            Contact us :-
            <SocialMediaComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
