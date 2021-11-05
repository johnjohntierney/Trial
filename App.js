import * as React from 'react'
import { View, Text, StyleSheet, Image, toucho, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider, Button, Col, Input, Container, Row, Grid, Heading } from 'native-base'
import logo from './assets/pizza.jpg'

//This section is complete
function HomeScreen({ navigation }) {
  const [text, setText] = React.useState('');

  


  

  return (
    <Container>
        <Grid>
            <Col style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'olive'}}>
             <Image source={logo} style={{ width: 280, height: 180 }} /> 
            </Col>
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