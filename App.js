import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import { TasksScreen } from "./screens/TasksScreen"

function MessageScreen() {
  return (
    <View>
      <Text>
        Messages
      </Text>
    </View>
  )
}

function LastActivitYScreen() {
  return (
    <View>
      <Text>
        LastActivit
      </Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

export default function App() {

  return(

    <NavigationContainer>
      <StatusBar style="auto"/>
<Tab.Navigator initialRouteName="TASKS">
  <Tab.Screen name="MESSAGE" component={ MessageScreen }/>
  <Tab.Screen name="TASKS" component={ TasksScreen }/>
  <Tab.Screen name="LAST ACTIVITY" component={ LastActivitYScreen }/>
</Tab.Navigator>
    </NavigationContainer>
  )
};
