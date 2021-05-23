import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Icon, Avatar, Badge } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class DetailsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            image: '#',
            value: ''
        }
    }

    getNumberOfItemsInCart() {
        db.collection('cartItems').where('itemStatus', '==', 'inCart')
            .where('emailId', '==', this.state.userId)
            .onSnapshot((snapshot) => {
                var cartItems = snapshot.docs.map((doc) => doc.data());
                this.setState({
                    value: cartItems.length
                })
            })
    }

    componentDidMount() {
        this.getNumberOfItemsInCart();
    }

    fetchImage = (imageName) => {
        var storageRef = firebase
            .storage()
            .ref()
            .child('userProfiles/' + imageName);

        storageRef
            .getDownloadURL()
            .then((url) => {
                this.setState({ image: url });
            })
            .catch((error) => {
                this.setState({ image: '#' });
            });
    };

    CartIconWithBadge = (props) => {
        return (
            <View>
                <Icon
                    name="shoppingcart"
                    type="antdesign"
                    color="#696969"
                    onPress={() => this.props.navigation.navigate("MyCart")}
                />
                <Badge
                    value={this.state.value}
                    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
                />
            </View>
        )
    }
    render() {
        return (
            <Header
                leftComponent={
                    <Icon
                        name="arrow-left"
                        type="feather"
                        color="#696969"
                        onPress={() => this.props.navigation.goBack()}
                    />
                }
                centerComponent={{
                    text: this.props.title,
                    style: { color: '#696969', fontSize: 20, fontWeight: 'bold' },
                }}
                rightComponent={
                    <this.CartIconWithBadge {...this.props} />
                }
                backgroundColor="lightblue"
            />
        );
    }
}