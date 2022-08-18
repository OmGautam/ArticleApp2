import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, FlatList} from 'react-native';
import {Header,AirbnbRating,Icon, Card} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios'

export default class ReccomendedArticleScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const url = "http://localhost:5000/reccomendedarticles"
        axios.get(url).then(response => {
            let details = response.data.data;
            details["duration"] = this.timeConverter(details.duration);
            this.setState({
                articleDetails: details
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    keyExtractor = (item,index) => index.toString();
    renderItems = ({item,index}) => {
        return (
            <Card 
            key = {`Card-${index}`}
            image = {{uri:item.popularLink}}
            imageProps = {{resizeMode:"cover"}}
            featuredTitle = {item.title}
            containerStyle = {styles.cardContainer}
            featuredTitleStyle = {styles.title}
            featuredSubtitle = {`${item.release_date.split("-")[0]} | ${this.timeConverter(time.duration)}`}
            featuredSubtitleStyle = {styles.subtitle}
            />
        )
    }

    render(){
        const{data} = this.state;
        return (
            <View style = {styles.container}>
                <FlatList
                data = {data}
                keyExtractor = {this.keyExtractor}
                renderItem = {this.renderItems}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"blue"
    },
    title:{
        color:"red",
        alignSelf:"flex-start",
        paddingLeft:RFValue(15),
        fontSize:RFValue(25),
        marginTop:RFValue(65)
    },
    subtitle:{
        fontWeight:"bold",
        alignSelf:"flex-start",
        paddingLeft:RFValue(15),
        fontSize:RFValue(25)
    },
    cardContainer:{
        flex:1,
        borderRadius:RFValue(10),
        justifyContent:"center",
        height:RFValue(110),
        marginBottom:RFValue(20)
    }
})