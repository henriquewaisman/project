import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2', // Cor de fundo geral
    flexGrow: 1,
    padding: 20,
    paddingVertical: 20,

  },
  loginWindow: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white', // Cor de fundo da "janela" de login
    borderRadius: 10,
    elevation: 5, // Sombra
  },

  input: {
    width: '100%',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '10%',
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10, // Espaçamento entre campos e botões
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    alignItems: 'center',
    
  },

  palavra: {
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
    borderColor: '#007bff',
    borderRadius: 0,
    alignItems: 'center',
    color: '#000',
  },
  wordButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'transparent', // Fundo transparente
  },
  wordButtonText: {
    color: 'green', // Cor do texto
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Distribui os botões igualmente na linha
    marginTop: 10,
  },
  image: {
    width: 200, // Largura da imagem
    height: 100, // Altura da imagem
    resizeMode: 'contain', // Ajuste da imagem para caber no tamanho definido
    marginBottom: 20, // Espaçamento abaixo da imagem
    borderRadius: 5, // Borda arredondada
  },
  section: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: '10%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial'
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: 'black',
    fontFamily: 'Sans-Serif',
    fontStyle: 'italic'
  },
  warning: {
    fontSize: 12,
    color: 'red',
    marginTop: 10,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2', // Cor de fundo geral
    paddingVertical: 20,
    flexGrow: 1,
  },

  optionButton: {
    paddingVertical: 8, // Reduz o padding vertical
    paddingHorizontal: 20, // Reduz o padding horizontal
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 20, // Aumenta o borderRadius para tornar os botões mais arredondados
    backgroundColor: '#69A546'
  },

  optionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Para sombra no Android
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});


export default styles;