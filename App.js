import * as React from "react";
import { Button, Text, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Input, Container, Heading } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import logo from "./assets/pizza.jpg";

function HomeScreen({ navigation }) {
  const [userEmail, setEmailAddress] = React.useState("");
  return (
    <NativeBaseProvider>
      <Grid>
        <Row>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#008c45",
            }}
          >
            <Image source={logo} style={{ width: 280, height: 180 }} />
          </Col>
        </Row>

        <Col
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <Heading size="xl">Mario's Pizza</Heading>
          <Text size="lg">The best pizza in Belfast</Text>
        </Col>

        <Col
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            backgroundColor: "#cd212a",
          }}
        >
          <Input
            placeholder="Email address"
            backgroundColor="white"
            onChangeText={(email) => setEmailAddress(email)}
          />

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Button
              title="Get updates from Mario's Pizza"
              onPress={() => navigation.navigate("Welcome", {})}
              block
              bordered
              primary
            ></Button>
          </View>
        </Col>
      </Grid>
    </NativeBaseProvider>
  );
}

function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#cd212a",
      }}
    >
      <Button
        title="Welcome to Mario's
        We will send updates to { userEmail }"
        onPress={() =>
          navigation.navigate("Welcome", { userEmail: Text, MyName: Text })
        }
        block
        bordered
        primary
      ></Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
