import React, { Component } from 'react';
import { Container, Content, Root, Text, } from 'native-base'

import Myheader from '../src/Myheader'
import Myfooter from '../src/Myfooter'
import Card from '../src/Card'



export default class Trending extends Component {

    constructor() {
        super();
    }

    render() {

        return (

            <Root>

                <Container>

                    <Myheader />

                    <Content>
                        <Text style={{ fontSize: 20, alignItems: 'center' }}>
                            Trending videos
                        </Text>
                        <Card props={this.props} />
                    </Content>

                    <Myfooter props={this.props} />
                </Container>
            </Root >
        )
    }
}

