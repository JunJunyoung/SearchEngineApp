const API_KEY = 'RGAPI-3b7b2154-ce80-4fd7-b64f-66c1f441fa52';

export interface IUser {
  username: string;
  server: string;
}

export type userInterface = {
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
};
export type rankInterface = [
  {
    leagueId: string;
    leaguePoints: number;
    losses: number;
    queueType: string;
    rank: string;
    summonerId: string;
    summonerName: string;
    tier: string;
    wins: number;
  },
];
export type IMatch = {
  assists: number;
  champLevel: number;
  championId: number;
  championName: string;
  firstBloodKill: boolean;
  firstTowerKill: boolean;
  goldEarned: number;
  kills: number;
  individualPosition: string;
  puuid: string;
  role: string;
  perks: {
    styles: [{selections: [{perk: number}]; style: number}, {style: number}];
  };
  teamId: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  totalDamageDealtToChampions: number;
  totalDamageTaken: number;
  challenges: {kda: number};
  totalMinionsKilled: number;
  timeCCingOthers: number;
  visionScore: number;
  deaths: number;
  tripleKills: number;
  doubleKills: number;
  quadraKills: number;
  pentaKills: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  win: true;
};
export type IChamp = {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  lastPlayTime: number;
};

export async function getPuuid(id: string) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${id}?api_key=${API_KEY}`,
  );
  return await response.json();
}
export async function getRank(userid: string) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userid}?api_key=${API_KEY}`,
  );
  return await response.json();
}
export async function getIngame(userid: string) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${userid}?api_key=${API_KEY}`,
  );
  return await response.json();
}
export async function getMatchs(puuid: string, count: number) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}&api_key=${API_KEY}`,
  );
  return await response.json();
}
export async function getGames(matchId: string) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`,
  );
  return await response.json();
}
export async function getSpell() {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/12.19.1/data/ko_KR/summoner.json`,
  );
  return await response.json();
}
export async function getRune() {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/12.19.1/data/en_US/runesReforged.json`,
  );
  return await response.json();
}
export async function getMastery(userid: string) {
  const response = await fetch(
    `https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userid}/top?count=7&api_key=${API_KEY}`,
  );
  return await response.json();
}
export async function getChap() {
  return await fetch(
    `https://ddragon.leagueoflegends.com/cdn/12.19.1/data/ko_KR/champion.json`,
  ).then(response => response.json());
}
