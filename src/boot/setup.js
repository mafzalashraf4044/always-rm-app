import * as Expo from "expo";
import * as React from "react";
import { Image } from 'react-native';
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
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
		if (typeof image === 'string') {
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
			store: configureStore(() => this.setState({ isLoading: false })),
			isReady: false,
		};
	}

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
			require('../assets/Images/app-bg.jpeg'),
			require('../assets/Images/header-bg.jpeg'),
    ]);

    const fontAssets = cacheFonts([{
			Always_Font: require('../assets/Fonts/SF-Pro-Display-Regular.otf')
		}]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

	render() {
		if (!this.state.isReady || this.state.isLoading) {
      return (
        <Expo.AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
		}
		
		return (
			<StyleProvider style={getTheme(variables)}>
				<Provider store={this.state.store}>
					<App />
				</Provider>
			</StyleProvider>
		);
	}
}
