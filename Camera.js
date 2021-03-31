 import React from 'react';

 import type {Node} from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
   AppRegistry,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import QRCodeScanner from 'react-native-qrcode-scanner';
  
 const Section = ({children, title}): Node => {
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App1: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 

   
   return (
     <SafeAreaView >
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         >
         
         
         <QRCodeScanner
         onRead={this.onSuccess}
         topContent={
           <Text style={styles.centerText}>
           Application go style
           </Text>
         }
         bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK Scannez !</Text>
          </TouchableOpacity>
        }
       />
 
       </ScrollView>
     </SafeAreaView>
     
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  
  textBold: {
    fontWeight: '500',
    color: '#000'},

    buttonText: {
      fontSize: 21,

    color: 'rgb(0,122,255)'},

    buttonTouchable: {
        padding: 16
      }

 });
 
 AppRegistry.registerComponent('default', () => ScanScreen);

 export default App1;
 