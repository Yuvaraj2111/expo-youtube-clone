import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Container, Content, Root, View, Text, Thumbnail, Right } from 'native-base'

import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons, EvilIcons, Entypo } from '@expo/vector-icons';

import { Video } from 'expo-av';
import * as Animatable from 'react-native-animatable';

import Card from '../src/Card'


export default class VidShow extends Component {

    constructor() {
        super();
    }

    render() {
        const { name, vid, thum, channel, views, ago } = this.props.route.params;

        return (

            <Root>

                <Container>

                    <Content>
                        <Animatable.View
                            animation="fadeInUpBig"
                            style={{ margin: 4 }}>

                            <Video
                                source={{ uri: vid }}
                                volume={1.0} rate={1.0} isMuted={false}
                                resizeMode='stretch'
                                useNativeControls shouldPlay
                                style={{ width: 400, height: 210 }}

                            />
                            <View style={{ flexDirection: 'row', padding: 10 }}>

                                <Text style={{ fontWeight: "500", fontSize: 21, }}>
                                    {name}
                                </Text>
                                <Right>
                                    <FontAwesome name="angle-down" size={28} color="black" />
                                </Right>

                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ paddingHorizontal: 15, color: "#666666", Fontsize: 12 }}>{views} views.</Text>
                                <Text style={{ color: "#666666", Fontsize: 12 }}>{ago} ago..</Text>
                            </View>

                            <View style={{ flexDirection: "row", paddingVertical: 20 }}>
                                <View style={{ paddingHorizontal: 21, }}>
                                    <AntDesign name="like2" size={28} color="black" />
                                    <Text style={{ fontSize: 15, paddingTop: 5 }}>1.5k</Text>
                                </View>
                                <View style={{ paddingHorizontal: 21, }}>
                                    <AntDesign name="dislike2" size={28} color="black" />
                                    <Text style={{ fontSize: 15, paddingTop: 5 }}>2.5k</Text>
                                </View>
                                <View style={{ paddingHorizontal: 21, }}>
                                    <MaterialCommunityIcons name="share" size={30} color="black" />
                                    <Text style={{ fontSize: 15, paddingTop: 3 }}>Share</Text>
                                </View>
                                <View style={{ paddingHorizontal: 21, }}>
                                    <MaterialCommunityIcons name="download-outline" size={28} color="black" style={{ marginRight: 24 }} />
                                    <Text style={{ fontSize: 15, paddingTop: 5, }}>Download</Text>
                                </View>
                                <View style={{ paddingHorizontal: 21, }}>
                                    <MaterialIcons name="library-add" size={28} color="black" />
                                    <Text style={{ fontSize: 15, paddingTop: 5 }}>Save</Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomColor: '#808080', borderTopColor: "#808080", borderBottomWidth: 1, borderTopWidth: 1 }}>
                                <Thumbnail circular source={{ uri: thum }} style={{ height: 50, width: 50 }} />
                                <View style={{ paddingLeft: 15 }}>
                                    <Text style={{ fontSize: 21 }}>{channel}</Text>
                                    <Text style={{ fontSize: 15, color: "#4d4d4d" }}>21.1k subscribers</Text>

                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 40, paddingVertical: 10 }}>
                                    <Text style={{ fontSize: 18, color: "#4d4d4d" }}>SUBSCRIBED</Text>
                                    <EvilIcons name='bell' style={{ paddingLeft: 15, fontSize: 35, color: "#4d4d4d", }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Text style={{ fontWeight: 'bold', }}>Comments</Text>
                                <Text style={{ color: "#4d4d4d", paddingLeft: 10 }}>130</Text>
                                <Right>
                                    <Entypo name="select-arrows" size={18} />
                                </Right>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 10, borderBottomColor: "#808080", borderBottomWidth: 1 }}>
                                <Thumbnail circular source={{ uri: 'https://i.ndtvimg.com/i/2017-07/captain-america_640x480_51499156667.jpg?downsize=360:*' }}
                                    style={{ height: 30, width: 30, marginRight: 15 }} />
                                <TextInput style={{ backgroundColor: '#E2E2E2', width: '90%', borderRadius: 5 }} placeholder="   Add a Public Comment..." />
                            </View>

                            <Card props={this.props} />
                        </Animatable.View>
                    </Content>

                </Container>
            </Root >
        )
    }
}

