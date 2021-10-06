import React from 'react';
import avatarImage from "../assets/IMG_1119.JPG"
function About(){
    return(
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={avatarImage} className="my-2" style={{width: "10%"}} alt="cover image"/>

            <div className="my-2">
                <p>Welcome to my webpage, I am a full stack web-developer. With my freetime I practice and build my skills by working on personal projects or running through older projects from the time I spent with UCLA's Full Stack Coding Bootcamp.</p>
            </div>
        </section>
    )
}

export default About;