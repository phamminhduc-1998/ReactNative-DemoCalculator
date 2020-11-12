import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';




export default function App() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState("");
  const [allowState, setAllowState] = useState(false);
  const firstRow = ["7", "8", "9", "+"]
  const secRow = ["4", "5", "6", "-"]
  const thirdRow = ["1", "2", "3", "*"]
  const fourthRow = ["=", "0", ".", "/"]
  return (
    <View style={styles.container}>
      <View
        style={styles.box1}>
        <Text style={
          {
            width: "100%",
            padding: 25,
            backgroundColor: "gray",
            fontSize: 30
          }
        }>{show}</Text>
      </View>
      <View
        style={styles.box2}
      >

        <Text
          style={styles.button}
          onPress={
            () => setShow("")
          }
        >AC
           </Text>
        <Text
          style={styles.button}
          onPress={
            () => setShow(show.slice(0, show.length - 1))
          }
        >Del
           </Text>

      </View>
      <View
        style={styles.box2}
      >

        {
          firstRow.map((text) => {
            return <Text
              style={styles.button}
              key={text}
              onPress={
                () => {
                  setShow(show + text)
                }
              }
            >{text}

            </Text>
          })
        }
      </View>
      <View
        style={styles.box2}
      >
        {
          secRow.map((text) => {
            return <Text
              style={styles.button} key={text}
              onPress={
                () => {
                  setShow(show + text)
                }
              }>{text}</Text>
          })
        }
      </View>
      <View
        style={styles.box2}
      >
        {
          thirdRow.map((text) => {
            return <Text
              style={styles.button} key={text}
              onPress={
                () => {
                  setShow(show + text)
                }
              }>{text}</Text>
          })
        }
      </View>
      <View
        style={styles.box2}
      >
        {
          fourthRow.map((text) => {
            return <Text
              style={styles.button} key={text}
              onPress={
                () => {
                  switch (text) {
                    case "=":
                      {
                        try {
                          setShow(eval(show));
                        }
                        catch {
                          setTimeout(() => {
                            setShow("")
                          }, 1000)
                          setShow("Syntax Error")
                        }
                      }
                      break;
                    default:
                      setShow(show + text)
                      break
                  }
                }
              }>{text}</Text>
          })
        }
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",

  },
  input: {
    padding: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {

    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 50, textAlignVertical: "center"
  },
  box1: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "stretch"
  }
});
