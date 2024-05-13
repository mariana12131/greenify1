import "./Header.scss"
import { headerLogo } from "../../services/images"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
	const [activeModal, setActiveModal] = useState(false)


	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="header__logo row">
						<img src={headerLogo} alt="" />
						<span>Greenify</span>
					</div>

					<nav className={`row ${activeModal && "active"}`}>
						<NavLink onClick={() => setActiveModal(param => !param)} to="/" className={`link ${({ isActive }) => (isActive && 'active')}`}>Головна</NavLink>
						<NavLink onClick={() => setActiveModal(param => !param)} to="/map" className={`link ${({ isActive }) => (isActive && 'active')}`}>Мапа</NavLink>
						<NavLink onClick={() => setActiveModal(param => !param)} to="/events" className={`link ${({ isActive }) => (isActive && 'active')}`}>Події</NavLink>
						<NavLink onClick={() => setActiveModal(param => !param)} to="/task" className={`link ${({ isActive }) => (isActive && 'active')}`}>Завдання</NavLink>
					</nav>

					<div
						className={`header__burger ${activeModal && "active"}`}
						onClick={() => setActiveModal((param => !param))}
					>
						<figure id="burger-1"></figure>
						<figure id="burger-2"></figure>
						<figure id="burger-3"></figure>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header