import { View , Text} from 'react-native';
import React , {Component} from 'react';



export default class user extends Component{
  render(){
    return(
      <View style={{backgroundColor:'yellow' ,justifyContent:'center', flex:1 , alignItems:'center'}}>
        <Text> USER</Text>
      </View>

    );
  }
}
