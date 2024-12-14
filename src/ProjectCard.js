import React from "react";

const ProjectCard = ({ title, description, img_src }) => {
  return (
    <div className="m-2 p-2 w-72 shadow-lg dark:bg-neutral-100 dark:text-neutral-800 hover:shadow-2xl rounded-lg ">
      <img
        className="h-44 w-full rounded-lg"
        src={img_src}
        loading="lazy"
        alt="thumbnail"
      />
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="italic h-24 overflow-auto">{description}</div>
    </div>
  );
};

export default ProjectCard;
