import React, { Component } from 'react';
import { Container, Content, Root, View, Text, Left, Thumbnail, Right } from 'native-base'


import Myheader from '../src/Myheader'
import Myfooter from '../src/Myfooter'



export default class Library extends Component {

    render() {

        return (
            <Root>

                <Container>

                    <Myheader />

                    <Content>
                        <Text>Library</Text>
                    </Content>

                    <Myfooter props={this.props}  />
                </Container>
            </Root >
        )
    }
}

