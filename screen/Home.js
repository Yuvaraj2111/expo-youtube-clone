import React, { Component } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Content, Root } from 'native-base';

import Myheader from '../src/Myheader'
import Myfooter from '../src/Myfooter'
import Card from '../src/Card'


export default class MyComponents extends Component {

    render() {

        return (

            <Root>

                <Container>

                    <Myheader />

                    <Content>
                        <Card props={this.props} />

                    </Content>

                    <Myfooter props={this.props} />
                </Container>
            </Root >
        )
    }
}

