import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Icon, Footer, FooterTab, Text as TextNativeBase, Badge } from 'native-base';

export default class FooterTabs extends Component {

    render() {
        return (
            <Footer>
                <FooterTab style={{ backgroundColor: '#454545' }}>
                    <Button vertical onPress={() => this.props.navigation.navigate('Feed')}>
                        <Icon name="home" style={{ color: '#999999' }} />
                        <Text style={{ color: '#999999' }}>Home</Text>
                    </Button>
                    <Button badge vertical onPress={() => this.props.navigation.navigate('Feed')}>
                        <Badge style={{ backgroundColor: '#009FEF' }}><TextNativeBase>2</TextNativeBase></Badge>
                        <Icon name="notifications" style={{ color: '#999999' }} />
                        <Text style={{ color: '#999999' }}>Notificações</Text>
                    </Button>
                    <Button badge vertical onPress={() => this.props.navigation.navigate('Feed')}>
                        <Badge style={{ backgroundColor: '#009FEF' }}><TextNativeBase>51</TextNativeBase></Badge>
                        <Icon name="mail" style={{ color: '#999999' }} />
                        <Text style={{ color: '#999999' }}>Mensagens</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}