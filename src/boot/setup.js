import * as Expo from "expo";
import * as React from "react";
import { Image } from "react-native";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import store from "./configureStore";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/material";
export interface Props {}
export interface State {
	store: Object,
	isLoading: boolean,
	isReady: boolean,
}

function cacheImages(images) {
	return images.map(image => {
		if (typeof image === "string") {
			return Image.prefetch(image);
		} else {
			return Expo.Asset.fromModule(image).downloadAsync();
		}
	});
}

function cacheFonts(fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

export default class Setup extends React.Component<Props, State> {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			// store: configureStore(() => this.setState({ isLoading: false })),
			isReady: false,
		};
	}

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
			require("../assets/Images/app-bg.jpeg"),
			require("../assets/Images/header-bg.jpeg"),
			require("../assets/Images/card-image.jpg"),
			require("../assets/Images/grid-img.jpg"),
			require("../assets/Images/logo-always.png"),
			require("../assets/Icons/Light/Stores.png"),
			require("../assets/Icons/Light/Report.png"),
			require("../assets/Icons/Light/Calendar.png"),
			require("../assets/Icons/Light/Merchandise.png"),
			require("../assets/Icons/Light/Menu.png"),
			require("../assets/Icons/Light/Back.png"),
			require("../assets/Icons/Light/Edit.png"),
			require("../assets/Icons/Light/Search.png"),
			require("../assets/Icons/Light/Add.png"),
			require("../assets/Icons/Light/Back.png"),
			require("../assets/Icons/Light/Camera.png"),
			require("../assets/Icons/Dark/Stores.png"),
			require("../assets/Icons/Dark/Report.png"),
			require("../assets/Icons/Dark/Calendar.png"),
			require("../assets/Icons/Dark/Merchandise.png"),
			require("../assets/Icons/Dark/Exit.png"),
			require("../assets/Icons/Dark/Expand.png"),
    ]);

    const fontAssets = cacheFonts([{
			Always_Font: require("../assets/Fonts/SF-Pro-Display-Regular.otf")
		}]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

	render() {
		if (!this.state.isReady) {
      return (
        <Expo.AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
		}
		
		return (
			<StyleProvider style={getTheme(variables)}>
				<Provider store={store}>
					<App />
				</Provider>
			</StyleProvider>
		);
	}
}
