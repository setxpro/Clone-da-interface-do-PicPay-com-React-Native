import React from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';


import { 
    Wrapper, 
    HeaderContaine, 
    Label, 
    HeaderConfig, 
    Notification,
    Mensage,
    NotificationAreaBottom,
    NotificationDate,
    NotificButton,
    AreaScroll
} from './styles';


export default function Notifications() {
    return (
        <Wrapper>
            <AreaScroll>
            <HeaderContaine>
                <Label>Notificações</Label>
                <HeaderConfig>Configurar</HeaderConfig>
            </HeaderContaine>

            <Notification>
                <Mensage>Facilite suas próximas transferências cadastrando seus dados no banco que mais usa.</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>15 de abr ás 00:00</NotificationDate>
                    <NotificButton>Saiba mais</NotificButton>
                </NotificationAreaBottom>
            </Notification>

            <Notification>
                <Mensage>Você recebeu uma transferências bancária via TED no valor de R$ 50,00.</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>20 de abr ás 00:00</NotificationDate>
                    <NotificButton>Saiba mais</NotificButton>
                </NotificationAreaBottom>
            </Notification>

            <Notification>
                <Mensage>Chame amigos para o PicPay e ganhe R$20! Para cada pessoa que começar a usar o app, 
                    vocês dois ganham!</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>25 de abr ás 10:00</NotificationDate>
                </NotificationAreaBottom>
            </Notification>

            <Notification>
                <Mensage>Chame amigos para o PicPay e ganhe R$20! Para cada pessoa que começar a usar o app, 
                    vocês dois ganham!</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>25 de abr ás 10:00</NotificationDate>
                </NotificationAreaBottom>
            </Notification>

            <Notification>
                <Mensage>Chame amigos para o PicPay e ganhe R$20! Para cada pessoa que começar a usar o app, 
                    vocês dois ganham!</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>25 de abr ás 10:00</NotificationDate>
                </NotificationAreaBottom>
            </Notification>

            <Notification>
                <Mensage><Label>Atualize seus dados cadastrais. </Label>
                Confirme suas informações para ficar por dentro das novidades e deixar e
                deixar a sua conta mais segura!</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>25 de abr ás 10:00</NotificationDate>
                </NotificationAreaBottom>
            </Notification>

            <Notification>
                <Mensage>Chame amigos para o PicPay e ganhe R$20! Para cada pessoa que começar a usar o app, 
                    vocês dois ganham!</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>25 de abr ás 10:00</NotificationDate>
                </NotificationAreaBottom>
            </Notification>
            
            <Notification>
                <Mensage>Chame amigos para o PicPay e ganhe R$20! Para cada pessoa que começar a usar o app, 
                    vocês dois ganham!</Mensage>
                <NotificationAreaBottom>
                    <NotificationDate>25 de abr ás 10:00</NotificationDate>
                </NotificationAreaBottom>
            </Notification>

            </AreaScroll>
            
        </Wrapper>
    );
    
}