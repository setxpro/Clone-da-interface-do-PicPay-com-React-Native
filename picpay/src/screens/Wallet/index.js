import React, { useState } from 'react';
import { Feather, MaterialIcons, FontAwesome, AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title, 
    BalanceContainer, 
    Value, 
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicket,
    TicketLabel,


} from './styles';

import creditCard from '../../images/credit-card.png';
   

export default function Wallet() {
     //vai receber o estado como true
     const [isVisible, setIsVisible] = useState(true);

     //estado do Usebalance
     const [useBalance, setUseBalance] = useState(true);

     function handleToggleVisibility() {
         //recebe o estado atual "true" e retorno a negação dela
         //transforma true em false
        setIsVisible((prevState) => !prevState);
        //chamo a função dentro do EyeButton
     }

     //mudar a cor do background quando press o Switch
     function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
     }

    return (
        <Wrapper>
            <Header colors={
                useBalance
                ? ['#52E78C', '#1AB563']
                : ['#D3D3D3', '#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo Picpay</Title>

                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                                <Feather name={isVisible ? 'eye' : 'eye-off'} size={25} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>
                  <Info>
                      Seu saldo está rendendo 100% do CDI
                  </Info>

                  <Actions>
                      <Action>
                            <MaterialIcons name="attach-money" size={30} color="#fff"/>
                            <ActionLabel>Adicionar</ActionLabel>
                      </Action>

                      <Action>
                            <FontAwesome name="bank" size={20} color="#fff"/>
                            <ActionLabel>Adicionar</ActionLabel>
                      </Action>
                  </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>
                
                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>
            
            <PaymentMethods>
                <PaymentMethodsTitle>       
                    Formas de pagamento
                </PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão de créditos
                            </CardTitle>
                            <CardInfo>
                                Cadastre um cartão de crédito para poder fazer 
                                pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>
                        <Img source={creditCard} resizeMode="contain"/>

                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0DB060"/>
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>
                <UseTicket>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />    
                    <TicketLabel>Usar código promocional</TicketLabel>
                </UseTicket>
            </PaymentMethods>
        </Wrapper>
    );
    
}