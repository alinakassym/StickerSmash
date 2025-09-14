import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/stickerPacks/creativity/book.png"),
    require("../assets/images/stickerPacks/creativity/brainstorm.png"),
    require("../assets/images/stickerPacks/creativity/creativity.png"),
    require("../assets/images/stickerPacks/creativity/creativity1.png"),
    require("../assets/images/stickerPacks/creativity/creativity2.png"),
    require("../assets/images/stickerPacks/creativity/creativity3.png"),
    require("../assets/images/stickerPacks/creativity/creativity4.png"),
    require("../assets/images/stickerPacks/creativity/creativity5.png"),
    require("../assets/images/stickerPacks/creativity/creativity6.png"),
    require("../assets/images/stickerPacks/creativity/creativity7.png"),
    require("../assets/images/stickerPacks/creativity/creativity8.png"),
    require("../assets/images/stickerPacks/creativity/drawing-tablet.png"),
    require("../assets/images/stickerPacks/creativity/drawing.png"),
    require("../assets/images/stickerPacks/creativity/learning.png"),
    require("../assets/images/stickerPacks/creativity/light-bulb.png"),
    require("../assets/images/stickerPacks/creativity/paint-tube.png"),
    require("../assets/images/stickerPacks/creativity/paint.png"),
    require("../assets/images/stickerPacks/creativity/rocket.png"),
    require("../assets/images/stickerPacks/creativity/think-different.png"),
    require("../assets/images/stickerPacks/creativity/tool.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
