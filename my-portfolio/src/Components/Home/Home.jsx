import './Home.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {

    const [letterClass ,setLetterClass] = useState('text-animate');
    const nameArray = ['G','a','u','r','a','v',' ','K', 'a','d'];
    const jobArray = ['W','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

    useEffect(() =>  {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    })

    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,&nbsp;</span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}> 'm</span>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>MERN Developer / Software Tester</h2>
                <Link to='/contact' className='flat-button' >CONTACT ME</Link>
            </div>
            {/* <Logo/> */}
        </div>
    )
}

export default Home;