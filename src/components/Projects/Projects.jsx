import React from 'react'
import Card from '../Card/Card'
import './Projects.css'
import grocery from '../../assets/grocery.png'
import bicycle from '../../assets/bicycle.png'
import blood  from '../../assets/blood.png'
import news from '../../assets/NewShare.png'
import fw from "../../assets/fw.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
        // markers: 1,
        start: "top 80%",
        end: "top 30%",
      }
    }),
      gsap.from(".slider", {
        y: 100,
        duration: 1,
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".slider",
          scroll: "body",
          scrub: 2,
          // markers: 1,
          start: "top 80%",
          end: "top 30%",
        }
      })
  })
  return (
    <div id='projects'>
      <h1 id='para'>
        1+ YEARS EXPERIENCE IN PROJECTS
      </h1>
      <div className="slider">
        <Card title="Grocery Delivery" image={grocery} />
        <Card title="News Share" image={news} />
        <Card title="Blood Donation Platform" image={blood} />
        <Card title="Bicycle Ecommerce website" image={bicycle} />
      </div>
    </div>
  )
}

export default Projects
