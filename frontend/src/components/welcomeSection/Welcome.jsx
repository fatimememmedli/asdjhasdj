import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import "./welcome.scss"
function Welcome() {
  return (
    <section id='Wellcome'>
        <div className="head">
        <FontAwesomeIcon icon={faCalendarDays} />
        <p>Welcome</p>
        </div>
        <div className="years-descs">
            <div className="year-desc">
                <p className="year">
                2002
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>
            <div className="year-desc">
                <p className="year">
                2010
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>
            <div className="year-desc">
                <p className="year">
                2018
                </p>
                <p className="desc">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                </p>
            </div>

        </div>
      <div className="image">
        <img src="https://preview.colorlib.com/theme/pulse/img/sign.png.webp" alt="" />
      </div>
    </section>
  )
}

export default Welcome
