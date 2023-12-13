import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Heart, Logout, LogoutCurve, Setting, Setting2, UserEdit } from 'iconsax-react-native';
import React, { useEffect, useContext, useRef, useCallback } from 'react';

import { ProfileData, BlogList } from '../../../data';
import { ItemSmall } from '../../components';
import { fontType, colors } from '../../assets/theme';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';
import { useNavigation } from '@react-navigation/native';

const data = BlogList.slice(5);
const Profile = () => {
  const navigation = useNavigation();
  const [profileData, setProfileData] = useState(null);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const user = auth().currentUser;
    const fetchBlogData = () => {
      try {
        if (user) {
          const userId = user.uid;
          const blogCollection = firestore().collection('blog');
          const query = blogCollection.where('authorId', '==', userId);
          const unsubscribeBlog = query.onSnapshot(querySnapshot => {
            const blogs = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
            setLoading(false);
          });

          return () => {
            unsubscribeBlog();
          };
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    const fetchProfileData = () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userRef = firestore().collection('users').doc(userId);

          const unsubscribeProfile = userRef.onSnapshot(doc => {
            if (doc.exists) {
              const userData = doc.data();
              setProfileData(userData);
            } else {
              console.error('Dokumen pengguna tidak ditemukan.');
            }
          });

          return () => {
            unsubscribeProfile();
          };
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);
  const handleLogout = async () => {
    try {
      closeActionSheet();
      await auth().signOut();
      await AsyncStorage.removeItem('userData');
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, }}>
          <Text style={styles.title}>Rakder</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
        <View style={{ gap: 15, }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ ...profile.pic, marginRight: 20 }}
              source={{
                uri: profileData?.photoUrl,
              }}
              resizeMode={'cover'}
            />
            <View style={{ alignItems: 'center' }}>
              <Text style={profile.name}>{profileData?.fullName}</Text>
              <View style={{ flexDirection: 'row', gap: 40, borderRadius: 25, backgroundColor: 'lightgrey', padding: 10 }}>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <Text style={profile.sum}>{profileData?.totalPost}</Text>
                  <Text style={profile.tag}>Posted</Text>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <Text style={profile.sum}>
                    {profileData?.folowingCount}
                  </Text>
                  <Text style={profile.tag}>Following</Text>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <Text style={profile.sum}>
                    {profileData?.followersCount}
                  </Text>
                  <Text style={profile.tag}>Follower</Text>
                </View>
              </View>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
            <TouchableOpacity style={profile.buttonEdit}>
              <Text style={profile.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={profile.buttonEdit}>
              <Text style={profile.buttonText}>Share Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }}></View>
        </View>
        <View style={{ paddingVertical: 10, gap: 10 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, borderRadius: 15 }}>
              <UserEdit color={colors.black()} variant="Linear" size={24} />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }} >Edit Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, borderRadius: 15 }}>
              <Setting color={colors.black()} variant="Linear" size={24} />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }} >Pengaturan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, borderRadius: 15 }}>
              <Heart color={colors.black()} variant="Linear" size={24} />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }} >Koleksi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={openActionSheet}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, borderRadius: 15 }}>
              <LogoutCurve color={colors.black()} variant="Linear" size={24} />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }} >Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleLogout}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
});
const profile = StyleSheet.create({
  pic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: 'black',
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 10,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});