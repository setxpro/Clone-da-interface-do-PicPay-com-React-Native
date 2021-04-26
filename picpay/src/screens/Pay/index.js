import React from 'react';
import { MaterialCommunityIcons, FontAwesome5, MaterialIcons, Ionicons, SimpleLineIcons, Feather, Fontisto } from '@expo/vector-icons';


import { 
    Wrapper, 
    Header, 
    Label, 
    Card, 
    CardLabel, 
    Cards,
    ContainerLocation,
    TitleBold,
    ContainerLabel,
    TitleContainer,
    Container,
    LabelCont

} from './styles';

export default function Pay() {
    return (
        <Wrapper>
            <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e"/>
            </Header>
            <Label>Transações</Label>

            <Cards>
                <Card>
                    <FontAwesome5 name="user-circle" size={24} color="#10c86e" />
                    <CardLabel>Pagar pessoas</CardLabel>
                </Card>
                <Card>
                    <MaterialIcons name="api" size={24} color="#10c86e" />
                    <CardLabel>Pix</CardLabel>
                </Card>
                <Card>
                    <Ionicons name="ios-barcode-outline" size={24} color="#10c86e" />
                    <CardLabel>Pagar boletos</CardLabel>
                </Card>

                <Card>
                <Fontisto name="shopping-pos-machine" size={24} color="#10c86e" />
                    <CardLabel>Pagar nas maquininhas</CardLabel>
                </Card>
                <Card>
                    <MaterialIcons name="attach-money" size={24} color="#10c86e" />
                    <CardLabel>Fazer conrança</CardLabel>
                </Card>
              
            </Cards>
                <ContainerLocation>
                    <SimpleLineIcons name="location-pin" size={24} color="#10c86e" />
                    <TitleContainer>
                        <TitleBold>Locais próximos</TitleBold>
                        <ContainerLabel>Confira estabelecimentos perto de você</ContainerLabel>
                    </TitleContainer>
                </ContainerLocation>
                <Container>
                <LabelCont>Transações</LabelCont>
                <Cards>
                <Card>
                    <Feather name="smartphone" size={24} color="#10c86e" />
                    <CardLabel>Recarga de celular</CardLabel>
                </Card>
                <Card>
                    <Ionicons name="bus-outline" size={24} color="#10c86e" />
                    <CardLabel>Cartão transporte</CardLabel>
                </Card>
                <Card>
                    <MaterialCommunityIcons name="gas-station-outline" size={24} color="#10c86e" />
                    <CardLabel>Shell box</CardLabel>
                </Card>
            </Cards>
                </Container>
        </Wrapper>
    );
}

