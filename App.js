import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroEmpresa from './src/screens/CadastroEmpresa';
import TelaDeAnuncio from './src/screens/TelaDeAnuncio';
import DetalhesEmpresa from './src/screens/DetalhesEmpresa';
import TelaInicial from './src/screens/TelaInicial';
import CadastroUsuario from './src/screens/CadastroUsuaio';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="TeleInicial"
          component={TelaInicial}
          options={{
            title: 'TelaInicial',
          }}
        />        
        <Stack.Screen
          name="CadastroEmpresa"
          component={CadastroEmpresa}
          options={{
            title: 'CadastroEmpresa',
          }}
        />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuario}
          options={{
            title: 'CadastroUsuario',
          }}
        />
        <Stack.Screen
          name="TelaDeAnuncio"
          component={TelaDeAnuncio}
          options={{
            title: 'TelaDeAnuncio',
          }}
        />
        <Stack.Screen
          name="DetalhesEmpresa"
          component={DetalhesEmpresa}
          options={{
            title: 'Detalhes da Empresa',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
