import { Ionicons } from '@expo/vector-icons'
import { FormControl, HStack, Icon, Input, VStack } from 'native-base'
import { StyleSheet } from 'react-native';

const Form = props => {
  const { onInputChange, setInputValue } = props;

  return (
    <VStack space={2} width='100%' py={5} style={styles.formContainer}>
      <FormControl isRequired>
        <FormControl.Label fontSize='sm'>Search Movie/TV Show name</FormControl.Label>
        <HStack width='100%' space={2}>
          <Input
            placeholder='i.e. James Bond, CSI'
            variant='filled'
            bg='gray.200'
            px={3}
            width='85%'
            InputLeftElement={
              <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
            }
            onChangeText={value => {
              onInputChange(value);
              setInputValue(value);
            }}
          />
        </HStack>
      </FormControl>
    </VStack>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    paddingRight: 10,
    paddingLeft: 50,
  }
})
export default Form