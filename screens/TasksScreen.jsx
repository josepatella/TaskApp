import { useEffect, useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalNovaTarefa from '../components/ModalNovaTarefa';
import CardTarefa from '../components/CardTarefa';

const obterDataFormatada = () => {
  const hoje = new Date();
  const diasSemana = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
  ];
  const mesesAno = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
  ];

  const diaSemana = diasSemana[hoje.getDay()];
  const diaMes = hoje.getDate();
  const mes = mesesAno[hoje.getMonth()];

  return `${diaSemana}, ${diaMes} de ${mes}`;

};

export function TasksScreen () {

    const [tasks, setTasks] = useState([{
      nome: "Estudar",
      descricao: "Estudar para DevInHouse",
      status: true,
      data: "16/09/2024"
    },
    {
      nome: "Exercício",
      descricao: "Fazer exercício físico",
      status: false,
      data: "17/09/2024"
    },
    {
      nome: "Trabalho",
      descricao: "Terminar o projeto Task App",
      status: true,
      data: "18/09/2024"
    }])
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
  }, [tasks])

    return (
        <>
        <View style={styles.container}>
        <Text style={styles.dataTexto}>{obterDataFormatada()}</Text>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Nova tarefa</Text>
      </Pressable>
      <ModalNovaTarefa visivel={modalVisible} aoFechar={() => setModalVisible(false)}/>
      <FlatList
                data={tasks}
                renderItem={
                  ({item}) => {
                    return(
                      <View>
        <CardTarefa
            titulo={item.nome}
            descricao={item.descricao}
            data={item.data}
            status={item.status}
        />
        {!item.status && (
            <TouchableOpacity onPress={() => concluirTarefa(tarefas.indexOf(item))}>
                <Text style={styles.botaoConcluir}>Marcar como Concluída</Text>
            </TouchableOpacity>
        )}
    </View>
                    )
                  }
                }
                keyExtractor={(item, index) => index.toString()}
            />
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
    },
    dataTexto: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
  },
  });
  