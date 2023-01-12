import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import styles from './styles.module.css';
// import Image from './image.js';
import { useEffect,useState } from 'react';

function Layout() {
  const [showMore, setShowMore]= useState({
    matches:window.innerWidth > 768 ? true : false
  });
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

  const Clicked = () => {
    setShowMore(!showMore);
  }
  return (
    <>
    <div>
      <main>
        <div className={styles.grid}>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img1} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img2} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img3} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img4} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img5} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
             </div>
        </div>
      </main >
      <main className ={showMore? styles.go:styles.moreImg}>
        <div className={`${styles.grid} ${styles.nmg}`}>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img6} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img7} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img8} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className={styles.gridItem}>
                <img className={styles.photo} src={img9} alt="img" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave} />
            </div>
            </div> 
          </main>
          <button className={styles.btn} onClick={Clicked}>
              {showMore ? "Show Less" : "Show More"}
          </button>
    </div>
    </>
  )
}

export default Layout;

