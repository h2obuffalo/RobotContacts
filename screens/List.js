import React, {Component} from 'react';
import { TouchableHighlight, Stylesheet, View, Text, FlatList, Image, RefreshControl } from 'react-native';
import contactsList from '../assets/contacts.json';
import axios from 'axios';
import { FontAwesome, IonIcons} from '@expo/vector-icons';

class List extends Component {
    constructor(props){
        super(props);

        this.state= {
            list: null,
            refreshing: false,
        };

        this.onPress = this.onPress.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.componentDidMount =this.componentDidMount.bind(this);

    }
    static navigationOptions = {
        title:"Contacts",
        headerTintColor:'white'
    }

    keyExtractor(item, index) {
        return `${index}`;
    }

    renderSeparator(){
        return (
          <View
          style={styles.separator}
          />
          );
    }

    onPress(item) {
        this.props.navigation.navigate('Detail', {
            Contact: item,
        })
    }

    componentDidMount(){
     this.refreshData();
 }

 refreshData() {
    this.setState({refreshing: true})
    axios.get("https://robocontacts.herokuapp.com/api/contacts?random").then(({data}) =>{
    this.setState({list: data, refreshing: false})
  });
}

renderItem({item}) {
    return(
        <View style={styles.contacts}>
        <TouchableHighlight
        style={styles.touch}
        onPress={() => this.onPress({item})}
        underlayColor='#e4e4e4'
        >
        <Text style={styles.contact}>
        {item.name}
        </Text>
        </TouchableHighlight>
        </View>
        )
}

render() {
    return(
        <FlatList
        style={styles.flatlist}
        data={this.state.list}
        renderItem={this.renderItem}
        refreshControl={
          <RefreshControl
            onRefesh={this.refreshData}
            refreshing={this.state.refreshing}
          />
        }
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        />
        )
}
}

const styles = {
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    contacts:{
        padding: 10,
        height:50,
        justifyContent:'center',
    },
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: "#ddd",
      color:'#ddd',
      marginLeft:10,
    },
      touch: {
        backgroundColor:"#fff",
        height:50,
    },
    contact: {
        flex:1,
        fontSize:18,
        paddingTop:10,
    },
    flatlist: {
        view:'flex',
    }
};



export default List;