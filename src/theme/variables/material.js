import color from "color";
import { getSizeWRTDeviceWidth } from '../../utils';
import { Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";

export default {
	platformStyle,
	platform,
	// AndroidRipple
	androidRipple: true,
	androidRippleColor: "rgba(256, 256, 256, 0.3)",
	androidRippleColorDark: "rgba(0, 0, 0, 0.15)",

	// Badge
	badgeBg: "#ED1727",
	badgeColor: "#fff",
	// New Variable
	badgePadding: platform === "ios" ? 3 : 0,

	// Button
	btnFontFamily: "Always_Font",
	btnDisabledBg: "#b5b5b5",
	btnDisabledClr: "#f1f1f1",

	// CheckBox
	CheckboxRadius: 0,
	CheckboxBorderWidth: 2,
	CheckboxPaddingLeft: 2,
	CheckboxPaddingBottom: platform === "ios" ? 0 : 5,
	CheckboxIconSize: platform === "ios" ? 18 : 14,
	CheckboxIconMarginTop: platform === "ios" ? undefined : 1,
	CheckboxFontSize: platform === "ios" ? 21 : 18,
	DefaultFontSize: getSizeWRTDeviceWidth(14),
	checkboxBgColor: "#039BE5",
	checkboxSize: 20,
	checkboxTickColor: "#fff",

	// Segment
	segmentBackgroundColor: "#3F51B5",
	segmentActiveBackgroundColor: "#fff",
	segmentTextColor: "#fff",
	segmentActiveTextColor: "#3F51B5",
	segmentBorderColor: "#fff",
	segmentBorderColorMain: "#3F51B5",

	// New Variable
	get defaultTextColor() {
		return this.textColor;
	},

	get btnPrimaryBg() {
		return this.brandPrimary;
	},
	get btnPrimaryColor() {
		return this.inverseTextColor;
	},
	get btnInfoBg() {
		return this.brandInfo;
	},
	get btnInfoColor() {
		return this.inverseTextColor;
	},
	get btnSuccessBg() {
		return this.brandSuccess;
	},
	get btnSuccessColor() {
		return this.inverseTextColor;
	},
	get btnDangerBg() {
		return this.brandDanger;
	},
	get btnDangerColor() {
		return this.inverseTextColor;
	},
	get btnWarningBg() {
		return this.brandWarning;
	},
	get btnWarningColor() {
		return this.inverseTextColor;
	},
	get btnTextSize() {
		return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
	},
	get btnTextSizeLarge() {
		return this.fontSizeBase * 1.5;
	},
	get btnTextSizeSmall() {
		return this.fontSizeBase * 0.8;
	},
	get borderRadiusLarge() {
		return this.fontSizeBase * 3.8;
	},

	buttonPadding: 6,

	get iconSizeLarge() {
		return this.iconFontSize * 1.5;
	},
	get iconSizeSmall() {
		return this.iconFontSize * 0.6;
	},

	// Card
	cardDefaultBg: "#fff",

	// Color
	brandPrimary: "#3F51B5",
	brandInfo: "#3F57D3",
	brandSuccess: "#5cb85c",
	brandDanger: "#d9534f",
	brandWarning: "#f0ad4e",
	brandSidebar: "#252932",

	// Font
	fontFamily: "Always_Font",
	fontSizeBase: getSizeWRTDeviceWidth(14),

	get fontSizeH1() {
		return this.fontSizeBase * 1.8;
	},
	get fontSizeH2() {
		return this.fontSizeBase * 1.6;
	},
	get fontSizeH3() {
		return this.fontSizeBase * 1.4;
	},

	// Footer
	footerHeight: 55,
	footerDefaultBg: "#3F51B5",

	// FooterTab
	tabBarTextColor: "#b3c7f9",
	tabBarTextSize: platform === "ios" ? 14 : 11,
	activeTab: "#fff",
	sTabBarActiveTextColor: "#007aff",
	tabBarActiveTextColor: "#fff",
	tabActiveBgColor: undefined,

	// Tab
	tabDefaultBg: "transparent",
	topTabBarTextColor: "#fff",
	topTabBarActiveTextColor: "#fff",
	topTabActiveBgColor: undefined,
	topTabBarBorderColor: "#fff",
	topTabBarActiveBorderColor: "rgba(233,30,99,1)",

	// Header
	toolbarBtnColor: "#fff",
	toolbarDefaultBg: "#3F51B5",
	toolbarHeight: platform === "ios" ? 76 : 56,
	toolbarIconSize: platform === "ios" ? 20 : 22,
	toolbarSearchIconSize: platform === "ios" ? 20 : 23,
	toolbarInputColor: "#fff",
	searchBarHeight: platform === "ios" ? 30 : 40,
	toolbarInverseBg: "#222",
	toolbarTextColor: "#fff",
	toolbarDefaultBorder: "#3F51B5",
	iosStatusbar: "light-content",
	get statusBarColor() {
		return color(this.toolbarDefaultBg)
			.darken(0.2)
			.hex();
	},

	// Icon
	iconFamily: "Ionicons",
	iconFontSize: platform === "ios" ? 30 : 28,
	iconMargin: 7,
	iconHeaderSize: platform === "ios" ? 29 : 24,

	// InputGroup
	inputFontSize: getSizeWRTDeviceWidth(14),
	inputBorderColor: "rgba(74,74,74,1)",
	inputSuccessBorderColor: "rgba(74,74,74,1)",
	inputErrorBorderColor: "rgba(74,74,74,1)",

	get inputColor() {
		return "#000";
	},
	get inputColorPlaceholder() {
		return "#fff";
	},

	inputGroupMarginBottom: 10,
	inputHeightBase: 50,
	inputPaddingLeft: 5,

	get inputPaddingLeftIcon() {
		return this.inputPaddingLeft * 8;
	},

	// Line Height
	btnLineHeight: 19,
	lineHeightH1: 32,
	lineHeightH2: 27,
	lineHeightH3: 22,
	iconLineHeight: platform === "ios" ? 37 : 30,
	lineHeight: platform === "ios" ? 20 : 24,

	// List
	listBorderColor: "#c9c9c9",
	listDividerBg: "#f4f4f4",
	listItemHeight: 45,
	listBtnUnderlayColor: "#DDD",

	// Card
	cardBorderColor: "#ccc",

	// Changed Variable
	listItemPadding: platform === "ios" ? 10 : 12,

	listNoteColor: "#808080",
	listNoteSize: 13,

	// Progress Bar
	defaultProgressColor: "#E4202D",
	inverseProgressColor: "#1A191B",

	// Radio Button
	radioBtnSize: platform === "ios" ? 25 : 23,
	radioSelectedColorAndroid: "#5067FF",

	// New Variable
	radioBtnLineHeight: platform === "ios" ? 29 : 24,

	radioColor: "#7e7e7e",

	get radioSelectedColor() {
		return color(this.radioColor)
			.darken(0.2)
			.hex();
	},

	// Spinner
	defaultSpinnerColor: "#45D56E",
	inverseSpinnerColor: "#1A191B",

	// Tabs
	tabBgColor: "#F8F8F8",
	tabFontSize: getSizeWRTDeviceWidth(12),
	tabTextColor: "#222222",

	// Text
	textColor: "#000",
	inverseTextColor: "#fff",
	noteFontSize: 14,

	// Title
	titleFontfamily: "Always_Font",
	titleFontSize: 19,
	subTitleFontSize: 14,
	subtitleColor: "#FFF",

	// New Variable
	titleFontColor: "#FFF",

	// Other
	borderRadiusBase: 2,
	borderWidth: 0.4,
	contentPadding: 10,

	get darkenHeader() {
		return color(this.tabBgColor)
			.darken(0.03)
			.hex();
	},

	dropdownBg: "#000",
	dropdownLinkColor: "#414142",
	inputLineHeight: 16,
	jumbotronBg: "#C9C9CE",
	jumbotronPadding: 30,
	deviceWidth,
	deviceHeight,

	// New Variable
	inputGroupRoundedBorderRadius: 30,
};
