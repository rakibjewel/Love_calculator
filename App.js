import { ActivityIndicator, Alert, Image,Keyboard } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Left, Right, Button, Icon, Title, Card, CardItem, Text, Body,Content, Form, Item, Input, Label,Thumbnail, View } from 'native-base';
import HeaderComponent from "./Component/HeaderComponent";
import Answer from './Component/Answer';
export default class componentName extends Component {

constructor(){
  super();
  this.state={
    fname:"",
    sname:"",
    result:"",
    loading:false
  }
}


  getApiCall=()=>{
    Keyboard.dismiss()
    this.setState({loading:true});
    console.log(this.state.fname);
    console.log(this.state.sname);
   
 
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
    method:'GET',
    headers: {
      "X-RapidAPI-Key": "9cf6de4273msh512f89fd53df930p1b4fd1jsne9e4d2088133",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    }
  })
    .then((response) => response.json() )
    .then((data)=>{
     this.setState({result:data})
    console.log(data);
    })
    .catch(error => console.log(error))
    
    .finally(()=>{
      this.setState({loading:false})
    })
  }

  render() {
    return (
      <Container>
     
<HeaderComponent />
<Content>

<Card>
           
            <CardItem cardBody>
              <Image source={require('./Images/StockSnap_HYUAOTF9LQ.jpg')} style={{height: 140, width: null, flex: 1}}/>
            </CardItem>
          
          </Card>


          <Form>
            <Item floatingLabel>
              <Label>Your Name</Label>
              <Input onChangeText={(text)=>this.setState({fname:text})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Your Match Name</Label>
              <Input onChangeText={(text2)=>this.setState({sname:text2})} />
            </Item>
          </Form>
        <Button full info style={{marginTop:20}} onPress={this.getApiCall}>
            <Text>Calculate</Text>
          </Button>


 { this.state.loading==true?
 
  <View>
    <ActivityIndicator size="large" color="#ff2233"></ActivityIndicator>
  </View>
:<Answer data={this.state.result}/>
 

 }



        </Content>
    
    </Container>
    );
  }
}
