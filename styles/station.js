import {StyleSheet} from 'react-native';

export const stationStyles = StyleSheet.create({
  header: {
    shadowColor: '#000',
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  tag: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#175FE0',
    backgroundColor: 'rgba(23, 95, 224, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  destinationCard: {
    shadowColor: '#000',
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 15,
  },
  floatingBtn: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: '#175FE0',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
