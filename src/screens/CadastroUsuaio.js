// src/screens/CadastroUsuario.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroUsuario = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [contato, setContato] = useState('');

    const handleCadastro = async () => {
        if (!nome || !email || !contato) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const usuarioData = {
            nome,
            email,
            contato,
        };

        try {
            const storedUsuarios = await AsyncStorage.getItem('usuarios');
            const usuarios = storedUsuarios ? JSON.parse(storedUsuarios) : [];
            usuarios.push(usuarioData);

            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios));
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
            navigation.navigate('TelaDeAnuncio');
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar os dados. Tente novamente.');
        }
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <View style={tw`w-11/12 max-w-lg`}>
                <View style={tw`bg-green-500 p-4 rounded-t items-center`}>
                    <Text style={tw`text-xl font-bold text-white`}>Cadastro Usuário</Text>
                </View>
                <View style={tw`bg-white p-8 shadow-md rounded w-full`}>
                    <TextInputField label="Nome:" value={nome} onChangeText={setNome} />
                    <TextInputField label="Email:" value={email} onChangeText={setEmail} />
                    <TextInputField label="Contato:" value={contato} onChangeText={setContato} />

                    <Button title="Cadastrar" color="#10B981" onPress={handleCadastro} />
                </View>
            </View>
        </View>
    );
};

const TextInputField = ({ label, value, onChangeText }) => (
    <View style={tw`mb-4`}>
        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>{label}</Text>
        <TextInput style={tw`border rounded w-full py-2 px-3 bg-green-100`} value={value} onChangeText={onChangeText} />
    </View>
);

export default CadastroUsuario;
