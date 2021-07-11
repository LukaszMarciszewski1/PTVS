import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ApiProvider from "./store/ApiContext";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme/index";

import Loading from "./components/Loading/Loading";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LoginProvider from "./store/LoginContext";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const VideoScreen = lazy(() => import("./screens/VideoScreen"));
const ChannelScreen = lazy(() => import("./screens/ChannelScreen"));
const Auth = lazy(() => import("./components/Auth/Auth"));

function App() {
	return (
		<ThemeProvider theme={theme}>
			<LoginProvider>
				<Router>
					<ScrollToTop />
					<NavBar />
					<Suspense fallback={<Loading />}>
						<main>
							<ApiProvider>
								<Switch>
									<Route
										path="/"
										component={HomeScreen}
										exact
									></Route>
									<Route
										path="/auth"
										component={Auth}
									></Route>
									<Route
										path="/video/:_id"
										component={VideoScreen}
									></Route>
									<ChannelScreen />
								</Switch>
							</ApiProvider>
						</main>
					</Suspense>
					<Footer />
				</Router>
			</LoginProvider>
		</ThemeProvider>
	);
}

export default App;
