import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView.attrs(() => ({
    vertical: true,
}))`
   flex:1;
`;

export const AreaScroll = styled.ScrollView``;

export const HeaderContaine = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
`;

export const Label = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const HeaderConfig = styled.Text`
    color: #10c86e;
`;

export const Notification = styled.View`
    border-bottom-color: #eee;
    border-bottom-width: 1px;
`;

export const Mensage = styled.Text`
    padding: 15px;
    color: #555;
`;

export const NotificationAreaBottom = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const NotificationDate = styled.Text`
    color: #BEBEBE;
`;

export const NotificButton = styled.Text`
    color: #10c86e; 
    border: 1px solid #10c86e; 
    padding: 5px;
    border-radius: 20px;
`;
