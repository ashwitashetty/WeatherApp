import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import Favourite from '../screens/Favourite';
import RecentSearch from "../screens/RecentSearch";
import NoFavourite from "../screens/NoFavourite";
import NoRecentSearch from "../screens/NoRecentSearch"
import Router from "./Router";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Router} options={{headerShown:false}}/>
                <Drawer.Screen name="Favourite" component = {Favourite} options={{headerShown:false}}/>
                <Drawer.Screen name="NoFavourite" component = {NoFavourite} options={{headerShown:false}}/>
                <Drawer.Screen name="Recent Search" component={RecentSearch} options={{headerShown:false}}/>
                <Drawer.Screen name="NoRecentSearch" component = {NoRecentSearch} options={{headerShown:false}}/>
            </Drawer.Navigator>
            </NavigationContainer>
    )
}

export default DrawerNavigation;