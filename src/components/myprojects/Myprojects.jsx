import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio (This Website)</h3>
            <small className='text-light'>React.js | CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/rahbarpathan/portfolio" target="_blank" rel='noreferrer' className='btn'>See on GitHub</a>
              <a href="https://rahbarpathan.github.io/portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>See on GitHub</h3>
            <small className='text-light'>More projects...</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/rahbarpathan/" target="_blank" rel='noreferrer' className='btn'>See on GitHub</a>
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects