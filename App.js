import * as React from 'react'
import { Text, Image, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, Button, Input, Container, Item, Heading, H1 } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import logo from './assets/pizza.jpg'



//This section is complete
function HomeScreen({ navigation }) {
  const [text, setText] = React.useState('');

  


  

  return (
    <Container>
        <Grid>
          <Row>
            <Col style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'olive'}}>
             <Image source={logo} style={{ width: 280, height: 180 }} /> 
            </Col> 
            </Row>
            <Row>
            <Col style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
              <H1>Mario's Pizza</H1>
              <Text>The best pizza in Belfast</Text>
              </Col>
              </Row>
              <Row>
              <Col style={{alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: 'orangered'}}>
              <Item regular>
                <Input 
                  placeholder='Email address' 
                  backgroundColor='white'
                  value={text} 
                  onChangeText={text => setText(text)}
                  />
                  </Item>
                  <Button onPress={() => navigation.navigate('Welcome', {myEmail: text})} block light>
                <Text>Get updates from Mario's Pizza</Text>
              </Button>
            </Col>
          </Row>
        </Grid>

            


          
  
          </Container>

          
  );
}
    
  









//This section below is complete..............................................
function WelcomeScreen({ route, navigation }) {

  const { myEmail } = route.params;

  return (
    <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orangered' }}>
      <H1>Welcome to Mario's</H1>
      <Text>We will send updates to {myEmail}</Text>
    </Container>
  );
}
//This section above is complete..............................................






//This section below is complete..............................................
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Welcome" component={ WelcomeScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
//This section above is complete..............................................



export default App;