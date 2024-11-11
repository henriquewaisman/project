// src/screens/TelaInicial.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const TelaInicial = ({ navigation }) => {
    return (
        <View style={tw`flex-1 items-center justify-center bg-blue-100 p-8`}>
            <Text style={tw`text-2xl font-bold text-blue-800 mb-6`}>iBusiness</Text>
            <Text style={tw`text-lg text-gray-700 mb-12 text-center`}>
                Escolha uma das opções para continuar:
            </Text>
            
            <TouchableOpacity
                style={tw`bg-blue-500 w-full py-3 mb-4 rounded-lg`}
                onPress={() => navigation.navigate('CadastroEmpresa')}
            >
                <Text style={tw`text-white text-center font-semibold`}>Cadastrar Empresa</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={tw`bg-green-500 w-full py-3 rounded-lg`}
                onPress={() => navigation.navigate('CadastroUsuario')}
            >
                <Text style={tw`text-white text-center font-semibold`}>Cadastrar como Usuário</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TelaInicial;
