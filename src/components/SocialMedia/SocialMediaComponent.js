import React from "react";
import { SOCIAL_MEDIA } from "../../utils/constants";

const SocialMediaComponent = () => {
  return (
    <ul className="flex flex-wrap gap-4 p-4">
      {SOCIAL_MEDIA.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="blank">
            <img className="w-16 h-16" src={item.logo} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaComponent;
