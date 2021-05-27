import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

export default function CounterApp() {
  const [state, setState] = useState(0);

  const counterAdd = () => {
    setState(prevState => prevState + 1);
  };

  const counterRemove = () => {
    setState(prevState => prevState - 1);
  };

  if (state < 0) {
    throw new Error('Value should be Postitive');
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => {
            counterAdd();
          }}
          android_ripple={{color: 'silver'}}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 6,
            backgroundColor: 'silver',
          }}>
          <Text> + </Text>
        </Pressable>

        <Text style={{paddingHorizontal: 6}}> {state} </Text>

        <Pressable
          onPress={() => {
            counterRemove();
          }}
          android_ripple={{color: 'silver'}}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 6,
            backgroundColor: 'silver',
          }}>
          <Text> - </Text>
        </Pressable>
      </View>
    </>
  );
}
