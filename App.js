import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Questions from "./Screens/Questions";
import Start from "./Screens/Start";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Test-Your-Self" component={Start} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Questions" component={Questions} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
