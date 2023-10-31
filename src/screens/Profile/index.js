import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Heart, Logout, LogoutCurve, Setting, Setting2, UserEdit } from 'iconsax-react-native';
import React from 'react';

import { ProfileData, BlogList } from '../../../data';
import { ItemSmall } from '../../components';
import { fontType, colors } from '../../assets/theme';

const data = BlogList.slice(5);
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1,}}>
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
                uri: ProfileData.profilePict,
              }}
              resizeMode={'cover'}
            />
            <View style={{ alignItems: 'center' }}>
              <Text style={profile.name}>{ProfileData.name}</Text>
              <View style={{ flexDirection: 'row', gap: 40, borderRadius: 25, backgroundColor: 'lightgrey', padding: 10 }}>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <Text style={profile.sum}>29</Text>
                  <Text style={profile.tag}>Posted</Text>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <Text style={profile.sum}>
                    1000
                  </Text>
                  <Text style={profile.tag}>Following</Text>
                </View>
                <View style={{ alignItems: 'center', gap: 5 }}>
                  <Text style={profile.sum}>
                    10
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
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, borderRadius: 15 }}>
              <LogoutCurve color={colors.black()} variant="Linear" size={24} />
              <Text style={{ color: 'black', marginLeft: 10, fontSize: 20 }} >Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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