import React, {useRef, useEffect} from 'react';
import {Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {summonerState} from '../../atoms/summoner';
import {getPuuid, userInterface} from '../../api';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = 'RGAPI-3b7b2154-ce80-4fd7-b64f-66c1f441fa52';

const SearchBox = () => {
  const searchRef = useRef();
  const [summonerName, setSummonerName] = useRecoilState(summonerState);
  const clearInput = () => {
    searchRef.current.ref.clear();
    setSummonerName('');
  };

  const onPress = async () => {
    const response = await axios(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`,
    );
    console.log('response>>>', response);
  };

  return (
    <Container>
      <SearchBarWrap>
        <SearchIcon
          source={{
            uri: 'https://webstockreview.net/images/search-icon-png-4.png',
          }}
          touch={summonerName}
        />
        <SearchBar
          ref={searchRef}
          placeholder="       검색어를 입력해 주세요"
          onChangeText={text => setSummonerName(text)}
          onSubmitEditing={onPress}
          touch={summonerName}
          animation={
            summonerName.length > 0
              ? {
                  0: {
                    width: '95%',
                  },
                  1: {
                    width: '80%',
                  },
                }
              : false
          }
        />
        <Cancel
          touch={summonerName}
          animation={
            summonerName.length > 0
              ? {
                  0: {
                    animation: false,
                  },
                  1: {
                    animation: 'slideInRight',
                  },
                }
              : false
          }
          onPress={() => clearInput()}>
          <Text style={{fontSize: 16}}>취소</Text>
        </Cancel>
      </SearchBarWrap>
    </Container>
  );
};

const Container = styled.View``;

const SearchBarWrap = styled.View`
  position: relative;
  flex-direction: row;
  width: 100%;
`;

const SearchIcon = styled.Image`
  position: absolute;
  left: 19px;
  top: 22px;
  width: 20px;
  height: 24px;
  z-index: ${({touch}) => (touch.length > 0 ? -1 : 1)};
`;

const Cancel = Animatable.createAnimatableComponent(styled.TouchableOpacity`
  display: ${({touch}) => (touch.length > 0 ? 'flex' : 'none')};
  padding-left: 10px;
  margin-top: 23px;
`);

const SearchBar = Animatable.createAnimatableComponent(styled.TextInput`
  width: ${({touch}) => (touch.length > 0 ? '80%' : '95%')};
  height: 50px;
  margin: 10px;
  padding-left: 10px;
  border-radius: 10px;
  background-color: white;
`);

export default SearchBox;
