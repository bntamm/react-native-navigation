
import React from "react";
import {StackNavigator, TabNavigator,DrawerNavigator,DrawerItems ,ScrollView  } from 'react-navigation';
import home from './screens/home';
import details from './screens/details';
import menu from './screens/menu';
import user from './screens/user';


export const HomeStack = StackNavigator({
  ManHinh_Home:{
    screen:home,
    navigationOptions:{
      title:'Home'
    }
  },
  ManHinh_Detail:{
    screen:details,
    navigationOptions:{
      title:'Details'
    }
  },
});
export const UserStack = StackNavigator({
  ManHinh_User:{
    screen:user,
    navigationOptions:{
      title:'User'
    },
  },
});

export const Tabbar = TabNavigator({
  Home:{
    screen:HomeStack,
    navigationOptions:{       //Set tên cho từng item trong tabbar
      tabBarLabel:'HOME'
    }
  },
  User:{
    screen:UserStack,
    navigationOptions:{
      tabBarLabel:'USER'
    }
  },
},      {
        tabBarPosition:'bottom',    //set vị trí cho tabbar trên or dưới
        swipeEnabled:true,       //Cho phép chạm tay trượt slide qua màn hình khác
        tabBarOptions:{             //Set nhiều định dạng cho tabbar
          style:{ backgroundColor:'black' },  //Đổi màu tabbar
          inactiveTintColor:'green',    //Đổi màu chữ cho từng item trong tabbar (khi chưa đc nhấn vào)
          activeTintColor:'red',         //Đổi màu chữ cho từng item trong tabbar (đã đc nhấn vào)
                      }
        }
)

export const SideMenu = DrawerNavigator({
  Tab:{
    screen:Tabbar
  }
},

  {
  drawerWith:300,
  drawerPosition:'left',
  contentComponent : menu     //Để setup cứng cái drawer là cái menu, nếu ko setup cứng
                              //thì nó sẽ tự động setup là cái drawer của màn hình mà ta khai báo DrawerNavigator
  }
);
