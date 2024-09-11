import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from ".screens/HomeScreen";
import DonationScreen from "./screens/DonationScreen";
import FirstScreen from "./screens/FirstScreen";
import LogInScreen from "./screens/LogInScreen";
import NewsScreen from "./screens/NewsScreen";
import PointsScreen from "./screens/PointsScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ThankYouScreen from "./screens/ThankYouScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Donation: DonationScreen,
    LogIn: LogInScreen,
    First: FirstScreen,
    News: NewsScreen,
    Points: PointsScreen,
    Square: SquareScreen,
    SignUp: SignUpScreen,
    ThankYou: ThankYouScreen,
  },
  {
    initialRouteName: "First",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
