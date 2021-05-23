import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import MyProductsScreen from '../screens/MyProductsScreen';
import BuyAgainScreen from '../screens/BuyAgainScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

export const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: "Home"
            },
        },
        MyCart: {
            screen: CartScreen,
            navigationOptions: {
                drawerLabel: "Your Cart"
            }
        },
        MyOrders: {
            screen: MyOrdersScreen,
            navigationOptions: {
                drawerLabel: "Your Orders"
            }
        },
        BuyAgain: {
            screen: BuyAgainScreen,
            navigationOptions: {
                drawerLabel: "Buy Again"
            }
        },
        MyProducts: {
            screen: MyProductsScreen,
            navigationOptions: {
                drawerLabel: "Sell On "
            }
        },
        Notifications: {
            screen: NotificationScreen,
            navigationOptions: {
                drawerLabel: "Your Notifications"
            },
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                drawerLabel: "Your account"
            },
        },
    },
    {
        contentComponent: CustomSideBarMenu,
    },
    {
        initialRouteName: 'Home',
    }
);