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
    flex: 4,
  },
  tag: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#092D6C',
    backgroundColor: 'rgba(23, 95, 224, 0.08)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  callBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: '#092D6C',
    borderRadius: 25,
  },
  callToActionBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 14,
    color: '#092D6C',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    backgroundColor: '#FFFFFF',
    elevation: 6,
    borderRadius: 30,
    // marginLeft: 10,
  },
  callToActionBtnText: {
    color: '#092D6C',
    fontSize: 16,
    marginLeft: 5,
  },
  destinationCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    padding: 15,
  },
  floatingBtn: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: '#092D6C',
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
