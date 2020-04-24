import React, { Component } from 'react';
import { Header, Left, Body, Button, getTheme, StyleProvider, Icon, Title } from 'native-base';
import { DrawerActions } from 'react-navigation-drawer';
import customTheme from '../customTheme'

export default class HeaderTabs extends Component {
    
    render() {
        return (
            <StyleProvider style={getTheme(customTheme)}>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={() => this.props.navigate.dispatch(DrawerActions.openDrawer())} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.name}</Title>
                    </Body>
                </Header>
            </StyleProvider>
        )
    }
}