import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import logo from './assest/logo.webp';
import Axtractlogo from './assest/Axtractlogo.jpg';
import Email from './assest/email.jpg';
import Password from './assest/password.jpg';
import Username from './assest/username.jpg';

function App() {
  const [txt, setTxt] = useState("abc");
  const [list, setList] = useState([]);
  let add =()=>{
    if (!txt) {
      alert("Text is Required")
    }
    list.push(txt)
    console.log(list)
    console.log(txt)
    setList([...list])
  }
  function DeleteAll(){
    setList([]);
  }
  let del = (i) => {
    list.splice(i, 1);
    setList([...list])
  };
  let edit = (i) => {
    let a = alert("Enter value", list[i]);
    list[i] = a ;
    setList([...list]);
  }
  return (
    <>
      {/* //// LOGIN///// */}

      {/* <View style={styles.container}>
        <Image source={logo} style={styles.image} />
       <Text style={styles.heading}>
        LOGIN
       </Text>
       <View style={styles.bhai}>
       <TextInput style={styles.input} placeholder='Email' />
       <TextInput  style={styles.input}  placeholder='Password' />
       </View>
       <View style={{alignItems:"flex-end",marginRight:30}}>
        <Text style={{color: '#e65a43',marginTop:10}}>
          Forgot Password?
        </Text>
       </View>
       <View style={{marginTop:20,width:270,height:90,marginLeft:35,marginTop:30}}>
        <Button title='login' color= '#e65a43' />
       </View>
       <View style={{alignItems:"center"}}>
      
      <Text style={{marginTop:-40}}>
        Don't have account? <Text style={{color: '#e65a43'}}>
         Sign in
        </Text>
      </Text>
     </View>
    </View> */}

      {/* /////Signin////// */}

      {/* <View style={styles.container}>
        <Image source={logo} style={styles.image} />
       <Text style={styles.heading}>
       SIGN UP
       </Text>
       <View style={styles.bhai}>
       <TextInput style={styles.input2} placeholder='Username'/>
        
       <TextInput style={styles.input2} placeholder='Email' />
       <TextInput  style={styles.input2}  placeholder='Password' />
       <TextInput style={styles.input2} placeholder='Confirm Password' />
       </View>
       <View style={{alignItems:"flex-end",marginRight:30}}>
       </View>
       <View style={{marginTop:20,width:270,height:90,marginLeft:35,marginTop:30}}>
        <Button title='SIGN UP' color= '#e65a43' />
       </View>
       <View style={{alignItems:"center"}}>
      <Text style={{marginTop:-40}}>
        Already have an account ? <Text style={{color: '#e65a43'}}>
       Login
        </Text>
      </Text>
     </View>
    </View> */}

      {/* ////// Login ////// */}

      {/* <View style={styles.container2}>
      <View style={{alignItems:"center"}}>
        <Image source={Axtractlogo} style={styles.image2} />
        </View>
       <Text style={styles.heading2}>
      Welcome Back!
       </Text>
       <Text style={styles.heading3}>
    Login to your acccount
       </Text>
       <View style={styles.bhai}>

        <View style={{flexDirection:'row'}}>
        <View style={styles.shadow}>
        <Image source={Email} style={styles.icon} />
        </View> 
       <TextInput style={styles.input3} placeholder='Email' />
       </View>
       <View style={{flexDirection:'row'}}>
        <View style={styles.shadow}>
        <Image source={Password} style={styles.icon} />
        </View> 
       <TextInput style={styles.input3} placeholder='Password' />
       </View>
       </View>
       <View style={{alignItems:"flex-end",marginRight:30,marginTop:10}}>
        <Text style={{color:"#0ce1e1"}}>
          Forget Password
        </Text>
       </View>
       <View style={{marginTop:20,width:270,height:90,marginTop:25,}}>
        <TouchableOpacity  style={styles.touch}>
          <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Login</Text>
        </TouchableOpacity>
       </View>

       <View style={{alignItems:"center"}}>
      <Text style={{marginTop:100}}>
        Don't have an account ? <Text style={{color: '#0ce1e1'}}>
       Sign up here
        </Text>
      </Text>
     </View>
    </View>  */}

      {/* /////////// Sign up//////////// */}

      {/* <View style={styles.container2}>
      <View style={{alignItems:"center"}}>
        <Image source={Axtractlogo} style={styles.image3} />
        </View>
       <Text style={styles.heading2}>
      Welcome 
       </Text>
       <Text style={styles.heading3}>
   Create to your acccount
       </Text>
       <View style={styles.bhai}>

       <View style={{flexDirection:'row'}}>
        <View style={styles.shadow2}>
        <Image source={Username} style={styles.icon2} />
        </View> 
       <TextInput style={styles.input3} placeholder='Username' />
       </View>
        <View style={{flexDirection:'row'}}>
        <View style={styles.shadow}>
        <Image source={Email} style={styles.icon} />
        </View> 
       <TextInput style={styles.input3} placeholder='Email' />
       </View>
       <View style={{flexDirection:'row'}}>
        <View style={styles.shadow}>
        <Image source={Password} style={styles.icon} />
        </View> 
       <TextInput style={styles.input3} placeholder='Password' />
       </View>
       </View>
       <View style={{marginTop:20,width:270,height:90,marginTop:25,}}>
        <TouchableOpacity  style={styles.touch}>
          <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Sign up</Text>
        </TouchableOpacity>
       </View>
       <View style={{alignItems:"center"}}>
      <Text style={{marginTop:60}}>
        Already have an account ? <Text style={{color: '#0ce1e1'}}>
       Login here
        </Text>
      </Text>
     </View>
    </View> */}

      {/* ///////////  Login////////////// */}

      {/* <ImageBackground  style={{height:'100%'}}   source={{uri:'https://www.css-gradient.com/imgs/twitter-card.png'}}>
  <View style={styles.container3}>
    
       <Text style={styles.heading4}>
          <Text style={{color:"white",fontWeight:"bold",fontSize:32}} >Login</Text> in your account
       </Text>
       <View style={styles.bhai}>
       <TextInput style={styles.input4} placeholder='Email' />
       <TextInput  style={styles.input4}  placeholder='Password' />
       </View>
       <View style={{alignItems:"flex-start",marginLeft:40,marginTop:5}}>
        <Text style={{color:"white",fontWeight:"bold"}}>
        Don't have an account ? <Text style={{color:"white",fontWeight:"bold"}} > Login</Text>
        </Text>
       </View>
       <View style={{marginTop:20,width:270,height:90,marginLeft:35,marginTop:20}}>
       <TouchableOpacity style={{width:120,height:40,backgroundColor:"white", borderRadius:15, marginLeft:158}} >
          <Text style={{fontSize:18,color:"orange",fontWeight:"bold", marginLeft:35,marginTop:5}}>Login</Text>
        </TouchableOpacity>
       </View>
    
    </View> 
      </ImageBackground> */}

      {/* ///////////Sigup/////////////// */}
      {/* 
            <ImageBackground  style={{height:'100%'}}   source={{uri:'https://www.css-gradient.com/imgs/twitter-card.png'}}>
  <View style={styles.container3}>
    
       <Text style={styles.heading4}>
       <Text style={{color:"white",fontWeight:"bold",fontSize:32}} >Sign up</Text> in your account
       </Text>
       <View style={styles.bhai}>
       <TextInput style={styles.input4} placeholder='Username' />

       <TextInput style={styles.input4} placeholder='Email' />
       <TextInput  style={styles.input4}  placeholder='Password' />
       </View>
       <View style={{alignItems:"flex-start",marginLeft:40,marginTop:5}}>
        <Text style={{color:"white"}}>
         Already have an account ? <Text style={{color:"white",fontWeight:"bold"}} > Login</Text>
        </Text>
       </View>
       <View style={{marginTop:20,width:270,height:90,marginLeft:35,marginTop:20}}>
       <TouchableOpacity style={{width:120,height:40,backgroundColor:"white", borderRadius:15, marginLeft:158}} >
          <Text style={{fontSize:18,color:"orange",fontWeight:"bold", marginLeft:35,marginTop:5}}>Signup</Text>
        </TouchableOpacity>
       </View>
    </View> 
      </ImageBackground> */}

      {/* ////////////Todo/////////// */}

      <ImageBackground
        style={{height: '100%'}}
        source={{uri: 'https://www.css-gradient.com/imgs/twitter-card.png'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 32,
            textAlign: 'center',
            marginTop: 50,
          }}>
          Todo App
        </Text>
        <View style={{marginLeft: 10, marginTop: 20, flexDirection: 'row'}}>
          <TextInput
            style={styles.todo}
            onChangeText={e => setTxt(e)}
            placeholder="Enter Value"
          />
          <TouchableOpacity
          onPress={add}
            style={{
              width: 60,
              height: 38,
              backgroundColor: 'white',
              borderRadius: 15,
              marginLeft: 10,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
                marginLeft: 13,
                marginTop: 5,
              }}>
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={DeleteAll}
            style={{
              width: 72,
              height: 38,
              backgroundColor: 'white',
              borderRadius: 15,
              marginLeft: 5,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
                marginLeft: 11,
                marginTop: 5,
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
        <View>
    
            {list.map((e,i)=>{
              return <>
              <Text style={{fontSize:18,color:"white",marginLeft:30,padding:15}} key={i}><Text style={{marginRight:20,padding:1}} >{e}</Text>
              <TouchableOpacity
           onPress={edit}

            style={{
              width: 52,
              height: 38,
              backgroundColor: 'white',
              borderRadius: 15,
              margin: 100,
              marginTop: 0,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
                marginLeft: 11,
                marginTop: 5,
              }}>
             Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={del}
            style={{
              width: 72,
              height: 38,
              backgroundColor: 'white',
              borderRadius: 15,
              marginLeft: 100,
              marginTop: 20,
             
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'orange',
                fontWeight: 'bold',
                marginLeft: 10,
                marginTop: 5,
              }}>
              Delete
            </Text>
          </TouchableOpacity>
              </Text>
              </>
            })}
        
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff8ed',
    height: '100%',
  },
  container2: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  container3: {
    padding: 10,
    height: '100%',
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 20,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#e65a43',
    textAlign: 'center',
    marginTop: 25,
  },
  heading2: {
    fontSize: 25,
    textAlign: 'center',
    // marginTop:25
  },
  heading3: {
    fontSize: 13,
    // fontWeight:"bold",
    // color: '#e65a43',
    textAlign: 'center',
    // marginTop:25
  },
  heading4: {
    fontSize: 28,
    color: 'white',
    // fontWeight:"bold",
    marginLeft: 10,
    marginTop: 120,
  },
  bhai: {
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: '85%',
    height: 40,
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e65a43',
    borderRadius: 15,
    backgroundColor: '#fff8ed',
    justifyContent: 'center',
    marginVertical: 15,
  },
  input2: {
    width: '85%',
    height: 40,
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e65a43',
    borderRadius: 15,
    backgroundColor: '#fff8ed',
    justifyContent: 'center',
    marginVertical: 15,
  },
  input3: {
    width: '75%',
    height: 40,
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 20,
    elevation: 11,
  },
  input4: {
    width: '85%',
    height: 40,
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 20,
    elevation: 11,
  },
  todo: {
    width: '55%',
    height: 40,
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    // justifyContent: 'center',
    marginVertical: 20,
    elevation: 11,
  },
  image2: {
    width: 120,
    height: 120,
    marginTop: 70,
  },
  image3: {
    width: 120,
    height: 120,
    marginTop: 60,
  },
  icon: {
    width: 25,
    marginLeft: 5,
    height: 25,
  },
  icon2: {
    width: 35,
    marginLeft: 2,
    height: 35,
  },
  shadow: {
    marginTop: 15,
    marginLeft: -10,
    elevation: 11,
    marginRight: 8,
    paddingTop: 12,
    paddingLeft: 8,
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  shadow2: {
    marginTop: 15,
    marginLeft: -10,
    elevation: 11,
    marginRight: 8,
    paddingTop: 8,
    paddingLeft: 6,
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  touch: {
    width: 120,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#0ce1e1',
    alignItems: 'right',
    justifyContent: 'center',
    marginLeft: 120,
  },
  touch2: {
    width: 120,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'right',
    justifyContent: 'center',
    marginLeft: 220,
  },
});

export default App;
