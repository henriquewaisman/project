// src/screens/CadastroEmpresa.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'react-native-image-picker';

const CadastroEmpresa = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [areaAtuacao, setAreaAtuacao] = useState('');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [contato, setContato] = useState(''); // Campo de contato
    const [foto, setFoto] = useState(null);

    const handleCadastro = async () => {
        if (!nome || !areaAtuacao || !cpfCnpj || !responsavel || !contato) {
            Alert.alert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const empresaData = {
            nome,
            areaAtuacao,
            cpfCnpj,
            responsavel,
            contato, // Dados de contato
            foto,
        };

        try {
            const storedEmpresas = await AsyncStorage.getItem('empresas');
            const empresas = storedEmpresas ? JSON.parse(storedEmpresas) : [];
            empresas.push(empresaData);

            await AsyncStorage.setItem('empresas', JSON.stringify(empresas));
            Alert.alert('Sucesso', 'Empresa cadastrada com sucesso!');
            navigation.navigate('TelaDeAnuncio');
        } catch (error) {
            Alert.alert('Erro', 'Erro ao salvar os dados. Tente novamente.');
        }
    };

    const handleEscolherFoto = () => {
        ImagePicker.launchImageLibrary(
            { mediaType: 'photo', quality: 0.5 },
            response => {
                if (response.assets && response.assets.length > 0) {
                    setFoto(response.assets[0].uri);
                }
            }
        );
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <View style={tw`w-11/12 max-w-lg`}>
                <View style={tw`bg-blue-500 p-4 rounded-t items-center`}>
                    <Text style={tw`text-xl font-bold text-white`}>Cadastro Empresa</Text>
                </View>
                <View style={tw`bg-white p-8 shadow-md rounded w-full`}>
                    <TextInputField label="Nome do empreendimento:" value={nome} onChangeText={setNome} />
                    <TextInputField label="Área de atuação:" value={areaAtuacao} onChangeText={setAreaAtuacao} />
                    <TextInputField label="CPF/CNPJ:" value={cpfCnpj} onChangeText={setCpfCnpj} />
                    <TextInputField label="Responsável:" value={responsavel} onChangeText={setResponsavel} />
                    <TextInputField label="Contato:" value={contato} onChangeText={setContato} /> {/* Campo de contato */}

                    <View style={tw`mb-4 items-center`}>
                        <TouchableOpacity onPress={handleEscolherFoto} style={tw`bg-blue-500 p-2 rounded-lg`}>
                            <Text style={tw`text-white font-semibold`}>Escolher Foto</Text>
                        </TouchableOpacity>
                        {foto && (
                            <Image source={{ uri: foto }} style={tw`w-24 h-24 mt-4 rounded-full`} />
                        )}
                    </View>

                    <Button title="Cadastre-se" color="#3B82F6" onPress={handleCadastro} />
                </View>
            </View>
        </View>
    );
};

const TextInputField = ({ label, value, onChangeText }) => (
    <View style={tw`mb-4`}>
        <Text style={tw`text-gray-700 text-sm font-bold mb-2`}>{label}</Text>
        <TextInput style={tw`border rounded w-full py-2 px-3 bg-blue-100`} value={value} onChangeText={onChangeText} />
    </View>
);

export default CadastroEmpresa;
