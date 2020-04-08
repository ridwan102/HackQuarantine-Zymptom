import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


export default function Offers ({navigation} : { navigation: any})  {
    return (
        <View style= { styles.container }>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Offers</Text>
            </View>
            <View style={styles.offerContainer}>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Text style={styles.offerPrice}>Free</Text>
                    <Image source={require('../images/spotify.png')}/>
                    <Text style={styles.offerText}>1 Month of Spotify Premium</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Text style={styles.offerPrice}>400</Text>
                    <Image source={require('../images/google.png')}/>
                    <Text style={styles.offerText}>$10 Google Play Giftcard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.offerButton} activeOpacity={.5}>
                    <Text style={styles.offerPrice}>400</Text>
                    <Image source={require('../images/amazon.png')}/>
                    <Text style={styles.offerText}>$10 Amazon Giftcard</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Dashboard')}>
                    <Text style={styles.ButtonText}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} activeOpacity={0.5}
                onPress={() => navigation.push('Wallet')}>
                    <Text style={styles.ButtonText}>Wallet</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F67183'
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: 100
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: 25,
      },
    offerContainer: {
        flex: 3,
        alignItems: 'center',
        marginVertical: -75
    },
    offerButton:{
        justifyContent: 'space-around', 
        alignItems:'center',
        backgroundColor: '#FFFFFF',
        height: 150,
        width: 300,
        borderRadius: 25,
        margin: 15,
    },
    offerPrice: {
        color: '#000000', 
        fontSize: 15,
        fontFamily: 'poppins-regular',
        marginRight: -225
    },
    offerText: {
        color: '#000000', 
        fontSize: 17,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    Button: {
        backgroundColor: '#019CDD',
        height: 65,
        width: 150,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    ButtonText: {
        color: '#FFFFFF',
        fontFamily: 'poppins-medium',
        fontSize: 15
    },
});
