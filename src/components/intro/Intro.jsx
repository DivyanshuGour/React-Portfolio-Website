import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            strings: ['Developer', 'Designer', 'Enthusiast' ] });
    }, [])

    return (
        <div className="intro" id="intro">
          <div className="left">
              <div className="imgContainer">
                  <img src="assets/picsquare.jpeg" alt="" />
              </div>
          </div>
          <div className="right">
              <div className="wrapper">
                  <h2>Hi There, I'm</h2>
                  <h1>Divyanshu Gour</h1>
                  <h3>Freelance <span ref={textRef}></span></h3>
              </div>
              <a href="#portfolio">
                  <h1>Down</h1>
              </a>
              </div>  
        </div>
    )
}
