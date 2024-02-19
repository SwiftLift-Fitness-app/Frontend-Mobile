import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import WeekDays from "./weekdaystray";

export default function ExerciseTab({navigation, user} : any) {


    const vw = Dimensions.get('window').width;
    const vh = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d0e0e',
      borderRadius: 10,
      marginTop: 40
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
    exerciseItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1c1c1c',
      width: 0.875*vw,
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
      height: 0.05*vh
    },
    exerciseName: {
      color: 'white',
      fontSize: 16,
    },
    exerciseDuration: {
      color: 'lightgray',
    },
    addExerciseButton: {
      backgroundColor: '#4461ae',
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    top_bar: {
        width: 0.875*vw,
        height: 0.05*vh,
        backgroundColor: '#4461ae',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 20,
        color: 'white'
    },
  });

  let exercises = [
    { name: 'Push-ups', sets: '5 sets' },
    { name: 'Squats', sets: '10 sets' },
    { name: 'Plank', sets: '3 sets' },
  ];

  interface Exerc {
      name : string,
      sets : string
  }

  interface Get {
      exercises : Array<Exerc>
  }

  let json : Get = {
    exercises : []
  }

  fetch("http://localhost:8080/exercises/today", {
      method : "GET",
      body : JSON.stringify({
          username : user
      })
  }).then(async (response : Response) => {
      json = await response.json();
      exercises = json.exercises;
  })
  return (
    <View style={styles.container}>
      <Text style={styles.top_bar}>Exercises for today</Text>
      {exercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseItem}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text style={styles.exerciseDuration}>{exercise.sets}</Text>
        </View>
      ))}
      <WeekDays days={[true, false, true, true, false, false, true]}></WeekDays>
      <Pressable style={styles.addExerciseButton} onPress={() => {navigation.navigate('Programs')}}>
        <Pressable onPress={navigation.navigate("Programs")}>
          <Text style={styles.buttonText}>Go to your Program</Text>
        </Pressable>
      </Pressable>
    </View>
  );
}