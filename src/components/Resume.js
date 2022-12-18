import React from 'react';
import './css/resume.css';
import './css/navbar.css';
import project_bg from '../project_svg.svg'
import project_bg_1 from '../youArt-img.png'
import project_bg_2 from '../textEffect-img.png'
import project_bg_3 from '../TextFile-img.png'
import project_bg_4 from '../wudroz-img.webp'
import logo from '../edito logo vec.png';


function Resume() {

  // const window_pos = window.innerHeight;
  // const body_height = document.documentElement.scrollHeight;
  // const window_scroll = window.pageYOffset;

  // const scroller = document.querySelector('.screoller');



  var j = 0;
  function handler_left() {

    const projectBoxContainer = document.querySelector('.project_box_container');

    projectBoxContainer.style.transform = `translateX(${0}px)`;


  }

  function handler_right() {
    const projectBoxContainer = document.querySelector('.project_box_container');

    const pbw = projectBoxContainer.getBoundingClientRect().right;
    const pbo = window.innerWidth;

    projectBoxContainer.style.transform = `translateX(${j - 320}px)`;
    j = j - 320;


    if (pbw <= pbo) {
      j = 0;
      projectBoxContainer.style.transform = `translateX(0px)`;
    }
  }




  return (
    <>
      <div className='resume'>

        <div className='logoContainer'>
          <img src={logo} />
          <div>
            <h1>EDITO</h1>
            <p strong >I LOVE TO MAKE WEBSITE WITH</p>
            <p>GREAT <strong> UI/UX</strong> YOU</p>
            <p><strong style={{ fontWeight: 'bold' }}>NEVER </strong> VISITED BEFORE.</p>
          </div>
        </div>

        <div className='dataContainer'>

          <div className='aboutus' id='aboutus'>
            <div className='info' >
              <h1>ABOUT ME</h1>
              <p >Hello My name is Mohit Bagdi I am a MERN stack developer,  LOVE to create your next Website, Currently learning new Technologies everyday.</p>
              <p>Always belive in making best User experience and Interface websites.</p>

              <h2>Personal</h2>
              <p>I am from one of the most Beautiful city called Lake city, Udaipur Rajasthan. I Love to eat, talk to Ambe Maa and Code and Some time I make digital art try to picturise thoughts.</p>

              <h2>Technical</h2>
              <p>I am studying Bachelor of Technology in Electronics and Communication from Indian Institute of Information Technology Una, Himachal Pradesh.</p>
            </div>
            <div className='scroll-icon'>SCROLL -{'>'} </div>
          </div>

          <div className='education' id='education'>
            <div className='info'>
              <h1>EDUCATION</h1>
              <div className='education-box'>
                <p>Indian Institute of Information Technology, Una</p>
                <p>Bachelor of Technology in Electronics and Communication</p>
                <p> Una, Himachal Pradesh</p>
                <div>
                <i class="fa-solid fa-link"></i>
                <a href="http://iiitu.ac.in/">www.iiitu.ac.in</a>
                </div>
              </div>
            </div> 
            <div className='scroll-icon'>SCROLL -{'>'} </div>
          </div>

          <div className='education' id='experience'>
            <div className='info'>
              <h1>EXPERIENCE</h1>
              <div className='education-box'>
                <p>Medilace</p>
                <p>Web Developer</p>
                <p>Chandigarh, Panjab</p>
                <div>
                <i class="fa-solid fa-link"></i>
                <a href="https://medilance.in/">www.medilance.in</a>
                </div>
              </div>
            </div> 
            <div className='scroll-icon'>SCROLL -{'>'} </div>
          </div>


          <div className='projects' id='projects'>
            <div >
              <h1>PROJECTS</h1>

              <div className='project_box_container'> 
                <div className='project_box'>
                  <h2>Your Art</h2>
                  <div className='project_box_img'><img src={project_bg_1} alt="" /></div>
                  <p>Here users can upload and can edit their art work and can also chat with their community.
                    Most of the section are created using ReactJS and database is done with firebase.</p>
                  <a href="#">View Project</a>
                </div>

                <div className='project_box'>
                  <h2>Text Editor</h2>
                  <div className='project_box_img'><img src={project_bg_2} alt="" /></div>
                  <p>Here user can create basic logo and website have functionality to download them as png or jpeg format.
                    The back-end is done with NodeJs and the database is done with MongoDB.</p>
                  <a href="#">View Project</a>
                </div>

                <div className='project_box'>
                  <h2>Text File Editor</h2>
                  <div className='project_box_img'><img src={project_bg_3} alt="" /></div>
                  <p>Here users can create a word document and can download it as a pdf like Microsoft word. Made with pure HTML, CSS and Static server with ExpressJS. I had used API to convert the HTML to PDF.
                  </p>
                  <a href="#">View Project</a>
                </div>


                <div className='project_box'>
                  <h2>Wudroz</h2>
                  <div className='project_box_img'><img src={project_bg_4} alt="" /></div>
                  <p> Developed front-end of the website for company.
                    Developed amazing user experience and company found it most optimistic CSS, JavaScript code from my work.</p>
                  <a href="#">View Project</a>
                </div> 

              </div>

            </div>


            <div className='scroll-icon'>SCROLL -{'>'} </div>
          </div>

        </div>

        <div className='scroller'>
          <div className='arrow-left' onClick={handler_left}>{'<'}-</div>
          <div className='arrow-left' onClick={handler_right}>-{'>'}</div>
        </div>


      </div>
    </>
  );
}

export default Resume;
