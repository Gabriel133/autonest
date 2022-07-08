import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function VoucherScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Voucher!</Text>
      <Button
        title="Go to Voucher Details"
        onPress={() => navigation.navigate('VoucherDetails')}
      />
    </View>
    
  );
}

function PackageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Package!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const VoucherStack = createNativeStackNavigator();
function VoucherStackScreen() {
  return (
    <VoucherStack.Navigator>
      <VoucherStack.Screen name="Voucher" component={VoucherScreen} />
      <VoucherStack.Screen name="VoucherDetails" component={DetailsScreen} />
    </VoucherStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconComponent;
              const ionIconComponent = (iconName, size, color) => {
                return <Ionicons name={iconName} size={size} color={color} />
              };
              const materialCommunityIconsComponent = (iconName, size, color) => {
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />
              };
              
              switch (route.name) {
                case 'Home':
                  iconComponent = ionIconComponent(
                    focused ? 'home':'home-outline', 
                    size, 
                    color);
                  break;
                case 'Voucher':
                  iconComponent = materialCommunityIconsComponent(
                    focused ? 'ticket-percent':'ticket-percent-outline', 
                    size, 
                    color);
                  break;
                case 'Package':
                  iconComponent = materialCommunityIconsComponent(
                    focused ? 'shopping' : 'shopping-outline', 
                    size, 
                    color);
                  break;
                case 'Notification':
                  iconComponent = ionIconComponent(
                    focused ? 'notifications' : 'notifications-outline', 
                    size, 
                    color);
                  break;
                case 'Profile':
                  iconComponent = ionIconComponent(
                    focused ? 'person' : 'person-outline', 
                    size, 
                    color);
                  break;
                default:
                  iconComponent = ionIconComponent(
                    focused ? 'help' : 'help-outline', 
                    size, 
                    color);
              }
              return iconComponent;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })
        }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Voucher" component={VoucherStackScreen} />
        <Tab.Screen name="Package" component={PackageScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}