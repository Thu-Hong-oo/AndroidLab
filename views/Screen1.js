import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function Screen1({ route, navigation }) {
    const [rating, setRating] = useState(0);
    const [selectedColor, setSelectedColor] = useState('blue');
    const [selectedImage, setSelectedImage] = useState(require('../assets/vs_blue.png'));
    const handleRating = (value) => {
        setRating(value);
    };

    useEffect(() => {
        // Cập nhật màu đã chọn từ Screen2 nếu có
        if (route.params && route.params.selectedColor) {
            setSelectedColor(route.params.selectedColor);
            setSelectedImage(route.params.selectedImage);
        }
    }, [route.params]);

    return (
        <View style={styles.container}>
            <Image style={styles.productImage} source={selectedImage} />
            <Text style={styles.productName}>Điện thoại Vsmart Joy 3- Hàng chính hãng</Text>
            <View style={styles.ratingContainer}>
                {Array(5).fill(0).map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleRating(index + 1)}
                    >
                        <Image
                            source={
                                index + 1 <= rating
                                    ? require('../assets/star.png')
                                    : require('../assets/empty_star.png')
                            }
                            style={styles.starIcon}
                        />
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={styles.viewReviewsButton}
                    onPress={() => {
                        // Xử lý khi nhấn nút xem đánh giá
                    }}
                >
                    <Text style={styles.viewReviewsText}>Xem đánh giá</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>1.790.000 đ</Text>
                <Text style={styles.discountedPrice}>1.950.000đ</Text>
            </View>
            <View style={styles.priceComparisonContainer}>
                <Text style={styles.priceComparisonText}>Ở đâu rẻ hơn, hoàn tiền</Text>
                <TouchableOpacity style={styles.questionMark}>
                    <Image
                        source={require('../assets/Group 1.png')}
                        style={styles.questionMarkIcon}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.colorOptionsButton}
                onPress={() => {
                    navigation.navigate('Screen2', {
                        selectedColor,
                        selectedImage,
                        
                    });
                }}
            >
                <Text style={styles.colorOptionsText}>Chọn màu</Text>
            </TouchableOpacity>
            <Button title="Chọn mua" onPress={() => alert("Đã chọn mua")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    productImage: {
        width: 301,
        height: 361,
        top: -2,
        left: 10
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    starIcon: {
        width: 20,
        height: 20,
    },
    questionMark: {
        width: 20,
        height: 20,
        marginTop: 10,
        flexDirection: 'row',
    },
    viewReviewsButton: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        marginLeft: 10,
    },
    viewReviewsText: {
        color: 'white',
    },
    priceContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    price: {
        fontSize: 16,
    },
    discountedPrice: {
        fontSize: 16,
        marginLeft: 10,
        textDecorationLine: 'line-through',
    },
    priceComparisonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    priceComparisonText: {
        fontSize: 16,
    },
    questionMarkIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    colorOptionsButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    colorOptionsText: {
        color: 'white',
    },
});
