import React from "react";

interface ISkill {
  urlImage: string;
  name: string;
}

const Skill = ({ urlImage, name }: ISkill) => {
  return (
    <div key={name}>
      <figure>
        <img src={urlImage} alt={name} />
      </figure>
      <span>{name}</span>
    </div>
  );
};

export default Skill;
