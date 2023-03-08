import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { Button, ChakraProvider, Text, HStack, Stack, Divider, Flex, Spacer, VStack, Input} from '@chakra-ui/react';
function App() {
  return (
    <ChakraProvider>
      <HStack spacing='5' w='95vw' mx={10} my={10}>
        <VStack maxW='25vw' alignSelf='flex-start'>
          <Stack p={2} border='1px' borderColor='gray.400' borderRadius='md'>
            <Button whiteSpace="normal" height="auto" blockSize="auto">
              <Text padding={2}>New Tournament</Text>
            </Button>
            <Divider/>
            <Flex>
              <Text>Ongoing</Text>
              <Spacer/>
              <Text fontSize='sm' bg='gray.200'px={2} borderRadius='sm' color='gray.800'>1</Text>
            </Flex>
            <Divider/>
            <Flex>
              <Text>Created</Text>
              <Spacer/>
              <Text fontSize='sm' bg='gray.200'px={2} borderRadius='sm' color='gray.800'>1</Text>
            </Flex>
            <Divider/>
            <Flex>
              <Text>Finished</Text>
              <Spacer/>
              <Text fontSize='sm' bg='gray.200'px={2} borderRadius='sm' color='gray.800'>1</Text>
            </Flex>
            <Divider/>
            <Input type='text' placeholder='Search...'/>
          </Stack>
          <Stack w='full' p={2} border='1px' borderColor='gray.400' borderRadius='md'> 
            <Text>
              Players
            </Text>
          </Stack>
        </VStack>
        <Stack id="content" w='60vw' minH='20vw'px={2} py={2} border='1px' borderColor='gray.400' borderRadius='md'>
          <HashRouter>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
            </Routes>
          </HashRouter>
        </Stack>
      </HStack>

    </ChakraProvider>
  );
}

export default App;
