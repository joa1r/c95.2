import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerNavigation } from  './navigation'
import {TabNavigator } from  './navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Tab.Navigator
            screensOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Feed'){
                        iconName = focused
                            ? 'book'
                            : 'book-outline'
                    } else if (route.name === 'CriarPost'){
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="CriarPost" component={CreatePost}/>
        </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
