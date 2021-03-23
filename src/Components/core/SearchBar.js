import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Input from '../../Components/core/Input'
import { AntDesign } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View>
<Input                  inputPlaceHolder={'Search'}
                         isSearch
                         value = {term}
                         onTermChange = {onTermChange}
                         onTermSubmit = {onTermSubmit}>

				<AntDesign
					style={styles.iconStyle}
					name='search1'
					size={24}
					color='#3E5481'
				/>
			</Input>
        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
		alignSelf: 'center',
		marginHorizontal: 15,
	},
})

export default SearchBar
