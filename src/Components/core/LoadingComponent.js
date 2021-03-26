import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Rect } from 'react-native-svg'
import ContentLoader from 'react-native-masked-loader'

function getMaskedElement() {
  return (
    <View style={styles.ContainerRow}>
      <View style={{ flex: 1 }}>
        <View style={styles.cardLoaderContainer}>
          <View style={styles.cardCircleWrapper}>
            <Svg height={30} width='150%' fill={'black'}>
              <Rect x='0' y='0' rx='5' ry='5' width='100%' height='30' />
            </Svg>
          </View>
          <View style={styles.cardContextWrapper}>
            <Svg height={30} width='90%' fill={'black'}>
              <Rect x='0' y='0' rx='7' ry='7' width='80%' height='13' />
            </Svg>
          </View>
        </View>
        <View style={styles.cardTwoContextWrapper}>
          <Svg height={205} width='100%' fill={'black'}>
            <Rect x='0' y='0' rx='7' ry='7' width='90%' height='150' />
            <Rect x='0' y='170' rx='7' ry='7' width='90%' height='16' />
          </Svg>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.cardLoaderContainer}>
          <View style={styles.cardCircleWrapper}>
            <Svg height={30} width='150%' fill={'black'}>
              <Rect x='0' y='0' rx='5' ry='5' width='100%' height='30' />
            </Svg>
          </View>
          <View style={styles.cardContextWrapper}>
            <Svg height={30} width='90%' fill={'black'}>
              <Rect x='0' y='0' rx='7' ry='7' width='80%' height='13' />
            </Svg>
          </View>
        </View>
        <View style={styles.cardTwoContextWrapper}>
          <Svg height={205} width='100%' fill={'black'}>
            <Rect x='0' y='0' rx='7' ry='7' width='90%' height='150' />
            <Rect x='0' y='170' rx='7' ry='7' width='90%' height='16' />
          </Svg>
        </View>
      </View>
    </View>
  )
}

const LoadingComponent = () => {
  const MaskedElement = getMaskedElement()
  return (
    <View style={styles.container}>
      <ContentLoader MaskedElement={MaskedElement} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    height: 285,
  },
  ContainerRow: {
    width: '100%',
    flexDirection: 'row',
  },

  cardLoaderContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  cardCircleWrapper: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 25,
    marginRight: 15,
    width: 147,
  },
  cardContextWrapper: {
    flex: 6,
    paddingTop: 30,
    marginLeft: 25,
    paddingBottom: 0,
  },
  cardTwoContextWrapper: {
    flex: 1,
    paddingLeft: 25,
  },
})

export default LoadingComponent
