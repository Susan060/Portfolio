import React, { useRef } from 'react'
import './Footer.css'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'  // Import ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, useGSAP)

function Footer() {
    let tag = useRef()
    let details = useRef()
    const footerRef = useRef()  // Add a ref for the entire footer

    useGSAP(() => {
        // Create a timeline with ScrollTrigger
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: tag.current,  // Trigger when this element enters viewport
                start: "top 90%",      // Start animation when top of element is 80% from top of viewport
                end: "top 80%",        // End animation when top of element is 30% from top of viewport
                scrub: 1,              // Smooth scrubbing animation
                // markers: true,         // Show markers for debugging (remove for production)
                // toggleActions: "play none none reverse" // Alternative to scrub
            }
        })

        // Add animations to timeline
        tl.from(tag.current, {
            y: -100,
            duration: 1,
            opacity: 0
        })
        .from(details.current.children, {  // Target all child links
            y: 100,
            duration: 1,  // Fixed typo: was "duratiion"
            opacity: 0,
            stagger: 0.2  // Stagger the icons for better effect
        }, "-=0.5")  // Start 0.5 seconds before previous animation ends

    }, { scope: footerRef })  // Scope to footer for cleanup

    return (
        <>
            <footer ref={footerRef}>
                <div className='tag' ref={tag}>
                    <h3>Crafting modern web experiences with clean code.</h3>
                </div>
                <div className='details' ref={details}>
                    <a href="https://www.facebook.com/sushant.adhikari.927?rdid=XjD95LQLz3k0hMQ2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DphytXrJK%2F#" style={{ color: '#ffff' }}>
                        <Facebook className='face' />
                    </a>
                    <a href="https://www.instagram.com/sushant.560?igsh=NGJieG91ZWE3d3pu" style={{ color: '#ffff' }}>
                        <Instagram className='insta' />
                    </a>
                    <a href="https://github.com/Susan060" style={{ color: '#ffff' }}>
                        <Github className='git' />
                    </a>
                    <a href="https://www.linkedin.com/in/susan-adhikari-4a084936b" style={{ color: '#ffff' }}>
                        <Linkedin className='link' />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer