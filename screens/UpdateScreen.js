import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

export default function UpdateScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={{paddingVertical: 20}}>
        <View style={{marginTop: 10, paddingHorizontal: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Updates</Text>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 18}}>Updated fare charges</Text>
          </View>
        </View>
        <FlatList
          data={[
            {key: 1, from: 'Madina', to: 'Circle', fare: 3.7},
            {key: 2, from: 'Achimota', to: 'Osu', fare: 2.5},
            {key: 3, from: 'Adum', to: 'Bantama', fare: 3.5},
            {key: 4, from: 'Achimota', to: 'Osu', fare: 2.5},
          ]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View style={{padding: 5, width: width / 3}}>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#092D6C',
                  backgroundColor: 'rgba(23, 95, 224, 0.05)',
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#092D6C'}}>{item.from}</Text>
                <MaterialCommunityIcons name={'swap-horizontal'} size={20} />
                <Text style={{color: '#092D6C'}}>{item.to}</Text>
                <Text
                  style={{
                    color: '#092D6C',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  GH₵ {item.fare}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{paddingHorizontal: 10}}>
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 18}}>Blog</Text>
        </View>
        <View>
          <FlatList
            data={[
              {key: 1, title: '5 things to check when boarding a taxi'},
              {key: 2, title: "Tourist's guide to commuting in Accra"},
              {
                key: 3,
                title: '10 things not to say to a taxi driver as a tourist',
              },
              {key: 4, title: 'How to spend less on taxi commute'},
            ]}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginBottom: 10,
                }}>
                <View>
                  <Image
                    source={require('../assets/images/sample-img.jpg')}
                    style={{
                      width: width / 3.5,
                      height: height / 8,
                      borderRadius: 5,
                    }}
                  />
                </View>
                <View style={{paddingLeft: 10, flexShrink: 1}}>
                  <Text
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      flex: 1,
                    }}>
                    {item.title}
                  </Text>
                  <Text>21/09/21</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
