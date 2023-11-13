import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Receipt21, Clock, Message } from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import { fontType, colors } from '../assets/theme';
const navigation = useNavigation();

const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
}

const ItemBookmark = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookmarkDetail', {blogId: item.id})}>
      <ImageBackground
        style={itemKoleksiPostingan.cardImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
        source={{
          uri: item.image,
        }}
      >
        <View style={itemKoleksiPostingan.cardContent}>
          <View style={itemKoleksiPostingan.textContainer}>
            <Text style={itemKoleksiPostingan.cardTitle}>{item.title}</Text>
            <Text style={itemKoleksiPostingan.cardText}>
              {truncateTextByWords(item.content, 10)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemBookmark;

const itemKoleksiPostingan = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 150,
    height: 250,
    borderRadius: 5,
    margin: '1%',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
    position: 'absolute',
    bottom: 0,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '100%',
  },
  cardTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 16,
    color: colors.white(),
    textShadowColor: 'black', // Warna outline
    textShadowOffset: { width: 1, height: 1 }, // Ukuran outline
    textShadowRadius: 2, // Lebar outlin
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
    textShadowColor: 'black', // Warna outline
    textShadowOffset: { width: 1, height: 1 }, // Ukuran outline
    textShadowRadius: 2, // Lebar outlin
  },
  cardIcon: {
    backgroundColor: colors.black(0.5),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
    width: 30,
    height: 30,
  },
})