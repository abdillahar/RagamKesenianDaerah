import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { ArrowLeft, Like1, Receipt21, Message, Share, More, BookSaved } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../assets/theme';
const BookmarkDetail = ({ route }) => {
  const { blogId } = route.params;
  const [iconStates, setIconStates] = useState({
    liked: { variant: 'Linear', color: colors.grey(0.6) },
    bookmarked: { variant: 'Linear', color: colors.grey(0.6) },
  });
  const selectedBlog = BlogList.find(blog => blog.id === blogId);
  const navigation = useNavigation();
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            color={colors.black()}
            variant="Linear"
            size={24}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
          <More
            color={colors.black()}
            variant="Linear"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            style={styles.image}
            source={{
              uri: selectedBlog.image,
            }}
            resizeMode={'cover'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={styles.category}>{selectedBlog.category}</Text>
          <Text style={styles.date}>{selectedBlog.createdAt}</Text>
        </View>
        <Text style={styles.title}>{selectedBlog.title}</Text>
        <Text style={styles.content}>{selectedBlog.content}</Text>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Like1
          color={colors.black()}
          variant="Linear"
        />
        <BookSaved
          color={colors.black()}
          variant="Linear"
        />
      </View>
    </View>
  );
};
export default BookmarkDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.black(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  content: {
    color: colors.black(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 14,
    lineHeight: 20,
    marginTop: 15,
  },
});