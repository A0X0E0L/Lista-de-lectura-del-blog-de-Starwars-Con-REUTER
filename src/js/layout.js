import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import injectContext from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.js";
import { CharacterDescription } from "./views/personajedescription.jsx";
import { VehicleDescription } from "./views/vehicledescription.jsx";
import { PlanetDescription } from "./views/planetdescription.jsx";

//create your first component
const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/personaje/detalles/:id" element={<CharacterDescription />} />
						<Route path="/planeta/detalles/:id" element={<PlanetDescription />} />
						<Route path="/vehicle/detalles/:id" element={<VehicleDescription />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
