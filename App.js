import * as React from 'react'
import { Text, StyleSheet, Image, } from 'react-native'


import { NativeBaseProvider, Button, Input, Container, Item, Heading, } from 'native-base'
import { Col, Row, Grid } from "react-native-easy-grid"
import logo from './assets/pizza.jpg'


function App() {
  return (
      <NativeBaseProvider>
        <Grid>
          <Row style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#008c45'}}>
             <Image source={logo} style={{ width: 280, height: 180 }} /> 
            </Row>
            <Row style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
              <Heading size="xl">Mario's Pizza</Heading>
              <Text size="lg">The best pizza in Belfast</Text>
              </Row>
              
              <Row style={{alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#cd212a'}}>
              <Input 
                  placeholder='Email address' 
                  style={ styles.textBox }
                  />
                  <Button 
                  onPress={() => navigation.navigate('Welcome', {myName: Text, MyName: Text})} block bordered primary>
                <Text>Get updates from Mario's Pizza</Text>
              </Button>
          </Row>
        </Grid>
        </NativeBaseProvider>
          
  );
}

    
const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'white',
    width: 250,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#D3D3D3',
    width: 250,
  },
  image: {
    width: 405, 
    height: 259,
  },
})

export default App;