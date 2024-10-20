import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import{AntDesign} from '@expo/vector-icons'
import colors from '../colors'

export default class TodoModal extends Component {
    state={
        name:this.props.list.name,
        color:this.props.list.color,
        todos:this.props.list.todos
    }
    
    
    render() {

        const taskCount=this.state.todos.length
        const completedCount=this.state.todos.filter(todo=>todo.completed).length


        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={{position:'absolute',top:64,right:32,zIndex:10}}>
                    <AntDesign 
                    name='close' size={24} color={colors.black}
                    onPress={this.props.closeModal}
                    />
                </TouchableOpacity>

                <View style={[styles.section,styles.header]}>
                    <Text style={styles.title}>{this.state.name}</Text>
                    <Text style={styles.taskCount}>
                        {completedCount} of {taskCount} tasks
                    </Text>


                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})