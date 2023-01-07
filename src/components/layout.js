import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import './styles.css';
// import Image from './image.js';
import { useEffect } from 'react';

function Layout() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const MouseEnter = (e) => {
    e.target.style.transform = "scale(1.2)"
    e.target.style.transition = "transform 0.5s"
  }
  const MouseLeave = (e) => {
    e.target.style.transform = "scale(1)"
  };

  return (
    <div>
      <main>
        <div className="grid">
            <div data-aos="zoom-in" data-aos-delay="200" className="gridItem">
                <img src={img1} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="gridItem">
                <img src={img2} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="gridItem">
                <img src={img3} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="gridItem">
                <img src={img4} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="gridItem">
                <img src={img5} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
             </div>
        </div>
      </main>
    </div>
  )
}

export default Layout;

