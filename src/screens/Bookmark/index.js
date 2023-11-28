import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { Add, Edit } from 'iconsax-react-native';
import { BlogList } from '../../../data';
import { ItemBookmark } from '../../components';
import { fontType, colors } from '../../assets/theme';
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();
const KoleksiPostingan = () => {
  return (
    <View style={styles.headerKoleksiPostingan}>
      <View style={styles.KoleksiPostinganTitleContainer}>
        <Text style={styles.textSeni}>Koleksi Postingan Kesenian</Text>
      </View>

      <View style={{ ...styles.listBlog }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          {BlogList.map((item, index) => (
            <ItemBookmark item={item} key={index} />
          ))}
        </View>
      </View>
    </View>
  );
};

const KoleksiVideo = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.KoleksiPostinganTitleContainer}>
        <Text style={styles.textSeni}>Koleksi Video Kesenian</Text>
      </View>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemSeniDaerah.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniDaerah.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/7a/2a/66/7a2a66f079a0848204dd90cafe6a5439.jpg',
              }}
            >
              <View style={itemSeniDaerah.cardContent}>
                <View style={itemSeniDaerah.cardInfo}>
                  <Text style={itemSeniDaerah.cardTitle}>
                    Ponorogo
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemSeniDaerah.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniDaerah.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/c9/4d/c3/c94dc3cb8aaeddbe02b821276997aeb2.jpg',
              }}
            >
              <View style={itemSeniDaerah.cardContent}>
                <View style={itemSeniDaerah.cardInfo}>
                  <Text style={itemSeniDaerah.cardTitle}>
                    Banyuwangi
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};
const Bookmark = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Koleksi Saya</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 24, gap: 10, paddingVertical: 10 }}>
          <KoleksiVideo />
          <KoleksiPostingan />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("AddKoleksi")}
      >
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  imageBanner: {
    backgroundColor: 'rgba(119, 188, 255, 0.3)',
    width: 'auto',
    height: 200,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  headerKoleksiPostingan: {
    paddingTop: 16,
  },
  headerSeniDaerah: {
    paddingTop: 16,
  },
  titleContainer: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: 'rgba(119, 188, 255, 1)',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: 'rgba(119, 188, 255, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    fontSize: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  textSeni: {
    fontSize: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginRight: 8,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  notificationContainer: {
    // backgroundColor: 'white',
    // padding: 8,
    // borderRadius: 100
  },
  profileContainer: {
    marginLeft: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtonContainer: {
    paddingLeft: 14,
  },
  searchButton: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'rgba(119, 188, 255, 0.4)',
  },
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    top: 60,
    right: 25,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',

  },
  modalItem: {
    fontSize: 16,
    marginBottom: 12,
    color: 'black',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 0,
  },
  KoleksiPostinganTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
const itemKoleksiPostingan = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
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
const itemSeniDaerah = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

