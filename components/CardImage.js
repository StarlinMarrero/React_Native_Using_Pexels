import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const CardImage = ({image}) => {

    return (
        <View style={styles.cardImage}>
            <Image 
            source={{
                uri:
                image.src.small ? image.src.small : "https://w7.pngwing.com/pngs/998/203/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png"
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
        justifyContent: "space-between",
        backgroundColor: "#2C292C",
        borderWidth: 0,
        borderRadius: 5
    }
})


export default CardImage
