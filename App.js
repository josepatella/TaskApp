import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { TasksScreen } from "./screens/TasksScreen"
import { MessageScreen } from "./screens/MessagesScreen";
import { LastActivitYScreen } from "./screens/LastActivityScreen";

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
