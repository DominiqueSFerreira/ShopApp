import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 4
  },
  content: {
    flex: 1,
    padding: 22,
    color: '#888D97',
    fontSize: 13,
  },
  nome: {
    fontSize: 15,
    lineHeight: 18,
    color: '#3D434D',
    fontWeight: 'bold',
  },
  button: {
    height: 80,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E3E3E3',
  }
});