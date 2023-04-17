import React, {useState} from 'react';
import styled from 'styled-components/native';

const MyPage = () => {
  return (
    <Container showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <TextView>
        <RecommendText>마이페이지</RecommendText>
      </TextView>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: gray;
`;

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  height: 40px;
  width: 100%;
`;

const LogoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: black;
`;

const LanguageButton = styled.Button`
  align-items: center;
  justify-content: center;
  background-color: #f0f9ff;
`;

const SearchBoxContainer = styled.View`
  height: 100px;
  width: 100%;
`;
const TextView = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

const RecommendText = styled.Text`
  font-size: 20px;
  text-align: left;
  margin-top: 5px;
  margin-left: 13px;
  color: black;
`;

const SponsoredText = styled.Text`
  font-size: 13px;
  text-align: right;
  margin: 2px;
  margin-right: 13px;
  margin-top: 17px;
  color: gray;
`;

export default MyPage;
