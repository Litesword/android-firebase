import * as React from 'react';  
import { Button, View,StyleSheet, Text, Image, TextInput, TouchableOpacity,} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { launchImageLibrary } from "react-native-image-picker";
import { useState } from "react";

function HomeScreen({ navigation }) {
  const insets =useSafeAreaInsets();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.img}>
     
          <TouchableOpacity onPress={() => navigation.navigate('Notification')} >
          <Image style={styles.noti}  source={require('./assets/notification.png')}  />
          </TouchableOpacity>
          
            <TouchableOpacity onPress={() => navigation.navigate('Editableprofile')}>
          <Image style={styles.male}  source={require('./assets/male.png')}  />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
        <Image style={styles.srchicon} source={require('./assets/serach.png')}/> 
        <TextInput style={styles.inp} editable multiline numberOfLines={2} maxLength={40} placeholder='search' maxFontSizeMultiplier={50}/>
      </View>
      <View style={styles.boxes1}>
    
        <View style={styles.paper1} > 

        <TouchableOpacity onPress={() => navigation.navigate('Department_2')}>
          <Text style={styles.te1} >paper2</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.paper2}>
        <TouchableOpacity onPress={() => navigation.navigate('Department_1')}>
        <Text style={styles.te1}>paper1</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxes}>
        <View style={styles.paper}>
        <TouchableOpacity onPress={() => navigation.navigate('Department_4')}>
        <Text style={styles.te1}>paper4</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.pape}>
        <TouchableOpacity onPress={() => navigation.navigate('Department_3')}>
        <Text style={styles.te1}>paper3</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>  
      <View style={styles.com}>
        <TextInput style={styles.textin} editable  numberOfLines={2} defaultValue='write comment'  maxFontSizeMultiplier={50} />
        <Image style={styles.comin} source={require('./assets/comments1.jpg')}/>
        
        </View> 
    </View>
  );
}
function Notscreen({ navigation }){

  return(
     
      <View style={styles.proco}> 
            
           
      </View>
    );
   }
   function Editprofile({ navigation }){
    




  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [imageUri, setImageUri] = useState("");

  const handleChoosePhoto = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorCode);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setImageUri(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.containe}>
      <View style={styles.navigation}>
        <Button title="Go To Home" onPress={() => {}} />
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.Name}>Name:</Text>
        </View>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <View style={styles.titleContainer}>
          <Text style={styles.EmailId}>Email I'd:</Text>
        </View>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <View style={styles.titleContainer}>
          <Text style={styles.mobileNumberTitle}>Mobile Number:</Text>
        </View>
        <TextInput
          style={styles.input}
          value={mobile}
          keyboardType="numeric"
          onChangeText={setMobile}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={styles.uploadButton}>
            <Button title="Choose Photo" onPress={handleChoosePhoto} />
          </TouchableOpacity>
          <View style={styles.photoPlaceholder}>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Text style={{ color: "gray" }}>Add Photo</Text>
            )}
          </View>
        </View>
        <Button title="Save" onPress={() => {}} />
      </View>
    </View>
  );
};
 function Department1( { navigation}){
    return(
      <View >
          <Text style={styles.de1}>Departments</Text>
          <View style={styles.deonfo}>
          <View style={styles.deonfo2}>
              

              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department1</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department2</Text>
              </View>
              
            </View>
            <View style={styles.deonfo3}>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department3</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department4</Text>
              </View>
              </View>  
          </View>
      </View>
    );
   }
   function Department2( { navigation}){
    return(
      <View>
        <Text style={styles.de1}>Departments</Text>
          <View style={styles.deonfo}>
          <View style={styles.deonfo2}>
              

              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department1</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department2</Text>
              </View>
              
            </View>
            <View style={styles.deonfo3}>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department3</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department4</Text>
              </View>
              </View>  
          </View>
      </View>
    );
   }
   function Department3( { navigation}){
    return(
      <View>
<Text style={styles.de1}>Departments</Text>
          <View style={styles.deonfo}>
          <View style={styles.deonfo2}>
              

              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department1</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department2</Text>
              </View>
              
            </View>
            <View style={styles.deonfo3}>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department3</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department4</Text>
              </View>
              </View>  
          </View>
      </View>
    );
   }
   function Department4( { navigation}){
    return(
      <View>
        <Text style={styles.de1}>Departments</Text>
          <View style={styles.deonfo}>
          <View style={styles.deonfo2}>
              

              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department1</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department2</Text>
              </View>
              
            </View>
            <View style={styles.deonfo3}>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department3</Text>
              </View>
              <View style={styles.deonfo1}>
              <Text style={styles.depar}>Department4</Text>
              </View>
              </View>  
          </View>
      </View>
    );
   }
