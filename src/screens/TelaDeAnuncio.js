// src/screens/TelaDeAnuncio.js

import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaDeAnuncio = ({ navigation }) => {
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        const fetchEmpresas = async () => {
            try {
                const storedEmpresas = await AsyncStorage.getItem('empresas');
                if (storedEmpresas) {
                    setServiceList(JSON.parse(storedEmpresas));
                }
            } catch (error) {
                console.error('Erro ao carregar os dados', error);
            }
        };

        fetchEmpresas();
    }, []);

    return (
        <ScrollView contentContainerStyle={tw`flex-1 items-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-4`}>
            <View style={tw`w-full py-4 bg-blue-600 text-center shadow-md mb-4`}>
                <Text style={tw`text-2xl font-extrabold text-white`}>Empresas Cadastradas</Text>
            </View>

            {serviceList.length === 0 ? (
                <Text style={tw`text-gray-600 text-center`}>Nenhuma empresa cadastrada.</Text>
            ) : (
                serviceList.map((service, index) => (
                    <TouchableOpacity
                        key={index}
                        style={tw`flex-row items-center p-4 mb-4 bg-white rounded-lg shadow-md w-full max-w-md border border-blue-300`}
                        onPress={() => navigation.navigate('DetalhesEmpresa', service)}
                    >
                        {service.foto && (
                            <Image
                                source={{ uri: service.foto }}
                                style={tw`w-16 h-16 rounded-full mr-4 border border-blue-300`}
                            />
                        )}
                        <View>
                            <Text style={tw`text-blue-800 font-semibold text-lg`}>{service.nome}</Text>
                            <Text style={tw`text-blue-600 text-sm`}>{service.areaAtuacao}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            )}

            <View style={tw`mt-6 w-full max-w-md`}>
                <Button
                    title="Home"
                    color="#3B82F6"
                    onPress={() => navigation.popToTop()}
                />
            </View>
        </ScrollView>
    );
};

export default TelaDeAnuncio;
