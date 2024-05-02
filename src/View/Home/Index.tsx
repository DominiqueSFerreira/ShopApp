import { Container, Header, Content, Styles } from "./Styles";
import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, CardProps } from '../../Components/Card/Index';
import { FlatList, VStack } from 'native-base';
import { useFocusEffect} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import coverImg from "../../../assets/cover.jpeg";

export const Home = ({ navigation }) => {
  const [data, setData] = useState<CardProps[]>([]);

  useFocusEffect(useCallback(() => {
    handleFetchData()
  },[]))

  async function handleFetchData() {
    try{
      const jsonValue = await AsyncStorage.getItem('@crud_form:supermercado')
      const data =jsonValue ? JSON.parse(jsonValue) : [];
      setData(data);
      return jsonValue
    }catch(error){
      console.log(error);
    } 

  }
  return (
    <Container>
      <Header source={coverImg}>
      </Header>    
      <KeyboardAwareScrollView>
        <VStack bgColor="gray" flex={1} px={5} pb={100}>
              <FlatList
                  data={data}
                  keyExtractor={item=>item.id}
                  style={Styles.list}
                  contentContainerStyle={Styles.listContent}
                  renderItem={({item}) => <Card data={item} onPress={() => navigation.navigate('Alterar', {id: item.id})} />} 
              />  
        </VStack>
      </KeyboardAwareScrollView>
    </Container>       
  );
}
