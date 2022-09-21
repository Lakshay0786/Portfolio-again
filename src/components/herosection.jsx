import './herosection.styles.css'
import classes from './button.module.css'
import character from '../img/character.png'
const Herosection = () => {
    return (
        <>
            <section className='bg-top'>
                <div className='bg'>
                    <div className="img">
                        <img className='main-img' src={character} alt="BigCo Inc. logo" />
                    </div>
                    <div className="textbox">
                        <h1> <span className='headline-spam'> Hi! I Am </span><br></br> Lakshay Sharma</h1>
                        <p className='title'>Designer   <span className='span-tagline'>&</span>  Developer</p>
                        <p className='tagline'>I love to create beautiful and performant products with delightful user experiences</p>
                        <button className={
                            `btn ${classes.glow}`
                        } type="button"> Contact me</button>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Herosection;