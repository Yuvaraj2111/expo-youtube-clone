import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, Icon } from 'native-base'

import * as Google from 'expo-google-app-auth';
//import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

// https://docs.expo.io/versions/latest/sdk/google/#using-it-inside-of-the-expo-app

const id = "222685254280-tg5krovmfouh52j9i5dhmti7tdd5pipk.apps.googleusercontent.com";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { signedIn: false, name: "", photoUrl: "" };

        this.signIn = this.signIn.bind(this);
    }

    signIn = async () => {
        try {
            const { type, user } = await Google.logInAsync({
                androidClientId: id,
                //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
                //androidStandaloneAppClientId: id,=--
                scopes: ["profile", "email"]
            })


            if (type == 'success') {
                this.setState({ signedIn: true, user: user.name, photoUrl: user.photoUrl });
                // Use Navigation to navigate to the Profile page.
                // Pass in state to navigation prop for use in profile component.
            }
        } catch (e) {
            console.log("error", e)
        }
    }

    render() {
        const { user } = this.state;
        console.log(this.state);
        return (
            <View>
                <Text style={styles.header}>Sign In With Google</Text>

                <Button onPress={this.signIn}>
                    <Text>Nive singer</Text>
                </Button>
                <Text>{user}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        paddingTop: 50,
        fontSize: 25
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})