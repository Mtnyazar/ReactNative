import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-400">
      <Text className='text-[#fff] text-lg'>Merhaba Metin </Text>
      <StatusBar style="auto" />
      <View>
        <Text>Tamam</Text>
      </View>

    </View>
  );
}

