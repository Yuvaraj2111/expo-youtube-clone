import React from 'react';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Footer, View, Text } from 'native-base'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'


export default class Notification extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Footer style={{ backgroundColor: 'white' }}>

                <Foot props={this.props} />
            </Footer >


        )
    }
}


const Foot = (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableNativeFeedback onPress={() => {
                props.props.props.navigation.navigate('Home', {

                })
            }}>
                <View style={{ alignItems: "center", padding: 7, marginRight: 2 }}>
                    <FontAwesome name="home" size={24} color="black" style={{}} />
                    <Text size={12}>Home</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => {
                props.props.props.navigation.navigate('Trending', {

                })
            }}>
                <View style={{ alignItems: "center", padding: 7, marginRight: 2 }}>
                    <FontAwesome5 name="fire-alt" size={24} color="black" style={{}} />
                    <Text size={12}>Trending</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => {
                props.props.props.navigation.navigate('Subscription', {

                })
            }}>
                <View style={{ alignItems: "center", padding: 7, marginRight: 2 }}>
                    <MaterialIcons name="subscriptions" size={24} color="black" style={{}} />
                    <Text size={12}>Subscription</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => {
                props.props.props.navigation.navigate('Notification', {

                })
            }}>
                <View style={{ alignItems: "center", padding: 7, marginRight: 2 }}>
                    <FontAwesome name="bell" size={24} color="black" style={{}} />
                    <Text size={12}>Notification</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => {
                props.props.props.navigation.navigate('Library', {

                })
            }}>
                <View style={{ alignItems: "center", padding: 7 }}>
                    <FontAwesome name="folder" size={24} color="black" style={{}} />
                    <Text size={12}>Library</Text>
                </View>
            </TouchableNativeFeedback>


        </View>
    )
}