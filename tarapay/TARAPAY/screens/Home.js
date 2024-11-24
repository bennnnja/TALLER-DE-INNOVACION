import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
<<<<<<< HEAD
    FlatList,
    TouchableOpacity
} from "react-native"
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const Home = () => {

    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]

    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h1 }}>Hello!</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.gray }}>ByProgrammers</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                    }}
                />
            </View>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 }}>Features</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function renderPromos() {

        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderPromoHeader()}
            </View>
        )

        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>

        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 2.5
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={images.promoBanner}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>
                    </View>
                }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;
=======
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";

const Home = () => {
    // Renderizar el encabezado
    function renderHeader() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Image source={icons.user} style={styles.iconHeader} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.logout} style={styles.iconHeader} />
                </TouchableOpacity>
            </View>
        );
    }

    // Renderizar saldo con el botón de billetera
    function renderSaldo() {
        return (
            <View style={styles.saldoContainer}>
                <Text style={styles.saldoText}>SALDO</Text>
                <View style={styles.saldoRow}>
                    <Text style={styles.saldoAmount}>$$$$$</Text>
                    <TouchableOpacity style={styles.walletButton}>
                        <Image
                            source={icons.wallet}
                            style={styles.walletIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // Renderizar historial y publicidad
    function renderHistorialPublicidad() {
        return (
            <View style={styles.historialPublicidadContainer}>
                {/* Historial */}
                <View style={styles.historialContainer}>
                    <Text style={styles.historialText}>HISTORIAL</Text>
                    <ScrollView style={styles.historialList}>
                        {[...Array(5)].map((_, index) => (
                            <View key={index} style={styles.historialItem}>
                                <Text style={styles.historialItemText}>
                                    Item {index + 1}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                {/* Publicidad */}
                <View style={styles.publicidadContainer}>
                    <Image
                        source={images.promoBanner}
                        style={styles.publicidadImage}
                        resizeMode="cover"
                    />
                </View>
            </View>
        );
    }

    // Renderizar el menú inferior
    function renderMenu() {
        return (
            <View style={styles.menuContainer}>
                <TouchableOpacity>
                    <Image source={icons.home} style={styles.menuIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icons.wallet} style={styles.menuIcon} />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <View style={styles.contentContainer}>
                {renderSaldo()}
                {renderHistorialPublicidad()}
            </View>
            {renderMenu()}
        </SafeAreaView>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#93C9FD", // Color de fondo
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    iconHeader: {
        width: 40,
        height: 40,
        tintColor: "#000", // Color de los iconos
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: "center",
    },
    saldoContainer: {
        width: "100%",
        backgroundColor: "#D6EFFF", // Color del fondo de saldo
        padding: 10,
        borderRadius: 20,
        marginBottom: 20,
    },
    saldoText: {
        fontSize: 22,
        color: "#000", // Color del texto
        textAlign: "center",
    },
    saldoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    saldoAmount: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000", // Color del monto
    },
    walletButton: {
        width: 50,
        height: 50,
        backgroundColor: "#FFFFFF", // Fondo blanco para el botón
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20, // Separación del monto
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    walletIcon: {
        width: 30,
        height: 30,
        tintColor: "#000", // Color del icono de billetera
    },
    historialPublicidadContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 10,
    },
    historialContainer: {
        width: "50%", // Mismo tamaño horizontal que la publicidad
        backgroundColor: "#C8E3FF", // Fondo del historial
        borderRadius: 10,
        padding: 10,
        height: 350, // Altura extendida del historial
        marginRight: 10, // Espacio entre historial y publicidad
    },
    historialText: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    historialList: {
        flex: 1,
    },
    historialItem: {
        backgroundColor: "#FFFFFF", // Fondo de los elementos del historial
        borderRadius: 8,
        padding: 10,
        marginBottom: 8,
    },
    historialItemText: {
        fontSize: 16,
        color: "#000", // Color del texto
    },
    publicidadContainer: {
        width: "45%", // Mismo tamaño horizontal que el historial
        marginLeft: 10, // Espaciado adicional para mantener separación
    },
    publicidadImage: {
        width: "100%",
        height: 500, // Altura extendida de la publicidad
        borderRadius: 10,
    },
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#80B4F7", // Fondo del menú
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    menuIcon: {
        width: 25,
        height: 25,
        tintColor: "#FFFFFF", // Color de los iconos del menú
    },
});

export default Home;
>>>>>>> 23492c230851b9084399b5cc81277c5529318c83
