import React, { Component } from 'react';
import { Container, Content, Root, View, Text, Left, Thumbnail, Right } from 'native-base'


import Myheader from '../src/Myheader'
import Myfooter from '../src/Myfooter'



export default class Notification extends Component {

    render() {

        return (

            <Root>

                <Container>

                    <Myheader />

                    <Content>
                        <Text>Notification</Text>
                    </Content>

                    <Myfooter props={this.props} />
                </Container>
            </Root >
        )
    }
}

