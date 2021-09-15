import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CardImage from './CardImage'

const ImageList = ({photos}) => {
    console.log("photos", photos);

    const renderItem = ({item}) => <CardImage image={item}/>;


    return (
        <View>
            <FlatList 
            data={photos} 
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
        </View>
    )
}

export default ImageList
