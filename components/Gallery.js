import React, { useContext, useMemo } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { GalleryContext } from "../contexts/GalleryContext";

const Gallery = () => {
  const { categories } = useContext(GalleryContext);

  const memoizedCategories = useMemo(() => {
    return categories;
  }, [categories]);

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        {memoizedCategories &&
          memoizedCategories.map((category, index) => (
            <View key={index}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>{category.name}</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                {category.films.map((film) => (
                  <TouchableOpacity
                    key={film.id}
                    onPress={() =>
                      // Handle navigation to film detail screen
                      console.log(`Navigating to ${category.name.toLowerCase()}/${film.id}`)
                    }
                    style={{ marginRight: 10 }}
                  >
                    <Image
                      source={{ uri: film.url }}
                      style={{
                        width: 200,
                        height: 300,
                        borderRadius: 8,
                      }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Gallery;