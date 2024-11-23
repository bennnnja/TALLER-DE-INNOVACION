import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from 'expo-camera'; // Usamos CameraView como pediste
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const Scan = ({ navigation }) => {
  const [facing, setFacing] = useState(CameraView.Back); // Usamos el tipo de cámara en back por defecto
  const [permission, requestPermission] = useCameraPermissions(); // Usamos el hook de permisos
  const [qrData, setQrData] = useState(null); // Estado para almacenar los datos del QR

  useEffect(() => {
    if (permission?.granted) {
      console.log("Permiso de cámara concedido");
    } else if (permission !== null) {
      console.log("Permiso de cámara denegado");
    }
  }, [permission]);

  if (permission === null) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Función que se ejecuta cuando se escanea un código QR
  function onBarCodeRead(result) {
    console.log("QR Code scanned:", result.data); // Verificar datos del QR
    setQrData(result.data); // Almacenar los datos del QR escaneado

    // Agregar un log para asegurarnos de que el evento se dispara
    if (result.data) {
      console.log("QR data detected: ", result.data);
    } else {
      console.log("No QR data found");
    }
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', marginTop: SIZES.padding * 4, paddingHorizontal: SIZES.padding * 3 }}>
        <TouchableOpacity
          style={{
            width: 45,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={icons.close}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.white
            }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Scan for Payment</Text>
        </View>
      </View>
    );
  }

  function renderScanFocus() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={images.focus}
          resizeMode="stretch"
          style={{
            marginTop: "-55%",
            width: 200,
            height: 300
          }}
        />
      </View>
    );
  }

  function renderPaymentMethods() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          padding: SIZES.padding * 3,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          backgroundColor: COLORS.white
        }}
      >
        <Text style={{ ...FONTS.h4 }}>Another payment methods</Text>
        {/* Agregar aquí otros botones si es necesario */}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        cameraType={facing}
        onBarCodeScanned={onBarCodeRead}  // Aquí usamos onBarCodeRead para manejar el escaneo
      >
        {renderHeader()}
        {renderScanFocus()}
        {renderPaymentMethods()}
        {qrData && (
          <View style={styles.qrDataContainer}>
            <Text style={styles.qrDataText}>QR Data: {qrData}</Text> {/* Mostramos el dato del QR escaneado */}
          </View>
        )}
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  qrDataContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  qrDataText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Scan;
