import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    a: '',
    b: '',
    c: '',
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.nameInput}
          placeholder='a...'
          onChangeText={(text) => {
            this.setState({
              a: text,
            });
          }}
          value={this.state.a}
        />
        <TextInput
          style={styles.nameInput}
          placeholder='b...'
          onChangeText={(text) => {
            this.setState({
              b: text,
            });
          }}
          value={this.state.b}
        />
        <TextInput
          style={styles.nameInput}
          placeholder='c...'
          onChangeText={(text) => {
            this.setState({
              c: text,
            });
          }}
          value={this.state.c}
        />
        <TouchableOpacity
          onPress={() => {
            var a = Number(this.state.a);
            var b = Number(this.state.b);
            var c = Number(this.state.c);
            var disk = (b*b)-(4*a*c);

            if(disk>0) {
              var x1 = (-b+Math.sqrt(disk))/(2*a);
              var x2 = (-b-Math.sqrt(disk))/(2*a);
              alert('x1: ' + x1 + ',' +' x2: ' + x2);
            }
            else if (disk==0) {
              var x = (-b)/(2*a);
              alert('x: ' + x);
            }
            else if (disk<0) {
              alert('Корней нет');
            }
          }}
        >
          <Text style={styles.butText}>
            Далее
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    paddingLeft: 10,
  },
  butText: {
    marginLeft: 20,
    fontSize: 20,
  },
});

export default Home;
