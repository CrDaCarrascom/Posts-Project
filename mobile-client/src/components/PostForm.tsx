import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { api } from '../api/api';

interface PostFormProps {
  onSubmit: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      await api.post('/posts', { name, description });
      onSubmit();
    } catch (error) {
      console.error('Error al crear el post:', error);
      Alert.alert('Error', 'No se pudo crear el post');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevo Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Título del post"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#999"
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Escribe el contenido de tu post aquí..."
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={6}
        placeholderTextColor="#999"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={onSubmit}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
          disabled={!name.trim() || !description.trim()}
        >
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  submitButton: {
    backgroundColor: '#007bff',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
});

export default PostForm;
