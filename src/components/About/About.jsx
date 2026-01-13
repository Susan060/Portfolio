import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import next from '../../assets/next.png'
import wordpress from '../../assets/wordpress.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    }),
      gsap.from(".line", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".line",
          scroll: "body",
          scrub: 2,
          // markers: true,
          start: "top 60%",
          end: "top 30%"
        }
      }),
      gsap.from(".aboutdetails h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails h1",
          scroll: "body",
          scrub: 2,
          // markers: true,
          start: "top 60%",
          end: "top 30%"
        }
      })
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 100%",
        end: "top 30%"
      }
    })
    gsap.from(".rightabout ", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 30%"
      }
    })
  })
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span> : SUSAN ADHIKARI
              </li>
              <li>
                <span>Age</span> : 22 YEARS
              </li>
              <li>
                <span>Gender</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : NEPALI, ENGLISH, HINDI
              </li>
            </ul>
          </div>
          <div className="eductaion">
            <h1>Education</h1>
            <ul>
              <li>
                <span>UNIVERSITY</span> : Tribhuvan University, Nepal
              </li>
              <li>
                <span>DEGREE</span> : BIM(Bachelor Of Information Management)
              </li>
              <li>
                <span>DURATION</span> : 2021-PRESENT
              </li>
              <li>
                <span>STATUS</span> : Ongoing
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK WEB DEVELOPMENT
              </li>
              <li>
                NEXT JS
              </li>
              <li>
                WORDPRESS
              </li>
              <li>
                MICROSOFT EXCEL / POWER BI
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPMENT" image={mern} />
        <Card title="NEXT JS" image={next} />
        <Card title="WORDPRESS" image={wordpress} />
      </div>
    </div>
  )
}

export default About
