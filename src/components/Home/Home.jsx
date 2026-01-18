import React from 'react'
import "./Home.css"
import { Link } from 'react-scroll'
import man from "../../assets/man.png"
import { TypingEffect } from "react-typing-effect"
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import profile from '../../assets/profile.jpg'
import gsap from 'gsap'
import { Download } from "lucide-react";

function Home() {


  useGSAP(() => {
    let tl1 = gsap.timeline()
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0
    })
    gsap.from(".righthome", {
      x: 200,
      duration: 1,
      opacity: 0
    })
  })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">SUSAN ADHIKARI</div>
          <div className="line3">
            <Typewriter
              words={['WEB DEVELOPER']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          {/* <button>Hire Me</button> */}
          <Link className='button' to="contact" smooth={true} duration={500} activeClass='active' spy={true}><button>Hire me</button></Link>
        </div>
      </div>
      <div className="righthome">
        <img src={profile} alt='' />
      </div>
    </div>
  )
}

export default Home

























{/* <TypingEffect
            text={["WEB DEVELOPER","DATA ANALYST","EDITOR"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            cursor='_'/> */}