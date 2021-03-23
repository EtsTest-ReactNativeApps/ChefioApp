import React from 'react'
import styled from 'styled-components'
import { Image, StyleSheet ,View,FlatList} from 'react-native'

import Row from '../layout/Row'
import VerticalSpace from '../layout/VerticalSpace'



const RecipeCard = () =>{

    return(
        <Container>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
           
               <Image style={styles.ProfileStyle} source={require('../../../assets/Profile2.png')} />
            <Text >Calum Lewis</Text>
           
            </View>
            <Image style={styles.FoodStyle} source={require('../../../assets/pic7.png')} />
            <Text FW={'700'} FS={'17px'}>PanCake </Text>
             <VerticalSpace height={'0px'} />
            <Text FS={'12px'} FC={'#9FA5C0'}>Food  {'> '}60min</Text>
           
        </Container>
    )
}

const styles = StyleSheet.create({
    ProfileStyle:{
        width:30,
         height: 30,
           borderRadius: 11,
          marginRight: 15 ,

        
        
    },
    FoodStyle:{
        width: 160,
        height:151,
        borderRadius: 13,
        alignSelf: 'center',
        marginVertical: 15

    }
})

const Container = styled.View`
width: 40%
padding: 10px
flex-flow: row wrap;

`

const Text = styled.Text`
font-size: ${props => props.FS || '15px'};
font-weight: ${props => props.FW || 'normal'}
color: ${props => props.FC || '#2E3E5C'}
margin-bottom: 8px
margin-top: 4px
text-align: center;

`



export default RecipeCard;