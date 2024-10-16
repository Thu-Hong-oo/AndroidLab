import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, TextInput } from "react-native";

export default function Screen_02({ route, navigation }) {
  const { name } = route.params;
  const [originalData, setOriginalData] = useState([]); // Ban đầu là mảng rỗng
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState(""); // State để lưu giá trị của TextInput

  // Dùng useEffect để gọi API khi component được render lần đầu
  useEffect(() => {
    fetchData();
  }, []);

  // Hàm fetch data từ API
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos"); // Thay bằng API của bạn
      const result = await response.json();
      
      // Giả sử API trả về một danh sách các công việc có id và title
      const formattedData = result.map((item) => ({
        id: item.id,
        name: item.title,
        description: "Task description", // Bạn có thể thay thế bằng dữ liệu phù hợp
      }));
      
      setOriginalData(formattedData); // Cập nhật dữ liệu gốc
      setData(formattedData); // Hiển thị dữ liệu ban đầu
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    // Tìm kiếm công việc theo tên (name)
    const filteredData = originalData.filter((task) =>
      task.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Cập nhật danh sách công việc hiển thị
    setData(filteredData);
  };

  const handleSearchInputChange = (text) => {
    setSearchText(text);
    if (text === "") {
      // Nếu ô `TextInput` rỗng, hiển thị lại toàn bộ danh sách
      setData(originalData);
    } else {
      handleSearch();
    }
  };

  const handleEdit = (task) => {
    navigation.navigate("Screen_03", {
      taskToEdit: task,
      onEditTask: (editedTask) => {
        // Xử lý cập nhật nhiệm vụ trong danh sách
        const updatedData = data.map((item) => {
          if (item.id === task.id) {
            return editedTask;
          } else {
            return item;
          }
        });
        setData(updatedData);
      },
    });
  };

  const handleAddTask = () => {
    // Xử lý sự kiện thêm nhiệm vụ
    navigation.navigate("Screen_03", { onAddTask: handleAddNewTask });
  };

  const handleAddNewTask = (newTask) => {
    setData([...originalData, { id: originalData.length + 1, ...newTask }]);
  };

  const handleDelete = (taskId) => {
    // Xử lý sự kiện xóa nhiệm vụ
    setData(originalData.filter((task) => task.id !== taskId));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.field}>
          <Image source={require("../assets/check.png")} style={styles.check} />
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/avata.png")} style={styles.check} />
        <Text style={styles.headerText}>Hi, {name}</Text>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require("../assets/search.png")} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name"
          value={searchText}
          onChangeText={handleSearchInputChange}
        />
      </View>

      <View style={styles.fieldContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  check: {
    width: 30,
    height: 30,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  fieldContainer: {
    margin: 10,
  },
  field: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
    flexDirection: "row",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
  },
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
