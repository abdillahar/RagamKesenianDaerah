import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, Alert, ImageBackground, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Notification, SearchNormal, Receipt21, Clock, Message, ArrowRight2, } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/theme';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchPress = (text) => {
    setSearchText(text);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleProfilePress = () => {
    toggleModal();
  };

  const handleEditProfile = () => {
    toggleModal();
    // Tambahkan kode untuk tindakan edit profil di sini
  };

  const handleLogout = () => {
    toggleModal();
    // Tambahkan kode untuk tindakan logout di sini
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageBanner}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Rakder</Text>
            </View>
            <View style={styles.notificationContainer}>
              <Notification color={colors.black()} variant="Linear" size={24} />
            </View>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={handleProfilePress}>
                <Image
                  source={{
                    uri: 'https://templates.iqonic.design/sofbox-admin/sofbox-dashboard-html/html/images/user/1.jpg',
                  }}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>


          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Selamat Datang, Abdillahar</Text>
          </View>
          <View style={{ paddingHorizontal: 24, marginTop: 10, }}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Cari Kesenian"
                onChangeText={handleSearchPress}
                value={searchText}
                placeholderTextColor="gray"
              />
              <View style={styles.searchButtonContainer}>
                <TouchableOpacity style={styles.searchButton}>
                  <SearchNormal color={colors.black()} variant="Linear" size={24} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
        <KategoriSeniRupa/>
        <SeniPopuler />
        <JelajahiBerdasarkanDaerah />
        <BeritaSeniRupa />
      </ScrollView>
      <Modal
        visible={isModalVisible}
        animationType="none"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Profil Anda</Text>
              <TouchableOpacity onPress={handleEditProfile}>
                <Text style={styles.modalItem}>Edit Profil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.modalItem}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.modalItem}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

  );
};

const KategoriSeniRupa = () => {
  return (
    <View style={styles.headerSeniPopuler}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Kategori Kesenian</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>

      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 20 }}>
          <View style={{ ...itemKategori.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemKategori.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/19/c5/66/19c566b67e4a8a6f30f88122bd06a890.jpg',
              }}
            >
              <View style={itemKategori.cardContent}>
                <View style={itemKategori.textContainer}>
                  <Text style={itemKategori.cardTitle}>Tari remo</Text>
                  <Text style={itemKategori.cardText}>Merupakan tarian yang berasal dari Jawa timur,Yang bertujuan untuk penyambutan tamu agung</Text>
                </View>

              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const SeniPopuler = () => {
  return (
    <View style={styles.headerSeniPopuler}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Kesenian Lainnya</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>

      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 20 }}>
          <View style={{ ...itemSeniPopuler.cardItem, marginLeft: 0 }}>
            <ImageBackground
              style={itemSeniPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/85/b7/1d/85b71d74a0fab3ad93ab5e4b530c79ab.jpg',
              }}
            >
              <View style={itemSeniPopuler.cardContent}>
                <View style={itemSeniPopuler.textContainer}>
                  <Text style={itemSeniPopuler.cardTitle}>Kuda Lumping</Text>
                  <Text style={itemSeniPopuler.cardText}>Tarian Kuda Lumping ini menggunakan kuda yang terbuat dari bambu atau bahan lainnya yang di anyam dan dipotong menyerupai bentuk kuda, dengan dihiasi rambut tiruan dari tali plastik atau sejenisnya yang di gelung atau di kepang.</Text>
                </View>

              </View>
            </ImageBackground>
          </View>
          <View style={itemSeniPopuler.cardItem}>
            <ImageBackground
              style={itemSeniPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/29/30/c5/2930c534584f2147fe53b49758a95ecd.jpg',
              }}
            >
              <View style={itemSeniPopuler.cardContent}>
                <View style={itemSeniPopuler.textContainer}>
                  <Text style={itemSeniPopuler.cardTitle}>Reog ponorogo</Text>
                  <Text style={itemSeniPopuler.cardText}>Reog Ponorogo merupakan salah satu tradisi masyarakat Ponorogo yang yang masih hidup hingga saat ini. Pertunjukan ini bertujuan mempererat tali silaturahmi masyarakat Ponorogo.</Text>
                </View>
                {/* <View style={itemSeniPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
          <View style={itemSeniPopuler.cardItem}>
            <ImageBackground
              style={itemSeniPopuler.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={{
                uri: 'https://i.pinimg.com/564x/83/a2/e3/83a2e3f9edac49cdd2cdd48ac79c5c76.jpg',
              }}
            >
              <View style={itemSeniPopuler.cardContent}>
                <View style={itemSeniPopuler.textContainer}>
                  <Text style={itemSeniPopuler.cardTitle}>Tari Gandrung</Text>
                  <Text style={itemSeniPopuler.cardText}>Tari yang berasal dari Banyuwangi yang ditujukan atas ras syukur</Text>
                </View>
                {/* <View style={itemSeniPopuler.cardIcon}>
                  <ArrowRight2 color={colors.white()} variant="Linear" size={20} />
                </View> */}
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const JelajahiBerdasarkanDaerah = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Jelajahi Tari Daerah</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
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


