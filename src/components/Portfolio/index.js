import React, {useState} from 'react';
import Project from '../Project';
// import githubIcon from '../../assets/github.png'
// import screenOne from '../../assets/notetake.jpeg'; 
// import screenTwo from '../../assets/employeetrack.jpeg';
// import screenThree from '../../assets/teamcontact.jpeg';
// import screenFour from '../../assets/weatherdash.jpeg';

function Portfolio(){
    const [projects] = useState([
        {
            name: 'notetake',
            description: 'Write, save and delete notes with this note taking application.',
            link: "https://note-takeszz.herokuapp.com/",
            repo: "https://github.com",
            // imgLink: screenOne
        },
        {
            name: 'employeetrack',
            description: 'Employee tracking app. Plan and organize; department, roles, and employees.',
            repo: "https://github.com/Badjuju666/Employee-Manager",
            // imgLink: screenTwo
        },
        {
            name: 'teamcontact',
            description: 'Construct your team contact webpage; add employees and management with their necessary contact information.',
            repo: "https://github.com/Badjuju666/Team-Contact-Page-Gen",
            // imgLink: screenThree
        },
        {
            name: 'weatherdash',
            description: 'Search for weather forecasts specific to any location and keep track of them for further use.',
            link: "https://badjuju666.github.io/Wheather-dash/",
            repo: "https://github.com/Badjuju666/Wheather-dash",
            // imgLink: screenFour
        },
    ]);
    return (
        <div>
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
//     const {description} = project;
//     const projectList = project.map((project, i) =>
//     <div className="project">
//         <a href={project.github} target="_blank" rel="noreferrer">
//                     <img src={githubIcon}  style={{width: "3%"}}></img>
//           </a>
//         <br/>
//         <span>
//                    <a href={`${project.deployedLink}`} target="_blank" rel="noreferrer">
//                     {project.name}
//                 </a>
//                 <div className="project-bg" style = {{ backgroundImage: `url(${project.imgLink})` }}
//                 onClick={()=>window.open(`${project.deployedLink}`, "_blank")}>
//                     <div className="project-text">
//                         <p>{description}</p>
//                     </div>
//                 </div>
//                 </span>                          
//         <br/>
//     </div>
// )
// console.log(project[1].name)
// return (
//     <div>
//         <div className="flex-row">
//             {projectList}
//         </div>
//     </div>
// );
}

export default Portfolio; 