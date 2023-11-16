import { Animated, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, {useState, useRef} from 'react';
import { ArrowLeft, Like1, Receipt21, Message, Share, More, BookSaved } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { BlogList } from '../../../data';
import { fontType, colors } from '../../assets/theme';
const BookmarkDetail = ({ route }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });
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
      <Animated.View style={[styles.header, {transform:[{translateY:headerY}]}]}>
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
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
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
      </Animated.ScrollView>
      <Animated.View style={[styles.bottomBar, {transform:[{translateY:bottomBarY}]}]}>
        <Like1
          color={colors.black()}
          variant="Linear"
        />
        <BookSaved
          color={colors.black()}
          variant="Linear"
        />
      </Animated.View>
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
    backgroundColor: 'rgba(119, 188, 255, 0.3)',
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'rgba(119, 188, 255, 0.3)',
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