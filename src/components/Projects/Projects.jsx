import React from 'react'

import Card from '../Card1/Card1'
import './Projects.css'
import grocery from '../../assets/grocery.png'
import bicycle from '../../assets/bicycle.png'
import blood from '../../assets/blood.png'
import news from '../../assets/NewShare.png'
import fw from "../../assets/fw.png"
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
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
    // <div id='projects'>
    //   <h1 id='para'>
    //     1+ YEARS EXPERIENCE IN PROJECTS
    //   </h1>
    //   <div className="slider">
    //     <Link
    //       to="https://grocerygo-two.vercel.app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="card-link"
    //     >
    //       <Card
    //         image={grocery}
    //         title="GroceryGo"
    //         description="GroceryGo is a web-based grocery management and ordering platform that enables users to browse products, manage carts, and place orders efficiently."
    //         tech={["NextJS", "MongoDB Atlas", "Tailwind CSS", "Redux", "SocketServer"]}
    //       />
    //     </Link>
    //     <Link
    //       to="https://blood-bridge-link.vercel.app/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="card-link"
    //     >
    //       <Card
    //         image={blood}
    //         title="Blood_Bridge"
    //         description="BloodBridge is a full-stack blood donation management platform that allows users to register, participate in donation events, and request emergency blood."
    //         tech={["ReactJS", "MongoDB Atlas", "Express", "Node JS", "Bootstrap"]}
    //       />
    //     </Link>

    //     <Link
    //       to="https://ridegear.free.nf/?i=1"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="card-link"
    //     >        <Card
    //         image={bicycle}
    //         title="RideGear"
    //         description="Bicycle RideGear is an e-commerce platform for cycling enthusiasts that offers gear, accessories, and apparel with seamless online ordering."
    //         tech={["WordPress", "WooCommerce", "StarterTemplates", "YoastSEO", "SQL"]}
    //       /></Link>
    //     <Link
    //       to="https://ridegear.free.nf/?i=1"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="card-link"
    //     >        <Card
    //         image={bicycle}
    //         title="RideGear"
    //         description="Bicycle RideGear is an e-commerce platform for cycling enthusiasts that offers gear, accessories, and apparel with seamless online ordering."
    //         tech={["WordPress", "WooCommerce", "StarterTemplates", "YoastSEO", "SQL"]}
    //       /></Link>        <Link
    //         to="https://ridegear.free.nf/?i=1"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="card-link"
    //       >        <Card
    //         image={bicycle}
    //         title="RideGear"
    //         description="Bicycle RideGear is an e-commerce platform for cycling enthusiasts that offers gear, accessories, and apparel with seamless online ordering."
    //         tech={["WordPress", "WooCommerce", "StarterTemplates", "YoastSEO", "SQL"]}
    //       /></Link>

    //     <Link
    //       to="https://news-share-link.vercel.app/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="card-link"
    //     ><Card
    //         image={news}
    //         title="NewShare"
    //         description="NewShare is a web-based news aggregation and sharing platform that lets users access, curate, and share news from multiple sources in real time."
    //         tech={["React JS", "Bootstrap", "API"]}
    //       /></Link>
    //   </div>
    // </div>
    <div id="projects">
      <h1 id="para">1+ YEARS EXPERIENCE IN PROJECTS</h1>

      <div className="slider">
        <div className="sliderTrack">
          {/* Use <a> for external links */}



          <div
            className="card-link"
            onClick={() => window.open("https://grocerygo-two.vercel.app/", "_blank")}
            style={{ cursor: 'pointer' }}
          >
            <Card
              image={grocery}
              title="GroceryGo"
              description="GroceryGo is a web-based grocery management and ordering platform that enables users to browse products, manage carts, and place orders efficiently."
              tech={["NextJS", "MongoDB Atlas", "Tailwind CSS", "Redux", "SocketServer"]}
              onClick={() => window.open("https://grocerygo-two.vercel.app/", "_blank")}
            />
          </div>
          <div
            className="card-link"
            onClick={() => window.open("// https://blood-bridge-link.vercel.app/", "_blank")}
            style={{ cursor: 'pointer' }}
          >
            <Card
              image={blood}
              title="Blood_Bridge"
              description="BloodBridge is a full-stack blood donation management platform that allows users to register, participate in donation events, and request emergency blood."
              tech={["ReactJS", "MongoDB Atlas", "Express", "Node JS", "Bootstrap"]}
            />
          </div>

          <div
            className="card-link"
            onClick={() => window.open("https://ridegear.free.nf/?i=1", "_blank")}
            style={{ cursor: 'pointer' }}
          >
            <Card
              image={bicycle}
              title="RideGear"
              description="Bicycle RideGear is an e-commerce platform for cycling enthusiasts that offers gear, accessories, and apparel with seamless online ordering."
              tech={["WordPress", "WooCommerce", "StarterTemplates", "YoastSEO", "SQL"]}
              onClick={() => window.open("https://ridegear.free.nf/?i=1", "_blank")}
            />
          </div>

          <div
            className="card-link"
            onClick={() => window.open("https://news-share-link.vercel.app/", "_blank")}
            style={{ cursor: 'pointer' }}
          >
            <Card
              image={news}
              title="NewShare"
              description="NewShare is a web-based news aggregation and sharing platform that lets users access, curate, and share news from multiple sources in real time."
              tech={["React JS", "Bootstrap CSS", "API","JavaScript"]}
              isWrapped={true}
              onClick={() => window.open("https://news-share-link.vercel.app/", "_blank")}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects
// https://blood-bridge-link.vercel.app/
// https://news-share-link.vercel.app/
// https://ridegear.free.nf/?i=1