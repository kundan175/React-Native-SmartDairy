import React, { useState, Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import COLORS from "../config/Constant";

export default class TextInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: this.props.type && this.props.type == "password",
      borderColor: "white",
    };
  }
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing() {
    this.props.onSubmitEditing();
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <View style={{}}>
        <Text
          style={{
            fontSize: 18,
            color: "black",
            marginLeft: wp(7),
            marginTop: wp(5),
            fontWeight: "600",
          }}
        >
          {this.props.label}
        </Text>
        <TextInput
          style={[
            {
              alignSelf: "center",
              height: hp(6),
              width: wp(90),
              paddingHorizontal: 10,
              color: COLORS.black,
              borderColor: this.state.borderColor,
            },
            this.props.textInputStyle,
          ]}
          editable={this.props.editable}
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value}
          onFocus={() => this.setState({ borderColor: "gray" })}
          autoCorrect={false}
          placeholderTextColor={"gray"}
          ref={(input) => (this.textInput = input)}
          returnKeyType={this.props.returnKeyType}
          blurOnSubmit={this.props.blurOnSubmit}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          placeholder={this.props.placeHolder}
          maxLength={this.props.maxLength}
        />
        <View
          style={{
            alignSelf: "center",
            height: hp(0.1),
            width: wp(85),
            paddingHorizontal: 15,
            color: "gray",
            backgroundColor: "gray",
          }}
        ></View>
      </View>
    );
  }
}
