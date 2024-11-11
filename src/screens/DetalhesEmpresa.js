// src/screens/DetalhesEmpresa.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote expo/vector-icons instalado
import tw from 'twrnc';

const DetalhesEmpresa = ({ route, navigation }) => {
    const { nome, areaAtuacao, cpfCnpj, responsavel, contato, foto } = route.params;

    return (
        <View style={tw`flex-1 bg-blue-50 p-6`}>
            {/* Botão de Voltar */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-10 left-4`}>
                <Ionicons name="arrow-back" size={28} color="#3B82F6" />
            </TouchableOpacity>

            <View style={tw`flex-1 items-center justify-center mt-10`}>
                {/* Foto e Nome da Empresa */}
                <View style={tw`items-center mb-6`}>
                    {foto ? (
                        <Image source={{ uri: foto }} style={tw`w-32 h-32 rounded-full mb-4 border-4 border-blue-300`} />
                    ) : (
                        <Ionicons name="business" size={80} color="#3B82F6" style={tw`mb-4`} />
                    )}
                    <Text style={tw`text-3xl font-bold text-blue-800 mb-1`}>{nome}</Text>
                    <Text style={tw`text-lg text-blue-600`}>{areaAtuacao}</Text>
                </View>

                {/* Detalhes da Empresa */}
                <View style={tw`bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md`}>
                    <DetailItem label="Área de Atuação" value={areaAtuacao} />
                    <DetailItem label="CPF/CNPJ" value={cpfCnpj} />
                    <DetailItem label="Responsável" value={responsavel} />
                    <DetailItem label="Contato" value={contato} /> {/* Exibe contato */}
                </View>
            </View>
        </View>
    );
};

// Componente para exibir cada detalhe com um layout padronizado
const DetailItem = ({ label, value }) => (
    <View style={tw`flex-row justify-between mb-4`}>
        <Text style={tw`text-gray-500 font-semibold`}>{label}:</Text>
        <Text style={tw`text-gray-800`}>{value}</Text>
    </View>
);

export default DetalhesEmpresa;
