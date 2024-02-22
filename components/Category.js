import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useParams } from "react-router-dom";
import { GalleryContext } from "../contexts/GalleryContext";

const Category = () => {
  const { categoryParam } = useParams();
  const { categories } = useContext(GalleryContext);
  const [films, setFilms] = useState();

  useEffect(() => {
    categories &&
      categories.map((category) => {
        if (category.name.toLowerCase() === categoryParam) {
          setFilms(category.films);
        }
      });
  }, [categories, categoryParam]);

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          All Movies for {categoryParam}
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {films &&
            films.map((film) => (
              <TouchableOpacity
                key={film.id}
                onPress={() =>
                  // Handle navigation to film detail screen
                  console.log(`Navigating to ${categoryParam}/${film.id}`)
                }
                style={{ width: "33.33%", padding: 5 }}
              >
                <Image
                  source={{ uri: film.url }}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Category;