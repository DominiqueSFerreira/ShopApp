import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Center, Heading, VStack } from "native-base";
import { Input } from '../../Components/Input/Input';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '../../Components/Button/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-tiny-toast';
import uuid from 'react-native-uuid';
import { CEPController } from "../../Controller/CEPController";
import CEPModel from "../../Model/CEPModel";

type FormDataProps = {
    id: any
    nome: string;
    email: string;
    telefone: string;
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    localidade: string;
    uf: string
}

const schemaRegister = yup.object({
    nome: yup.string().required("Nome é obrigatório").min(3, "Informe no minimo 3 digitos"),
    email: yup.string().required("Email é obrigatório").min(6, "Informe no minimo 6 digitos").email("E-mail informado não é valido"),
    telefone: yup.string().required("Telefone é obrigatório"),
    cep: yup.string().required("CEP é obrigatório"),
    logradouro: yup.string().required("Rua é obrigatório"),
    numero: yup.string().required("Número é obrigatório"),
    bairro: yup.string().required("Bairro é obrigatório"),
    localidade: yup.string().required("Cidade é obrigatório"),
    uf: yup.string().required("UF é obrigatório"),
})

export const Supermercado = ({ navigation }) => {

  const {control, handleSubmit, formState: {errors}}  = useForm<FormDataProps>({
      resolver: yupResolver(schemaRegister) as any
  });

  async function handlerRegister(data:FormDataProps){
    data.id = uuid.v4()
    console.log(data);
    try{
      const responseData =  await AsyncStorage.getItem('@crud_form:supermercado')
      const dbData = responseData ? JSON.parse(responseData!) : [];
      console.log(dbData);
      const previewData = [...dbData, data];

      await AsyncStorage.setItem('@crud_form:supermercado', JSON.stringify(previewData))
      Toast.showSuccess("Supermercado registrado com sucesso")
    }catch (e){
      Toast.showSuccess("Erro ao registrar supermercado "+e)
    }


  }

  const [cep, setCEP] = useState("")
  const [ceps, setCEPs] = useState<CEPModel[]>([]);  
  
  const handlerSeacher = () => {
       try {
          CEPController.fetchCEP(cep).then(()=>{
            setCEPs([...CEPController.getCEPs()]);
            console.log(ceps);                      
  
      });
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  return (
    <KeyboardAwareScrollView>
      <VStack bgColor="white" flex={1} px={5} pb={100}>          
          <Center>
            <Heading marginBottom={50} marginY={50}>Lista de Supermercados</Heading>            
            <Controller 
              control={control}
              name="nome"
              render={({field: {onChange}})=>(
              <Input
                placeholder='Nome'
                onChangeText={onChange}
                errorMessage={errors.nome?.message}
              />
              )}
            />
            <Controller 
              control={control}
              name="email"
              render={({field: {onChange}})=>(
              <Input
                placeholder='E-mail'
                onChangeText={onChange}
                errorMessage={errors.email?.message}
              />
              )}
            />
            <Controller 
              control={control}
              name="telefone"
              render={({field: {onChange}})=>(
              <Input
                placeholder='Telefone'
                onChangeText={onChange}
                errorMessage={errors.telefone?.message}
              />
              )}
            />
            <Controller 
              control={control}
              name="cep"
              render={({field: {onChange}})=>(
              <Input
                placeholder='CEP'
                onChangeText={onChange}                
                errorMessage={errors.cep?.message}
              />                          
              )}                      
            />
            <Button title="Buscar" onPress={handlerSeacher} marginBottom={10}></Button>
            <Controller 
              control={control}
              name="logradouro"              
              render={({field: {onChange}})=>(
              <Input
                placeholder='Rua'
                onChangeText={onChange}
                errorMessage={errors.logradouro?.message}                
              />
              )}
            />
            <Controller 
              control={control}
              name="numero"
              render={({field: {onChange}})=>(
              <Input
                placeholder='Número'
                onChangeText={onChange}
                errorMessage={errors.numero?.message}
              />
              )}
            />
            <Controller 
              control={control}
              name="bairro"
              render={({field: {onChange}})=>(
              <Input
                placeholder='Bairro'
                onChangeText={onChange}
                errorMessage={errors.logradouro?.message}                
              />
              )}
            />
            <Controller 
              control={control}
              name="localidade"
              render={({field: {onChange}})=>(
              <Input
                placeholder='Cidade'
                onChangeText={onChange}
                errorMessage={errors.localidade?.message}
              />
              )}
            />
            <Controller 
              control={control}
              name="uf"
              render={({field: {onChange}})=>(
              <Input
                placeholder='UF'
                onChangeText={onChange}
                errorMessage={errors.uf?.message}
              />
              )}
            />            
            <Button title="Cancelar" onPress={() => navigation.navigate('Home')} marginBottom={10}></Button>
            <Button title="Salvar" onPress={handleSubmit(handlerRegister)} ></Button>
          </Center>
        </VStack>
  </KeyboardAwareScrollView>
  );
}

