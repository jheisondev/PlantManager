import React, { Props, useEffect, useState } from 'react';

import { Text, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import Loading from '../../components/Loading';
import { Header } from '../../components/Header';
import { EnviromentButton } from '../../components/EnviromentButton';
import api from '../../services/api';
import { CardPlantPrimary } from '../../components/CardPlantPrimary';

interface PropsEnv {
  key: string;
  title: string;
}

interface PropsPlants {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number,
    repeat_every: string,
  }
}

export const PlantSelect: React.FC = () => {
  const [data, setData] = useState<PropsEnv[]>([]);
  const [plants, setPlants] = useState<PropsPlants[]>([]);
  const [filterPlants, setFilterPlants] = useState<PropsPlants[]>([]);
  const [envSelected, setEnvSelected] = useState('all');
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [loadAll, setLoadAll] = useState(false);

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api.get('/plants_environments?_sort=title&_order=asc');

      setData([{ key: 'all', title: 'Todos' }, ...data]);
    }

    fetchEnviroment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  async function fetchPlants() {
    const { data } = await api.get(`/plants?_sort=name&_order=asc&_page=${page}&_limit=6`);

    if (!data)
      return setLoadAll(true);

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilterPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilterPlants(data);
    }

    setLoad(false);
    setLoadMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  function handleEnviromentSelected(enviroment: string) {
    setEnvSelected(enviroment);

    if (enviroment === 'all')
      return setFilterPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(enviroment)
    );

    setFilterPlants(filtered);
  }

  if (load) {
    return <Loading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name="Jheison Maciel ines Graciano Maciel" />
      {/* <Lottie resizeMode="contain" source={require('../../assets/emoji.json')} autoPlay loop style={styles.plant} /> */}
      <Text style={styles.subTitle}>{`Em qual ambiente\nvocê quer colocar sua planta?`}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <EnviromentButton
            title={item.title}
            active={item.key === envSelected}
            onPress={() => handleEnviromentSelected(item.key)}
          />
        )}
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={filterPlants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <CardPlantPrimary data={item} />
        )}
        // numColumns={2}
        horizontal
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) =>
          handleFetchMore(distanceFromEnd)
        }
        contentContainerStyle={styles.listPlants}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        ListFooterComponent={
          loadMore
            ? <ActivityIndicator size='large' color={colors.green_dark} />
            : <></>
        }
        ListFooterComponentStyle={styles.loadPlants}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  subTitle: {
    fontSize: 18,
    color: colors.heading,
    textAlign: 'left',
    paddingHorizontal: 12,
    fontFamily: fonts.text,
  },
  list: {
    marginTop: 16,
    justifyContent: 'center',
    marginLeft: 12,
    paddingRight: 16,
  },
  listPlants: {
    paddingLeft: 16,
  },
  loadPlants: {
    // backgroundColor: '#ebebeb',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});