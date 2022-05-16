import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
const screens = {
    About: {
    screen: About,
    navigationOptions:{
        title: 'About',
    }
  },
};

// home stack navigator screens
const AboutStack = createStackNavigator(screens,{
    defaultNavigationOption:{
        headerTinColor:'#444',
        heaerStyle:{backgroundColor:'#eee', height:60}
    }
});

export default createAppContainer(HomeStack);
