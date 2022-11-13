import React from 'react'


interface IProject {
    urlImage: string;
    name: string;
    urlRepo: string;
  }


const Project = ({name, urlImage, urlRepo}:IProject) => {
  return (
    <div>
    <figure>
        <a href={urlRepo}>
            <img className="mt-2" src={urlImage} alt={name}/>
        </a>
    </figure>
    <span>
      {name}
    </span>
</div>
  )
}

export default Project