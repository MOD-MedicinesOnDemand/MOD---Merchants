import React from 'react';
import { 
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  List, 
  ListItem, 
  Thumbnail, 
  Text,
  Body, 
  Left, 
  Right, 
  Badge, 
  Picker, 
  Form, 
  Icon,
  Item as FormItem, } from 'native-base';
import { Notifications,} from 'expo';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import Modal from 'react-native-modalbox';

export default class OrderRequestsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    notification: {},
  }

  componentWillMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({notification: notification});
  };

  render() {
    console.log(JSON.stringify(this.state.notification.data));
    return (
      <Container>
        <Header style={{  backgroundColor:'#fff' }}>
          <View style={ styles.headerViewStyle }>
            <View style={{ marginTop:0 ,marginLeft:0, marginRight:0 , flexDirection: 'row', alignItems: 'center'  }}>
              <View style = {styles.HeaderShapeView}>
                <Text style = {{paddingTop: 0 ,fontSize:20, color: '#555555', fontWeight: 'bold' }}>Order Requests</Text>
              </View>
            </View>
          </View>
        </Header>

        <View style={styles.container}>
        {/*<Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data.data.status)}</Text>*/}
        <ScrollView
            contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.view}>
            <List>
              <ListItem>
                <View style={styles.view}>
                  <View style={{ flexDirection:'row',justifyContent: 'space-between',alignItems:'flex-start' }}>
                    <Text>#11007</Text>
                    <Text>₹ 302</Text>
                  </View>

                  <View style={{ flexDirection:'row',justifyContent: 'space-between',alignItems:'flex-start' }}>
                    <Text style={{ color: '#2f95dc',textAlign: 'center', fontSize:15, fontWeight:'bold' }}>Request</Text>                      
                    <Text note>12:07 pm</Text>    
                  </View>
                </View>
              </ListItem>
            </List>
          </View>

        </ScrollView>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:10,
  },
  boldcolortext:{
    fontWeight:'bold',
    color: '#3498db'
  },
  headerViewStyle:{
    flex:1, 
    flexDirection: 'row',
  },
  HeaderShapeView:{
    paddingLeft: 10,
    justifyContent : 'center',
    borderRadius: 1,
  },
  boldtext:{
    fontWeight:'bold',
  },
  lefttext:{
    fontWeight:'bold',
    fontSize: 30,
    color: '#2980b9'
  },
   pickerStyle: {
    width:160, 
    height:20, 
    justifyContent:'flex-end', 
    alignItems:'center', 
    color:'#000',
  },
  modal: {
    justifyContent: 'flex-start',
  },
  view: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'stretch' 
  },
  innerviewleft: {
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start'
  },
  innerviewright: {
    flexDirection:'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
  },
  boldtext:{
    fontWeight:'bold',
  },
  refreshButtonStyle:{
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius:10,
  },
  refreshIconStyle: {
    fontSize: 20,
    height: 22,
    color: 'black',
  },
});