function Payments({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title=" Am payments page Go back to profile" />
    </View>
  );
}
 
function Contact({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title=" Am Contacts page Go back to profile" />
    </View>
  );
}
function Logout({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title=" am in Log out page Go back to profile" />
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function Mystack(){
  return(
    <Drawer.Navigator >
    <Drawer.Screen name="Profile"  component={HomeScreen} />
    <Drawer.Screen name="Payments" component={Payments} />
    <Drawer.Screen name="Contact and Support" component={Contact} />
    <Drawer.Screen name="Logout" component={Logout} />
    
    
  </Drawer.Navigator>
  );
}
export default function App() {
  return (
   
    <NavigationContainer>
    
  <Stack.Navigator>
  <Stack.Screen name='Mystack' component={Mystack}  options={{headerShown:false}}/>
  <Stack.Screen name='Notification' component={Notscreen} />
  <Stack.Screen name='Editableprofile' component={Editprofile} />
      <Stack.Screen name='Department_2' component={Department2} /> 
      <Stack.Screen name='Department_1' component={Department1} />
      <Stack.Screen name='Department_3' component={Department3} />
      <Stack.Screen name='Department_4' component={Department4} />
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}
const styles = StyleSheet.create({
  container:{
     backgroundColor: '#fff',
    justifyContent: 'center',
  },
  img:{
    marginTop:300,
    flexDirection:"row",
    width:"100%"
  },

  noti:{
    marginTop:150,
    height:40,
    width:40,
    marginLeft:200
  },
  search:{
    height:40,
    marginLeft:60,
    marginTop:10,
    width:"50%",
    borderColor:"black",
   borderWidth:1,
   borderRadius:10,
    flexDirection:"row",
  },
male:{
  marginTop:120,
height:70,
width:70,
marginLeft:29
},
  inp:{
    marginLeft:50,
    alignContent:"center",
    height:50,
    width:"90%",
    
    },
    srchicon:{
      marginTop:10,
      height:25,
      width:25,
      marginLeft:20
    },
    boxes1:{
      marginTop:50,
      marginLeft:30,
      flexDirection:"row-reverse",
      justifyContent:"space-between"
    },
    paper1:{
      marginTop:29,
      alignItems:"center",
      justifyContent:"center",
      height:150,
      width:150,
      marginLeft:25,
      borderColor:"black",
      borderWidth:1
     },
     paper2:{
      alignItems:"center",
      justifyContent:"center",
      marginTop:29,
      marginLeft:29,
      height:150,
      width:150,
      borderColor:"black",
      borderWidth:1
     },
     boxes:{
      marginTop:20,
      marginLeft:30,
      flexDirection:"row-reverse",
      justifyContent:"space-between",
      
    },
   paper:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    borderColor:"black",
      borderWidth:1,
    height:150,
    width:150,
    
   },
   pape:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginLeft:29,
    height:150,
    width:150,
    borderColor:"black",
    borderWidth:1
   },
  te1:{
    fontSize:20,
    color:"black", 
  },
  textin:{
    height:100,
    marginLeft:50,
    fontSize:20,
position:"relative"
 
  },
  com:{
    height:500,
   marginBottom:10,
    marginTop:70,
    flexDirection:"row"
    
  },
  comin:{
    marginTop:20,
    marginLeft:10,
    height:50,
    width:50,
    
  },
  circle:{
    backgroundColor:"red",
    flex:1
  },
  proco:{
    justifyContent:"center",
    alignItems:"center"
  },
  containe: {
    flex: 1,
    padding: 20,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 60,
    marginBottom: 20,
    flexDirection: "row",
  },
  title: {
    height:50,
    width:100,
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    borderWidth: 2,
    padding:9,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  uploadButton: {
    height: 60,
    width: 80,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
    marginBottom: 30,
    marginRight: 20,
    alignItems: "center",
    borderRadius: 10,
  },

  photoPlaceholder: {
    height: 120,
    width: 120,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 30,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  de1:{
    textAlign:"center"
  },
  deonfo:{
    borderColor:"black",
    borderWidth:1,
    height:250,
    width:"80%",
    borderRadius:20,
    marginLeft:40
  },
  deonfo1:{
    justifyContent:"center",
    alignContent:"center",
    borderRadius:20,
    height:100,
    width:"40%",
    borderColor:"black",
    borderWidth:1,
    marginLeft:20,
    marginTop:10
  },
  deonfo2:{
    flexDirection:"row"
  },
  deonfo3:{
    flexDirection:"row"
  },
  depar:{
    marginLeft:12,
  
  }
  });