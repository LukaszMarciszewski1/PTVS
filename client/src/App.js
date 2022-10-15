import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import ApiProvider from "./context/ApiContext";
import AuthProvider from "./context/AuthContext";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme/index";

import Loading from "./components/Loading/Loading";
import NavBar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const VideoScreen = lazy(() => import("./screens/VideoScreen"));
const ChannelScreen = lazy(() => import("./screens/ChannelScreen"));
const Auth = lazy(() => import("./components/Auth/Auth"));

function App() {
	const { user } = useContext(AuthContext);
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
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
									/>
									<Route path="/auth" component={Auth} />
									<Route
										path="/video/:_id"
										component={VideoScreen}
									/>
									<ChannelScreen />
								</Switch>
							</ApiProvider>
						</main>
					</Suspense>
					{/* <Footer /> */}
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
}

export default App;
