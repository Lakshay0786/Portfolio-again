import plane from '../img/spaceship-icegif-1-unscreen.gif'
import './readme.styles.css'

const Readme = () => {
    return (
        <section className="readme-div">
            <div className="readme-textbox">
                <h1 className="readme-h1">Readme.</h1>
                <p>A  <span className='span-p'>Front-end Developer & Designer</span> . I am currently an undergraduate student in the department of Computer Science & engineering. I love creating beautiful things on the internet that are responsive & clean.</p>
                <p>Problem solver, curiosity driven, I have to know the why of everything. Happiest when I’m <span className='span-p'>learning, building & contributing</span>.
                </p>

                <p>I spend my whole day, practically every day, experimenting with <span className='span-p'>HTML, CSS, and JavaScript  </span> </p>
                <p><span className='span-p'>Let's build cool things!
                </span></p>
            </div>
            <div className='readme-img '>
                <img className='img-2 ' src={plane} alt="Readme-img" />
            </div>

        </section>
    )
}

export default Readme;