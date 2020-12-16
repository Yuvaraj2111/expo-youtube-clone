import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Left, Thumbnail, Right, Button } from 'native-base';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';

import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from 'react-native';


export default class Card extends React.Component {

    constructor(props) {
        super(props);

        this.bannerAdId = "ca-app-pub-1911140191360938/4026071421";
        this.interstitialAdId = "ca-app-pub-1911140191360938/4956009713";

    }


    async componentDidMount() {
        AdMobInterstitial.setAdUnitAd(this.interstitialAdId);
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
        await AdMobInterstitial.showAdAsync();
    }

    render() {

        return (
            <View>

                <FCard
                    name='Big buck bunny episode no. 1 Eng' vid='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    thum='https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg'
                    channel='Nive' views='2B' ago='21 years' props={this.props}
                />
                <FCard
                    name='Big buck bunny episode no. 2 Eng' vid='https://player.vimeo.com/external/308735032.sd.mp4?s=1eb70c0f0f328cfbaae7f5b03123a387aea10e50&profile_id=164&oauth2_token_id=57447761'
                    thum='https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg'
                    channel='Nive' views='2B' ago='21 years' props={this.props}
                />
                <AdMobBanner
                    bannerSize="banner"
                    adUnitID={this.bannerAdId}
                    servePersonalizedAds={false}
                />

                <FCard
                    name='Big buck bunny episode no. 3 Eng' vid='https://player.vimeo.com/external/359649340.sd.mp4?s=ed1a9e96870b77220e0b09096f01a6db7a00f929&profile_id=139&oauth2_token_id=57447761'
                    thum='https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg'
                    channel='Nive' views='2B' ago='21 years' props={this.props}
                />

                <FCard
                    name='Big buck bunny episode no. 4 eng' vid='https://player.vimeo.com/external/391937403.sd.mp4?s=ec17c2d441a2ac685187fccdf0941e62cb55e210&profile_id=139&oauth2_token_id=57447761'
                    thum='https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg'
                    channel='Mr.Cricket' views='100k' ago='1month'
                    props={this.props}
                />


            </View>
        )
    }
}




const FCard = (props) => {
    return (
        <View style={{ margin: 8, elevation: 4 }}>
            <TouchableOpacity onPress={() => {
                props.props.props.navigation.navigate('VidShow', {
                    name: props.name,
                    vid: props.vid,
                    thum: props.thum,
                    channel: props.channel,
                    views: props.views,
                    ago: props.ago
                })
            }}>

                <Video
                    source={{ uri: props.vid }}
                    volume={1.0} rate={1.0} isMuted={true}
                    resizeMode='stretch'
                    style={{ width: 400, height: 210 }}

                />
            </TouchableOpacity>

            <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Left style={{ paddingLeft: 3 }}>
                    <Thumbnail circular source={{ uri: props.thum }} style={{ height: 45, width: 45 }} />
                </Left>

                <View style={{ paddingLeft: 25 }}>

                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{props.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ paddingRight: 10, color: "grey" }}>{props.channel}</Text>
                        <Text style={{ paddingRight: 10, color: "grey" }}>{props.views}</Text>
                        <Text style={{ color: "grey", paddingLeft: 10 }} >{props.ago}</Text>
                    </View>
                </View>

                <Right>
                    <MaterialCommunityIcons name="dots-vertical" size={26} color="black" style={{}} />
                </Right>

            </View>
        </View>
    )


}

