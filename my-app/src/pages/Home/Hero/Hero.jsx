import React from 'react'
import classes from "./Hero.module.scss";
import main_top from '../../../../public/main-top.png'
import MainButton from '../../../common/Components/Button/MainButton/MainButton';
const Hero = () => {



    return (
        <div className={classes.wrap}>
            <div className={classes.sub_text}>
                Revolutionizing Software Solutions
            </div>
            <div className={classes.main_top}>
                <div className={classes.main_text}
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <div>
                        Codesphere <br />
                        Your Vision, Our Code
                    </div>
                    <MainButton type="primary" label="  Start Your Adventure" onClick={() => alert('Primary Button Clicked!')} />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                >
                    <img src={main_top} className={classes.main_img} alt="main_top" />
                </div>
            </div>
        </div>
    )
}

export default Hero
