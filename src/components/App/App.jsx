import Header from "../Header/Header"
import HomePage from "../HomePage/HomePage"
import Footer from "../Footer/Footer"
import DangerPlanet from "../ArticlePage/DangerPlanet/DangerPlanet"
import Waste from "../ArticlePage/Waste/Waste"
import SecondLife from "../ArticlePage/SecondLife/SecondLife"
import Ecology from "../ArticlePage/Ecology/Ecology"
import EventsPage from "../EventsPage/EventsPage"
import TaskPage from "../TaskPage/TaskPage"
import Map from "../MapPage/Map"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import ScrollToTop from "../../services/scrollToTop"

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div id="wrap">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/danger-planet" element={<DangerPlanet />} />
					<Route path="/waste" element={<Waste />} />
					<Route path="/second-life" element={<SecondLife />} />
					<Route path="/ecology" element={<Ecology />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/task" element={<TaskPage />} />
					<Route path="map" element={<Map />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}

export default App