import React from 'react';
import image from '/Users/nealephilippe/Desktop/project/Myreact-portfolio/my-portfolio/src/images/me.png';

function About() {
    return(
        
        <section className="container">
            <h2 className="top-title">Neale Philippe</h2>
    <div className="row">
    <img src={image} alt="me" height={400} width={400}/>
   <p>
       My name is Neale Philippe and now to tell you abit about myself, i have been involved in administration operations for approx 20+ years now, i have been able to learn different skills in a wide range of areas
            such as but not limited to; Data entry and cleaning, Working with Zoho analytics dashboards, designing various promotional material, authorising payments, computer IT, just to name a few.
            I decided its time to learn a new skill and always have been interested in web design/development. So please feel free to look at my portfolio to see some of my developing work.
        For further information on myself/work fell free to visit my github</p>
 </div>
 </section>
    )};

    export default About;