import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


class Detail extends Component {
    constructor(props){
        super(props);

        this.renderGender = this.renderGender.bind(this);
    }
    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('')
    })

    renderGender() {
         const contact = this.props.navigation.getParam('Contact');
            if(contact.item.gender === "male") {
                     return <Text>He</Text>;
            } else {
                return (<Text>She</Text>);
              }
    }


    render() {
        const contact = this.props.navigation.getParam('Contact');
        let {name, picture, gender, filmName, address, company, filmURL} = contact.item;
        console.log();
        return(
                <View style={styles.container} >
                <Image source={{uri: `'${picture}'`}} style={styles.image} />
                <Text>{this.renderGender()}</Text>
                </View>
        )
    }
}


const styles = {
    image:{
        width:200,
        height:300,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
};



export default Detail;
