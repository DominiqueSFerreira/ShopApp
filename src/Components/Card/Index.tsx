import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Styles } from './Styles';

export type CardProps = {
    id: any;
    nome: string;
    logradouro: string;
    telefone: string;
    localidade: string;
    cep: string;

}
type Props = {
  data: CardProps;
  onPress: () => void;
}

export function Card({ data, onPress }: Props) { 
  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <View>
        <Text>
            Nome: <Text style={Styles.nome}>{data.nome}</Text>
        </Text>
        <Text>
            Endereço: {data.logradouro}
        </Text>
        <Text>
            Telefone: {data.telefone}
        </Text>
        <Text>
            Localidade: {data.localidade}
        </Text>
        <Text>
            CEP: {data.cep}
        </Text>
        </View>
      </View>

      <TouchableOpacity
        style={Styles.button}
        onPress={onPress}
      >
        <MaterialIcons
          name="edit"
          size={22}
          color="#888D97"
        />
      </TouchableOpacity>
    </View>
  );
}