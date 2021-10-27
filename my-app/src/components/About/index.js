import React from 'react';
import avatar from '../../assets/Selfie/itme.jpg';

function About(){
    return(
        <section classname="my-5">

                <h1 id="about">About Me</h1>
            
                    <img classname="my-2" src={avatar} style={{width: "20%"}} alt="cover avatar"/>

            <div className="my-2">
                <p>Welcome to my webpage, I am a full stack web-developer. With my freetime I practice and build my skills by working on personal projects or running through older projects from the time I spent with UCLA's Full Stack Coding Bootcamp.</p>
            </div>
        </section>
    )
}

export default About;