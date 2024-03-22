import React from "react";
import { SOCIAL_MEDIA } from "../../utils/constants";

const AboutComponent = () => {
  return (
    <div className="flex justify-center my-16">
      <div className="flex flex-col p-4 m-4 items-center w-8/12 bg-slate-200 rounded-lg border">
        <h2 className="font-bold italic ">I'm Harshal Garade. 🥇</h2>
        <p className="italic">React Developer 🚀</p>
        <p className="italic">FrontEnd Developer 💻</p>
        <p className="italic">Aspiring Full Stack Developer 💯</p>
        <h2 className="font-bold my-4">Follow me on:</h2>

        <ul className="flex flex-row gap-4">
          {SOCIAL_MEDIA.map((element) => (
            <a href={element.link} target="blank">
              <li className="cursor-pointer bg-slate-400 rounded-lg shadow-lg p-4">
                {element.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutComponent;
