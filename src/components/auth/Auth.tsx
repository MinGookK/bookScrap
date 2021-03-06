import { View, Text } from 'react-native';
import React from 'react';
import { useGetMe } from '../../hooks/user';
import { useNavigation } from '@react-navigation/core';

export default function Auth({ children }) {
  const { data: userData, isLoading } = useGetMe();
  const navigation = useNavigation();
  if (isLoading) {
    return null;
  } else {
    if (userData?.id) {
      console.log(userData)
      return (
        <View>
          <Text>Auth 컴포넌트</Text>
          {children}
        </View>
      );
    } else {
      navigation.replace('Login');
      return null;
    }
  }
}

//계속 3번씩 실행됨 1번으로 바꾸면 axios횟수가 줄지 않을까?