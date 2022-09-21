import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
    return (
        <div className='top'>
            <div className='text-container'>
                <h1>Connect with Me</h1>
                <p>shoot me an email <span>lakshay3899@gmail.com</span></p>
                <div className='social'>
                    <a href='https://github.com/Lakshay0786' >
                        <img className='social-img' src='https://cdn-icons-png.flaticon.com/512/2111/2111432.png' alt='social' />
                    </a>
                    <a href='https://twitter.com/Lakshay_Sharma7' >
                        <img className='social-img' src='https://cdn-icons-png.flaticon.com/512/1384/1384017.png' alt='social' />
                    </a>
                    <a href='https://www.linkedin.com/in/lakshay-sharma-0b6174250/' >
                        <img className='social-img' src='https://cdn-icons-png.flaticon.com/512/3669/3669739.png' alt='social' />
                    </a>

                </div>
                <p className='last-p'>Designed & built by Lakshay Sharma
                    <img src='https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/hugging-face_1f917.png' alt='foot' />
                </p>

            </div>

        </div>
    )
}

export default Footer