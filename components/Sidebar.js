import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { GalleryContext } from "../contexts/GalleryContext";

const Sidebar = () => {
  const { categories } = useContext(GalleryContext);

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <View style={{ alignItems: "center", paddingTop: 10 }}>
        <Text style={{ fontSize: 20, color: "white" }}>Movie App</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Text style={{ fontSize: 20, color: "white", marginRight: 10 }}>Home</Text>
        </TouchableOpacity>
        {categories &&
          categories.map((category, index) => (
            <TouchableOpacity key={index} style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
              <Text style={{ fontSize: 20, color: "white", marginRight: 10 }}>{category.name}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Sidebar;