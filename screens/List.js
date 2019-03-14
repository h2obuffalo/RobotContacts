import React, {Component} from 'react';
import { TouchableHighlight, Stylesheet, View, Text, FlatList, Image } from 'react-native';
import contactsList from '../assets/contacts.json';
import axios from 'axios';

class List extends Component {
    constructor(props){
        super(props);

        this.state= {
            list: null,
        };

        this.onPress = this.onPress.bind(this);
        this.renderItem = this.renderItem.bind(this);

    }
    static navigationOptions = {
        title:"Contacts",
        headerTintColor:'white'
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
    axios.get("https://robocontacts.herokuapp.com/api/contacts?random").then(({data}) =>{
          this.setState({list: data})
        });
    }

    render() {
        return(
            <FlatList
            data={this.state.list}
            renderItem={this.renderItem}
            onRefesh={this.refreshData}
            pullToRefresh={true}
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
        justifyContent:'center'
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
    fontSize:18,
    justifyContent:'center'
},
};



export default List;