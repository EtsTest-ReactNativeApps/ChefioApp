import React, { useState } from 'react'
import { View, StyleSheet, ScrollView,Text} from 'react-native'
import HorizontalSpace from '../../Components/layout/HorizontalSpace'
import Title from '../../Components/core/Title'
import VerticalSpace from '../../Components/layout/VerticalSpace'
import Container from '../../Components/layout/ContainerView'
import Row from '../../Components/layout/Row'
import Button from '../../Components/core/Button';
import Taping from '../../Components/core/TabButton'
import RecipeCard from '../../Components/core/RecipeCard'
import SearchBar from '../../Components/core/SearchBar'
import yelp from '../../api/yelp'
import Input from '../../Components/core/Input'
import { AntDesign } from '@expo/vector-icons'
const HomeScreen = () => {
	var [buttonClick, setButtonClick] = useState({ btnSelected: 1 })
    var [tabClick, setTabClick] = useState({ tabSelected: 1 })

	const [term,setTerm] = useState('');
    const [results,setResults] = useState([])

	const searchApi = async() =>{
		const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        })
		setResults(response.data.businesses)
	}

	return (
		
        <ScrollView 
		showsVerticalScrollIndicator={false}
		StickyHeaderComponent
		
		>
			
        <Container>
			<VerticalSpace height={'20px'}/>

        		<SearchBar term = {term}
        				   onTermChange = {setTerm}
         				  onTermSubmit = {searchApi} />

			<Text>We Have found {results.length}</Text>
        	<Row direction={'flex-start'}>
				<Title fontWeight={'700'} fontSize={'17px'}>
					Category
				</Title>
			</Row>
		
			<Row direction={'flex-start'}>
				<Button
					style={
						(buttonClick.btnSelected == 1)
							? null
							: styles.notSelected
					} 
                    onPress={() => setButtonClick({ btnSelected: 1 })} 
                    width={'72px'} 
				>
					All
				</Button>
				<HorizontalSpace width={'15px'} />
				<Button
					style={
						(buttonClick.btnSelected == 2)
							? null
							: styles.notSelected
					} 
                    onPress={() => setButtonClick({ btnSelected: 2 })} 
                     width={'90px'}
				>
				Food
				</Button>
				<HorizontalSpace width={'15px'} />
				<Button
					style={
						buttonClick.btnSelected == 3
							? null
							: styles.notSelected
					}
                    onPress={() => setButtonClick({ btnSelected: 3 })} 
                     width={'95px'}
				>
				Drink
				</Button>
			</Row>
			<VerticalSpace height={'20px'} />
			<VerticalSpace height={'8px'} backColor={'#F4F5F7'} />
			<VerticalSpace height={'15px'} />
                    <Row>
                    <Taping style={
						tabClick.tabSelected == 1
							? null
							: styles.notTabed
					}  fontColor={
						tabClick.tabSelected == 1
							? null
							: '#9FA5C0'
					}
                    onPress={() => setTabClick({ tabSelected: 1 })} >Left</Taping>
                    <Taping
                    style={
						tabClick.tabSelected == 2
							? null
							: styles.notTabed
					}
                    fontColor={
						tabClick.tabSelected == 2
							? null
							: '#9FA5C0'
					}
                    onPress={() => setTabClick({ tabSelected: 2 })}>Right</Taping>
                    </Row>
					<View style={styles.CardsStyle}>
					
					<RecipeCard/>
					<RecipeCard/>
					<RecipeCard/>
					<RecipeCard/>
					<RecipeCard/>
					<RecipeCard/>
					
					</View>
					
		</Container>
		
		</ScrollView>
	
	)
}

const styles = StyleSheet.create({

	iconStyle: {
		alignSelf: 'center',
		marginHorizontal: 15,
	},
	notSelected: {
        backgroundColor: '#F4F5F7',
        color: '#9FA5C0', 
    },
    notTabed: {
        borderBottomColor: '#D0DBEA',
        borderBottomWidth: 1,
        color: '#9FA5C0'
    },
	CardsStyle:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		flexWrap: 'wrap'
	}
})

export default HomeScreen
