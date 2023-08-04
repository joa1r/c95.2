import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screenshot/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Navigator name="Início" component={TabNavigator}/>
            <Drawer.Navigator name="Perfil" component={Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;