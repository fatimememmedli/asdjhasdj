import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import "./services.scss"
function Services() {
  return (
<section id='Wellcome'>
        <div className="head">
        <FontAwesomeIcon icon={faUtensils} />
        <p>Our Services</p>
        </div>
        <div className="years-descs">
            <div className="year-desc">
            <FontAwesomeIcon icon={faMugHot} />
                <p className="year">
                Breakfast
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>
            <div className="year-desc">
            <FontAwesomeIcon icon={faMugHot} />

                <p className="year">
                Brunch
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>
            <div className="year-desc">
            <FontAwesomeIcon icon={faMugHot} />

                <p className="year">

                Lunch
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>
            <div className="year-desc">
            <FontAwesomeIcon icon={faBurger} />

                <p className="year">

                Dinner
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>

        </div>
     
    </section>
  )
}

export default Services
