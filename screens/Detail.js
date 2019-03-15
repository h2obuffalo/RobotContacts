import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Image from 'react-native-image-progress';
// import ProgressBar from 'react-native-progress/Bar';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Contact: null,
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('Contact').item.name
    })

render() {
    const contact = this.props.navigation.getParam('Contact');
    const {name, picture, gender, filmName, address, company, film, filmURL} = contact.item;
    const pronoun = (gender !== 'female') ? "He" : "She";

    return(
        <View style={styles.container} >
            <View style={styles.image} >
            <Image source={{uri: `${picture}`}} style={{width:200, height:200, marginBottom:10}} />
            </View>
            <View style={styles.profile} >
            <Text style={styles.text}>
            {name} is {gender}{"\n"}
            {pronoun} lives at {address} {"\n"}
            {pronoun} works at {company.toUpperCase()}. {"\n"}
            {(gender !== 'female') ? "His" : "Her"} favourite film is {filmName}.{"\n"}
            </Text>
            </View>
        </View>
        )
}
}


const styles = {
    image:{
        flex:1,
        justifyContent:'center',
    },
    profile: {
        flex:2,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
    },
    text: {
        fontSize:18,
        margin:5,

    }
};



export default Detail;
