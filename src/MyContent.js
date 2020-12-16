import { Video } from 'expo-av';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Card, Left, Right, Text, Thumbnail, View } from 'native-base'

export default function App() {
    return (
        <View>

            <Card>
                <Video
                    source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                    volume={1.0} rate={1.0} isMuted={false} resizeMode='stretch'
                    onFullscreenUpdate shouldPlay
                    style={{ width: 400, height: 210 }}
                />

                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                    <Left style={{ paddingLeft: 3 }}>
                        <Thumbnail circular source={{ uri: 'https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg' }} style={{ height: 45, width: 45 }} />
                    </Left>

                    <View style={{}}>

                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Big Buck bunny</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ paddingRight: 10, color: "grey" }}>Mr.Cricket</Text>
                            <Text style={{ paddingRight: 10, color: "grey" }}>100kviews</Text>
                            <Text style={{ color: "grey", paddingLeft: 10 }} >1 month ago</Text>
                        </View>
                    </View>

                    <Right>
                        <MaterialCommunityIcons name="dots-vertical" size={26} color="black" style={{}} />
                    </Right>

                </View>

            </Card>



            <Thumbnail source={require('../assets/pic2.jpg')} style={{ width: 400, height: 210, margin: 10 }} />
            <Thumbnail source={require('../assets/pic3.jpg')} style={{ width: 400, height: 210, margin: 10 }} />
            <Thumbnail source={require('../assets/pic4.jpg')} style={{ width: 400, height: 210, margin: 10 }} />
            <Thumbnail source={require('../assets/pic3.jpg')} style={{ width: 400, height: 210, margin: 10 }} />
            <Thumbnail source={require('../assets/pic2.jpg')} style={{ width: 400, height: 210, margin: 10 }} />
            <Thumbnail source={require('../assets/pic3.jpg')} style={{ width: 400, height: 210, margin: 10 }} />

        </View>
    )
}