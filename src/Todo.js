import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Todo = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);

  useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  const addTask = () => {
    if (title == '') {
      Alert.alert('ERROR:', 'Feilds is required!');
    } else {
      const newTask = {
        id: Math.random(),
        title: title,
        completed: false,
      };
      setTodo([...todos, newTask]);
      setTitle('');
    }
  };

  const markTaskComplete = taskId => {
    newTask = todos.map(item => {
      if (item.id === taskId) {
        return {...item, completed: true};
      }
    });
    setTodo(newTask);
  };

  const saveTodoToUserDevice = async todos => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        setTodo(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = taskId => {
    const task = todos.filter(item => item.id != taskId);
    setTodo(task);
  };

  const clearAllTodos = () => {
    Alert.alert('Confirm', 'Clear todos?', [
      {
        text: 'Yes',
        onPress: () => setTodo([]),
      },
      {
        text: 'No',
      },
    ]);
  };

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#1f145c',
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.title}
          </Text>
        </View>

        {!todo?.completed && (
          <TouchableOpacity
            style={[styles.actionContainer, {backgroundColor: 'green'}]}
            onPress={() => markTaskComplete(todo.id)}>
            <Text style={{color: '#FFF'}}>Done</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionContainer, {backgroundColor: 'red'}]}
          onPress={() => deleteTask(todo.id)}>
          <Text style={{color: '#FFF'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={styles.header}>
        <Text style={{fontWeidth: 'bold', fontSize: 20, color: '#1f145c'}}>
          TODO APP
        </Text>
        <TouchableOpacity onPress={clearAllTodos}>
          <Text style={{color: 'red'}}>Delete All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 20, paddingBottom: 100}}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add Todo"
            value={title}
            onChangeText={title => setTitle(title)}
          />
        </View>
        <TouchableOpacity onPress={addTask}>
          <View style={styles.addContainer}>
            <Text style={{color: '#FFF'}}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footer: {
    bottom: 0,
    color: '#FFF',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 20,
  },
  addContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#1f145c',
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  listItem: {
    padding: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionContainer: {
    height: 25,
    width: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 5,
  },
});

export default Todo;
