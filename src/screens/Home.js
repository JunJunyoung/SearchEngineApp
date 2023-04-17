import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import SearchBox from '../components/SearchBox';

const Home = () => {
  return (
    <Container showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <TopContainer>
        <LogoText>JY.GG</LogoText>
        <LanguageView>
          <TouchableOpacity style={{height: 30}}>
            <LanguageText>한국어</LanguageText>
          </TouchableOpacity>
        </LanguageView>
      </TopContainer>
      <SearchBoxContainer>
        <SearchBox />
      </SearchBoxContainer>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: #f6f7fb;
`;

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  height: 50px;
  width: 100%;
`;

const LogoText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  color: black;
`;

const LanguageView = styled.View`
  align-items: center;
  margin-right: 10px;
  margin-top: 15px;
  height: 30px;
  justify-content: center;
`;

const LanguageText = styled.Text`
  font-size: 16px;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 10px;
  color: #808080;
`;

const SearchBoxContainer = styled.View`
  height: 100px;
  width: 100%;
`;

export default Home;
