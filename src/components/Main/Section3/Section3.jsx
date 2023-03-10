import React from 'react'
import './Section3.css'
import watch_logo from '../../../commonResource/Images/march9apple2023/3rdsectionlogo.png'

function Section3() {
  return (
    <div>

<section className="third-section mt-3 container-fluid">

		<div className="logo pt-5">
			<img src={watch_logo} />
		</div>
		<div className="brief-description3">
			Pro. Beyond.
		</div>

		<div className="links-wrapper">
			<ul>
				<li><a href="">learn more</a></li>
				<li><a href="">Buy</a></li>
			</ul>
		</div>

	</section>

    </div>
  )
}

export default Section3