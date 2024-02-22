import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { GalleryContext } from "../contexts/GalleryContext";
import { useParams } from "react-router-dom";

const FilmDetail = () => {
  const { categoryParam, id } = useParams();
  const { categories } = useContext(GalleryContext);
  const [film, setFilm] = useState();

  useEffect(() => {
    categories &&
      categories.map((category) => {
        if (category.name.toLowerCase() === categoryParam) {
          setFilm(category.films.find((f) => f.id === parseInt(id)));
        }
      });
  }, [categories, categoryParam, id]);

  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        {film && (
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>{film.title}</Text>
            <Text>Release Date: {film.release}</Text>
            <Image
              source={{ uri: film.url }}
              style={{ width: 500, height: 300, marginTop: 10 }}
              resizeMode="contain"
            />
            <View style={{ marginTop: 10 }}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>About: </Text>
                {film.description}
              </Text>
            </View>
            <View>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Rated: </Text>
                {film.rated}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, marginTop: 10 }}>Watch Trailer</Text>
              <Text>
                <Text style={{ color: "blue" }}>See trailer</Text>
              </Text>
            </View>
          </View>
        )}
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Suggested Movies for you</Text>
          {film &&
            film.suggested &&
            film.suggested.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={{ width: 250, height: 255, marginTop: 10 }}
                resizeMode="cover"
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FilmDetail;