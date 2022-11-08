import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import Favourite from '../screens/Favourite';
import RecentSearch from "../screens/RecentSearch";
import NoFavourite from "../screens/NoFavourite";
import NoRecentSearch from "../screens/NoRecentSearch"


const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Drawer.Screen name="Favourite" component = {Favourite} options={{headerShown:false}}/>
                <Drawer.Screen name="NoFavourite" component = {NoFavourite} options={{headerShown:false}}/>
                <Drawer.Screen name="Recent Search" component={RecentSearch} options={{headerShown:false}}/>
                <Drawer.Screen name="NoRecentSearch" component = {NoRecentSearch} options={{headerShown:false}}/>
            </Drawer.Navigator>
    )
}

export default DrawerNavigation;