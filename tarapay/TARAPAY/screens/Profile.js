import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Profile = () => {
    const user = {
        name: "Juan Pérez", // Cambia el nombre aquí o hazlo dinámico
        age: 28, // Cambia la edad aquí
        photo: require('../assets/icons/user.png'), // Asegúrate de tener una imagen adecuada
    };

    return (
        <View style={styles.container}>
            {/* Foto de perfil */}
            <Image source={user.photo} style={styles.photo} />

            {/* Nombre del usuario */}
            <Text style={styles.name}>{user.name}</Text>

            {/* Edad del usuario */}
            <Text style={styles.age}>Edad: {user.age} años</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    age: {
        fontSize: 18,
        color: '#666',
    },
});

export default Profile;
