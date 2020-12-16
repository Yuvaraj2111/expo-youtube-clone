import React, { Component } from 'react';
import { Container, Content, Root, View, Text, Left, Thumbnail, Right } from 'native-base'


import Myheader from '../src/Myheader'
import Myfooter from '../src/Myfooter'



export default class Subscription extends Component {

    render() {

        return (

            <Root>

                <Container>

                    <Myheader />
                    <Text>Subscription</Text>
                    <Content>

                    </Content>

                    <Myfooter props={this.props} />
                </Container>
            </Root >
        )
    }
}

