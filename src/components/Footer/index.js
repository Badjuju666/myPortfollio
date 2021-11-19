import React from 'react';

function Footer() {
  return (
    <div className="col-sm p-3">
      <footer className="page-footer text-center">
        <div className="col-sm p-3 text-center">
            <a href="https://github.com/Badjuju666" className="github-link btn btn-outline-dark btn-lg" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
// function Footer() {

//   const icons = [
//     {
//       name: "fab fa-github",
//       link: "https://github.com/Badjuju666"
//     },
//     {
//       name: "fab fa-linkedin",
//       link: "https://www.linkedin.com/in/julian-graves-218812a3/"
//     }
//   ]

//   return (
//     <footer className="flex-row px-1">
//       {icons.map(icon =>
//       (
//         <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
//       )
//         )}
//     </footer>
//   );
// }

export default Footer;
