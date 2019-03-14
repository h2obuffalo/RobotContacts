import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            Contact: null,
        }
        this.renderGender = this.renderGender.bind(this);
    }
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('Contact.item.name')
    })

    renderGender(gender) {
        if(gender === "male") {
           return <Text>He</Text>;
       } else {
        return (<Text>She</Text>);
    }
}

render() {
    const contact = this.props.navigation.getParam('Contact');
    let {name, picture, gender, filmName, address, company, film, filmURL} = contact.item;

    console.log(gender);
    return(
        <View style={styles.container} >
            <View style={styles.image} >
            <Image source={{uri: `${picture}`}} style={{width:200, height:200, marginBottom:10}} />
            </View>
            <View style={styles.profile} >
            <Text style={styles.text}>
            {name} is {gender}{"\n"}
            {this.renderGender(gender)} lives at {address} {"\n"}
            {this.renderGender(gender)} works at {company.toUpperCase()}. {"\n"}
            {(this.renderGender(gender) !== "he") ? "his" : "her"} favourite film is {filmName}.{"\n"}
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