const BeritaSeniRupa = () => {
  return (
    <View style={styles.headerSeniDaerah}>
      <View style={styles.seniPopulerTitleContainer}>
        <Text style={styles.textSeni}>Berita Tari</Text>
        <ArrowRight2 color={colors.black()} variant="Linear" size={20} />
      </View>
      <View style={beritaSeniRupa.listCard}>
        <View style={beritaSeniRupa.cardItem}>
          <Image
            style={beritaSeniRupa.cardImage}
            source={{
              uri: 'https://i.pinimg.com/564x/ee/35/70/ee3570331afafe3fcfe24b8e8b934d36.jpg',
            }}
          />
          <View style={beritaSeniRupa.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={beritaSeniRupa.cardCategory}>Pertunjukan reog Ponorogo</Text>
                <Text style={beritaSeniRupa.cardTitle}>
                  Pertuntujukan Reog Ponorogo di upacara adat daerah
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={beritaSeniRupa.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaSeniRupa.cardText}>20 Nov 2022</Text>
              {/* <Message
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaSeniRupa.cardText}>89</Text> */}
            </View>
          </View>
        </View>

      </View>
      <View style={beritaSeniRupa.listCard}>
        <View style={beritaSeniRupa.cardItem}>
          <Image
            style={beritaSeniRupa.cardImage}
            source={{
              uri: 'https://i.pinimg.com/564x/e3/7c/96/e37c96283dc9f3b327cc5a027e6ed22f.jpg',
            }}
          />
          <View style={beritaSeniRupa.cardContent}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{ gap: 5, width: '70%' }}>
                <Text style={beritaSeniRupa.cardCategory}>Kesenian Bantengan</Text>
                <Text style={beritaSeniRupa.cardTitle}>
                  Pertunjukan Bantengan pada acara HUT RI
                </Text>
              </View>
              <Receipt21
                color={colors.grey(0.6)}
                variant="Linear"
                size={20}
              />
            </View>
            <View style={beritaSeniRupa.cardInfo}>
              <Clock
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaSeniRupa.cardText}>29 Agu 2023</Text>
              {/* <Message
                size={10}
                variant="Linear"
                color={colors.grey(0.6)}
              />
              <Text style={beritaSeniRupa.cardText}>89</Text> */}
            </View>
          </View>
        </View>

      </View>
    </View>

  );
};

const beritaSeniRupa = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: 'rgba(0, 0, 0, 0.6)',
  },
  cardImage: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemKategori = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 100,
    height: 100,
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
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
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
const itemSeniPopuler = StyleSheet.create({
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
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
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
  headerSeniPopuler: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerSeniDaerah: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  titleContainer: {
    flex: 1,
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
  seniPopulerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'] ,
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})

export default HomeScreen