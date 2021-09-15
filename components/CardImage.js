import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const CardImage = ({image}) => {

    return (
        <View style={styles.cardImage}>
            <Image 
            source={{
                uri: "https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png"
            }}
            style={{
                
                height:100,
                width:'100%',
                marginBottom: '1'
                
            }}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        display: 'flex',
        width: "49.5%",
        margin: 4,
        justifyContent
    }
})


export default CardImage
