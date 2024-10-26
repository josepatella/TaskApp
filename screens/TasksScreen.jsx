import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export function TasksScreen () {

    const [tarefa, setTarefa] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
  }, [tarefa])

    return (
        <>
        <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Nova tarefa</Text>
            <TextInput style={styles.inputStyle} placeholder='Tarefa' value={tarefa} onChangeText={setTarefa} />
            <Text style={styles.modalView} >{tarefa}</Text>
            <View style={styles.inline} >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Salvar</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Nova tarefa</Text>
      </Pressable>
    </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 120
    },
    buttonOpen: {
      backgroundColor: '#2196F3',
      alignSelf: 'flex-end',
      margin: 20
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 50,
      padding: 5,
      marginBottom: 10,
      width: '100%'
    },
    inline: {
      flexDirection: 'row',
      gap: 80
    }
  });
  