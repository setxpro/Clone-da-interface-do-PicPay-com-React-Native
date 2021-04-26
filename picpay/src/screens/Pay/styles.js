import styled from 'styled-components/native';


export const Wrapper = styled.View`
    background: #fff;
    flex: 1;
`;

export const Header = styled.View`
    padding: 20px;
`;
export const Label = styled.Text`
    color: #000;
    padding: 0 15px;
    font-size: 25px;
`;

export const Cards = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 0,
        paddingRight: 15,
        paddingBottom: 155,
        
    },
}))`

`;
// export const Cards = styled.View`
//     flex-direction: row;
//     align-items: center;

// `;

export const Card = styled.TouchableOpacity`
    padding: 10px;
    width: 105px;
    height: 100px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-left: 25px;
    margin-top: 30px;
`;

export const CardLabel = styled.Text`
    color:#555;
    margin-top: 15px;
`;


export const ContainerLocation = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    border: 1px solid #eee;
    padding: 10px;
    width: 360px;
    margin-left: 15px;
    border-radius: 8px;
`;

export const TitleContainer = styled.View`
    padding: 0;
    margin-left: 15px;
`;


export const TitleBold = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

export const ContainerLabel = styled.Text`
    color: #555;
    font-size: 16px;
`;
export const Container = styled.View``;

export const LabelCont = styled.Text`
    color: #000;
    padding: 0 15px;
    font-size: 25px;
    margin-top: 25px;
`;