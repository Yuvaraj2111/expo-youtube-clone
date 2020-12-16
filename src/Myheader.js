import React from 'react';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { Header, Container, Content, Root, Left, Thumbnail, Title, Right, Footer, View, Text } from 'native-base'
import { StatusBar } from 'react-native';

export default function Myheader() {
    return (
        <View>

            <Header style={{ backgroundColor: 'white', elevation: 5 }}>
                <StatusBar backgroundColor="#ff5" barStyle="dark-content" />
                <Left style={{
                    flexDirection: "row"
                }}>
                    <FontAwesome name="youtube-play" size={32} color="red" />
                    <Title style={{ color: 'black', marginLeft: 5, fontWeight: "bold" }} size={32} >YouTube</Title>
                </Left>

                <Right style={{
                    flexDirection: "row"
                }}>
                    <FontAwesome name="search" size={24} color="black" style={{ marginRight: 25 }} />
                    <FontAwesome name="user-circle" size={24} color="black" style={{ marginRight: 5 }} />
                </Right>

            </Header>
        </View>
    )
}