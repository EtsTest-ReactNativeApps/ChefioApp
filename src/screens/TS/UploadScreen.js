import React, { useState } from 'react';
import Input from '../../Components/core/Input';
import Title from '../../Components/core/Title';
import Container from '../../Components/layout/ContainerView';
import Row from '../../Components/layout/Row';
import PhotoPicker from '../../hooks/PhotoPicker';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import VerticalSpace from '../../Components/layout/VerticalSpace';
import { StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HorizontalSpace from '../../Components/layout/HorizontalSpace';
import Button from '../../Components/core/Button';

const UploadScreen = ({ navigation }) => {
  const [pickImage, image] = PhotoPicker();
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <ScrollView>
      <Container>
        <VerticalSpace />
        <Row direction={'flex-start'}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Title fontWeight={'700'} fontColor={'#FF6464'}>
              Cancel
            </Title>
          </TouchableOpacity>
        </Row>
        <VerticalSpace />

        <UploadView onPress={pickImage}>
          <Ionicons
            style={styles.iconStyle}
            name="images"
            size={50}
            color="#D0DBEA"
          />
          <Title fontWeight={700}>Add Cover Photo</Title>
          <Title fontColor={'#9FA5C0'} fontSize={'12px'}>
            Up to (12 mb)
          </Title>
        </UploadView>

        <VerticalSpace />
        <Row direction={'flex-start'}>
          <Title fontWeight={'700'}>Food Name</Title>
        </Row>
        <Input inputPlaceHolder={'Enter food name'}></Input>
        <Row direction={'flex-start'}>
          <Title fontWeight={'700'}>Description</Title>
        </Row>
        <Input
          isDescription
          Height={'150px'}
          inputPlaceHolder={'Tell a little about your food'}></Input>
        <Row direction={'flex-start'}>
          <Title fontWeight={'700'}>Cooking Duration</Title>
        </Row>
        <VerticalSpace />
        <Row>
          <Text
            style={
              sliderValue > 1 ? styles.inSliderStyle : styles.outSliderStyle
            }>
            {'< 10'}
          </Text>
          <HorizontalSpace width={'90px'} />
          <Text
            style={
              sliderValue >= 30 ? styles.inSliderStyle : styles.outSliderStyle
            }>
            {'30'}
          </Text>
          <HorizontalSpace width={'90px'} />
          <Text
            style={
              sliderValue >= 60 ? styles.inSliderStyle : styles.outSliderStyle
            }>
            {'> 60'}
          </Text>
        </Row>
        <Slider
          style={{ width: '80%', height: 50 }}
          step={5}
          minimumValue={0}
          maximumValue={60}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumTrackTintColor="#1FCC79"
          maximumTrackTintColor="#000000"
        />
        <Button>Next</Button>
      </Container>

      <VerticalSpace height={'30px'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
  },
  inSliderStyle: {
    color: '#1FCC79',
    fontSize: 20,
    fontWeight: '700',
  },
  outSliderStyle: {
    color: '#9FA5C0',
    fontSize: 20,
    fontWeight: '700',
  },
});

const UploadView = styled.TouchableOpacity`
width: 327px;
height: 161px;
border: 2px dashed #D0DBEA;
border-radius: 16px;
justify-content: center
`;

export default UploadScreen;
