import React from 'react'

const About = () => {
  return (
    <div className='big-about-div'>
        <div className='about-acm-div'>
            <h2>About ACM</h2>
            <div className="acm-info-img">
                <img src="./Images/acm.png" className='acm'></img>
                <p className='acm-info'>
                The Association for Computing Machinery (ACM) is a US-based international learned society for computing. It was founded in 1947 by Richard Hamming and is the world's largest scientific and educational computing society. The ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members as of 2019. Its headquarters are in New York City.
The ACM is an umbrella organization for academic and scholarly interests in computer science (informatics). Its motto is "Advancing Computing as a Science & Profession".
                </p>
            </div>
        </div>

        <div className='about-acm-div' >
            <h2>About JSPM RSCOE ACM Student Chapter</h2>
            <div className="acm-info-img" id='rscoe-about'>
                <p className='acm-info'>
                Our ACM serves a variety of purposes. Its goal is to promote ethical computing, improve the state of the art, and provide assistance to individuals who work in the subject. It is nothing but the act of turning new and imaginative ideas into reality. It is the world's largest professional computer association, with a global reach. Through strong leadership, advocacy of the highest standards, and acknowledgment of technological accomplishment, Our ACM promotes the computer profession's collective voice.
      ACM's "neighborhoods" are called chapters. ACM is a member-driven and volunteer-led organization. ACM is kept active by a variety of activities, such as organizing conferences, editing journals, evaluating papers, and serving on boards and committees, to name a few. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.

                </p>
                <img src="./Images/acmrscoelogo.png" className='acm'></img>
            </div>
        </div>
    </div>
  )
}

export default About