import React from 'react'
import './Header.css'
import apple_logo from '../../commonResource/Images/icons/logo-sm.png'
import search_logo from '../../commonResource/Images/icons/search-icon-sm.png'
import cart_logo from '../../commonResource/Images/icons/cart-sm.png'
function Header() {
  return (
    <div>

<div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
					data-target=".navbar-collapse">
					☰
				</button>
				<a className="navbar-brand mx-auto" href="#"><img src={apple_logo} /></a>

				<div className="navbar-collapse collapse">
					<ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#">iphone</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#">ipad</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#">watch</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#">tv</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#">Music</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="#">Support</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/search/">
								<img src={search_logo} />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/cart/"><img
									src={cart_logo} /></a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>

    </div>
  )
}

export default Header