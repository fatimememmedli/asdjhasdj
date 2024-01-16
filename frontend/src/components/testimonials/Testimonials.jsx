import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'
import "./Testimonials.scss"
function Testimonials() {
  return (
    <section id='Testimonials'>
      <div className="section-head">
      <FontAwesomeIcon icon={faIceCream} />
      <p>Testimonials</p>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quaerat, reprehenderit error alias nisi nesciunt hic veniam ipsa perspiciatis corporis velit facere fuga quod consequatur obcaecati nulla omnis dolores repellat!
        <div className="name">
        <p>Ted Champan, <span>Client</span></p>
      </div>
      </div>
      
    </section>
  )
}

export default Testimonials
