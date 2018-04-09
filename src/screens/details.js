import { View , Text,TouchableOpacity} from 'react-native';
import React , {Component} from 'react';



export default class details extends Component{
  render(){
    return(
      <View style={{ justifyContent:'center',flex:1 , alignItems:'center'}}>
        <Text> DETAILS</Text>


        <TouchableOpacity style={{backgroundColor:'pink'}}
        onPress={() => {this.props.navigation.goBack()}}
        >
        <Text style={{color:'black' , fontSize:20 , padding:10}}>BACK</Text>
        </TouchableOpacity>

        <Text>{this.props.navigation.state.params.thamso}</Text>

      </View>

    );
  }
}
