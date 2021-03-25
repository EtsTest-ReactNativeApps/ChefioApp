import React, { useState } from 'react'
import { StyleSheet,Text,FlatList} from 'react-native'
import HorizontalSpace from '../../Components/layout/HorizontalSpace'
import Title from '../../Components/core/Title'
import VerticalSpace from '../../Components/layout/VerticalSpace'
import Container from '../../Components/layout/ContainerView'
import Row from '../../Components/layout/Row'
import Button from '../../Components/core/Button'
import Taping from '../../Components/core/TabButton'
import SearchBar from '../../Components/core/SearchBar'
import useResults from '../../hooks/useResults'
import RecipeDetails from '../../Components/core/RecipeDetails'
import LoadingComponent from '../../Components/core/LoadingComponent'
const HomeScreen = () => {

	var [buttonClick, setButtonClick] = useState({ btnSelected: 1 })
    var [tabClick, setTabClick] = useState({ tabSelected: 1 })
	const [term,setTerm] = useState('');
    const [searchApi,results,errMessg,loading] = useResults();


	const filterResultByKind = (kind) =>{
		
		switch(kind){
			case 1:
				return searchApi('restaurant')
			case 2:
			    return searchApi('food')
			case 3:
				return searchApi('drink')
			default :
				break;
		}
	}
	
	return (

			
        <Container>
				{errMessg ? <Text> {errMessg} </Text> :   
            
			<FlatList 
			ListHeaderComponent={
							<> 
							<Container>
							<VerticalSpace height={'20px'}/>

			<SearchBar term = {term}
					onTermChange = {setTerm}
					onTermSubmit = {() =>searchApi(term)} />
		
			{/* <Text>We Have found {results.length}</Text> */}
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
				onPressIn = {() =>{setButtonClick({ btnSelected: 1	})
				}}
				onPress={() =>{ 
								filterResultByKind(buttonClick.btnSelected) 
								}
			} 
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
				onPressIn = {() =>{setButtonClick({ btnSelected: 2	})}}
				onPress={() => {
				filterResultByKind(buttonClick.btnSelected)
				}
			} 
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
				onPressIn = {() =>{setButtonClick({ btnSelected: 3	})}}
				onPress={() => {
				filterResultByKind(buttonClick.btnSelected)
				}
			} 
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
				{ loading ? <LoadingComponent /> : null }
				
				</Container>

				</>
			}
          
            contentContainerStyle={{flexDirection:"column",justifyContent: 'space-between'}} 
            numColumns={2}
            data={results}
            keyExtractor = {results => results.id}
            renderItem={({item}) =>{
				console.log(loading)
				
                return(
					
				
                <RecipeDetails result={item} />
			
              
                )
            }}
            />}
			
					</Container>

	
	)
}

const styles = StyleSheet.create({

	
	notSelected: {
        backgroundColor: '#F4F5F7',
        color: '#9FA5C0', 
    },
    notTabed: {
        borderBottomColor: '#D0DBEA',
        borderBottomWidth: 1,
        color: '#9FA5C0'
    },
	indicator: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 80,
		color: 'black'
	  }
})

export default HomeScreen
