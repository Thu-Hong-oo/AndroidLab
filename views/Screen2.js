import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Screen2({ route, navigation }) {
    const [productInfo, setProductInfo] = useState({
        color: 'blue',
        image: require('../assets/vs_blue.png'),
        name: 'Điện thoại Vsmart Joy 3',
        category: 'Hàng chính hãng',
        provider: 'Nhà cung cấp: CellphoneS',
    });

    const handleColorChange = (color, image, provider, text) => {
        setProductInfo({
            ...productInfo,
            color,
            image,
            provider,
            text,
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.product}>
                    <Image style={styles.productImage} source={productInfo.image} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{productInfo.name}</Text>
                        <Text style={styles.productCategory}>{productInfo.category}</Text>
                        <Text style={styles.productCategory}>{productInfo.provider}</Text>
                        <Text style={styles.productCategory}>Màu: {productInfo.text}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.productColor}>
                <Text style={styles.productText}>Chọn 1 màu bên dưới</Text>
                <View style={styles.colorOptions}>
                    <TouchableOpacity
                        style={[styles.colorOption, { backgroundColor: '#C5F1FB' }]}
                        onPress={() => handleColorChange('#C5F1FB', require('../assets/vs_silver.png'), 'Nhà cung cấp: SilverPhones', 'Xanh')}>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.colorOption, { backgroundColor: 'red' }]}
                        onPress={() => handleColorChange('red', require('../assets/vs_red.png'), 'Nhà cung cấp: RedMobiles', 'Đỏ')}>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.colorOption, { backgroundColor: 'black' }]}
                        onPress={() => handleColorChange('black', require('../assets/vs_black.png'), 'Nhà cung cấp: BlackTech', 'Đen')}>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.colorOption, { backgroundColor: '#234896' }]}
                        onPress={() => handleColorChange('#234896', require('../assets/vs_blue.png'), 'Nhà cung cấp: CellphoneS', 'Khác')}>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        navigation.navigate('Screen1', {
                            selectedColor: productInfo.color,
                            selectedImage: productInfo.image,
                        });
                    }}
                >
                    <Text style={styles.footerButtonText}>Xong</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        backgroundColor: '#fff',
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImage: {
        width: 112,
        height: 132,
        left: 4,
    },
    productInfo: {
        marginLeft: 10,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    productCategory: {
        fontSize: 16,
    },
    productColor: {
        flex: 3,
        backgroundColor: 'lightgray',
        alignItems: 'top',
    },
    productText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    colorOptions: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    colorOption: {
        width: 85,
        height: 80,
        margin: 10,
    },
    footer: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    footerButton: {
        backgroundColor: '#234896',
        width: 420,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});
