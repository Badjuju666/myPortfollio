import React from 'react'; 
import screenshotOne from '../../assets/RunBuddy.png'; 


function Portfolio(){

    return(
        <section>
            <h1 id="about">Portfolio</h1>
            <h2>Run Buddy</h2>
        <p>Run Buddy</p>
        <div className="flex=row">
            <img src={screenshotOne} style={{width: "50%"}} alt="Run Buddy Application Screenshot" className="img-thumbnail mx-1"/>
        </div>
        </section>

    )
}

export default Portfolio; 