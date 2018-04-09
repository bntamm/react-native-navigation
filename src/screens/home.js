import { View , Text,TouchableOpacity, Button } from 'react-native';
import React , {Component} from 'react';



export default class home extends Component{

  render(){
    return(
      <View style={{backgroundColor:'pink' , flex:1 ,justifyContent:'center', alignItems:'center'}}>
        <Text> HOME</Text>

        <TouchableOpacity style={{backgroundColor:'green'}}
        onPress={() => {this.props.navigation.navigate('ManHinh_Detail' , {thamso:'Hello Tam Bui'})}}
        >
        <Text style={{color:'white' , fontSize:20 , padding:10}}>Go to details</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{backgroundColor:'black'}}
        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
        >
        <Text style={{color:'white' , fontSize:20 , padding:10}}>Go to Menu</Text>
        </TouchableOpacity>


        <Button
        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />

      </View>

    );
  }
}
