import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false);

  const data = [{
    id: 1,
    name: 'Nguyễn Văn A',
    desc: 'Ph27970',

  }, {
    id: 2,
    name: 'Nguyễn Văn A',
    desc: 'Ph27971',

  }, {
    id: 3,
    name: 'Nguyễn Văn B',
    desc: 'Ph27972',

  }];

  return (
    <View style={styles.container}>

      
      {
        show ?
          (
            <View>
              <Text style={styles.container}>Thêm Mới</Text>
              <TextInput style={styles.input}
                placeholder='Tên'
              />
              <TextInput style={styles.input}
                placeholder='Mô tả'
              />
              <TextInput style={styles.input}
                placeholder='Link ảnh'
              />

              <View >
                <Button style={{margin: 20}} title='Hủy' onPress={() => setShow(!show)} />
                <Button style={{margin: 20}} title='Lưu' onPress={() => setShow(!show)} />
              </View> 

              
            </View>

          ) :
          <>
            <Text style={styles.text}>Họ Tên: Trương Quân Thái</Text>
            <Text style={styles.text}>MSV: PH27970</Text>
            <Button title='Thêm mới' onPress={() => setShow(!show)} />
            <FlatList
              data={data}

              renderItem={({ item }) => (
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.desc}</Text>
                </View>
              )}

              keyExtractor={(item) => item.id}
            />
          </>
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({


  input: {
    margin: 15,
    borderWidth: 2,
    padding: 10,
  },

  text: {
    fontSize: 20,

  },

  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
