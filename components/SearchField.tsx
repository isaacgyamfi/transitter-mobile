// // SearchBarWithAutocomplete.tsx
// // Duplicates are omitted and replaced with "..."
// // ==== Change No.1 ====
// import React, { FunctionComponent, useState } from 'react'
// // ==== Change No.2 ====
// import {
// ...
// FlatList,
//   TouchableOpacity,
//   Text
// } from 'react-native'
// ...
// const SearchBarWithAutocomplete: FunctionComponent<SearchBarProps> = props => {
//   // ==== Change No.3 ====
//   const [inputSize, setInputSize] = useState({ width: 0, height: 0 })
//   const {
//     value,
//     style,
//     onChangeText,
//     // ==== Change No.4 ====
//     onPredictionTapped,
//     predictions,
//     showPredictions
//   } = props
//   const {
//     container,
//     inputStyle
//   } = styles
//   const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style
//   // ==== Change No.5 ====
//   const inputBottomRadius = showPredictions ?
//     {
//       borderBottomLeftRadius: 0,
//       borderBottomRightRadius: 0
//     }
//     :
//     {
//       borderBottomLeftRadius: 20,
//       borderBottomRightRadius: 20
//     }
//   // ==== Change No.6 ====
//   const _renderPredictions = (predictions: PredictionType[]) => {
//     const {
//       predictionsContainer,
//       predictionRow
//     } = styles
//     const calculatedStyle = {
//       width: inputSize.width
//     }
//
//     return (
//       <FlatList
//         data={predictions}
//         renderItem={({ item, index }) => {
//           return (
//             <TouchableOpacity
//               style={predictionRow}
//               onPress={() => onPredictionTapped(item.place_id, item.description)}
//             >
//               <Text
//                 numberOfLines={1}
//               >
//                 {item.description}
//               </Text>
//             </TouchableOpacity>
//           )
//         }}
//         keyExtractor={(item) => item.place_id}
//         keyboardShouldPersistTaps='handled'
//         style={[predictionsContainer, calculatedStyle]}
//       />
//     )
//   }
//   return (
//     <View style={[container, { ...passedStyles }]}>
//       <TextInput
//         // ==== Change No.7 ====
//         style={[inputStyle, inputBottomRadius]}
//         placeholder='Search by address'
//         placeholderTextColor='gray'
//         value={value}
//         onChangeText={onChangeText}
//         returnKeyType='search'
//         // ==== Change No.8 ====
//         onLayout={(event) => {
//           const { height, width } = event.nativeEvent.layout
//           setInputSize({ height, width })
//         }}
//       />
//       // ==== Change No.9 ====
//       {showPredictions && _renderPredictions(predictions)}
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   ...
//     // ==== Change No.10 ====
//     predictionsContainer: {
//   backgroundColor: '#cfcfcf',
//     padding: 10,
//     borderBottomLeftRadius: 10,
//     borderBottomRightRadius: 10
// },
// predictionRow: {
//   paddingBottom: 15,
//     marginBottom: 15,
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
// }
// })
// export default SearchBarWithAutocomplete
