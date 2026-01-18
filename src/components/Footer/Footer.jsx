import React, { useRef } from 'react'
import './Footer.css'
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function Footer() {
    let tag=useRef()
    let details=useRef()

    useGSAP(()=>{
        let tl=gsap.timeline()
        tl.from('footer div h3',{
            y:-100,
            duration:1,
            opacity:0
        }),
        tl.from('footer div a',{
            y:100,
            duratiion:1,
            opacity:0
        })
    })
    return (
        <>
            <footer>
                <div className='tag' ref={tag}>
                    <h3>Crafting modern web experiences with clean code.
                    </h3>
                </div>
                <div className='details' ref={details}>
                    <a href="https://www.facebook.com/sushant.adhikari.927?rdid=XjD95LQLz3k0hMQ2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DphytXrJK%2F#" style={{ color: '#ffff' }}> <Facebook className='face' /></a>
                    <a href="https://www.instagram.com/sushant.560?igsh=NGJieG91ZWE3d3pu" style={{ color: '#ffff' }}> <Instagram className='insta' /></a>
                    <a href="https://github.com/Susan060"style={{ color: '#ffff' }}><Github className='git' /> </a>
                    <a href="https://www.linkedin.com/in/susan-adhikari-4a084936b"style={{ color: '#ffff' }}><Linkedin className='link' /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer
