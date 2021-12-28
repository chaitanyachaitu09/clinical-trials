import React,{useState} from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  const [searchkey, setsearchkey] = useState('');
  return (
    <Background>
      {/* <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph> */}
      <TextInput
          value={searchkey}
          onChangeText={(text) => setsearchkey(text)}
          label="search"
        />

      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate('LoginScreen', {
            paramKey: searchkey,
          })
        }
       // onPress={() => navigation.navigate('LoginScreen')}
      >
        Search
      </Button>
    </Background>
  )
}
