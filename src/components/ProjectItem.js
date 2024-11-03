import React from 'react';

function ProjectItem ({project , about, technologies}){
 
  const { name, about, technologies } = project;
  return (
    <div>
      <h2>{name}</h2>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span> 
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
