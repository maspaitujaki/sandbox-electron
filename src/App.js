import './App.css';
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import { TournamentContent } from './components/tournamentContent';
import { Button, Text, HStack, Stack, Divider, Flex, Spacer, VStack, Input, Accordion, AccordionButton, AccordionItem, Box, AccordionIcon, AccordionPanel} from '@chakra-ui/react';
import { PlayersContent } from './components/playersContent';
import { NewPlayerContent } from './components/newPlayerContent';
import { NewTournamentContent } from './components/newTournamentContent';
function App() {
  console.log(window.location.pathname)
  
  return (
      <HashRouter>
        <HStack spacing='5' w='95vw' mx={10} my={10}>
          <Accordion defaultIndex={[0]} maxW='25vw' alignSelf='flex-start' border='1px' borderColor='gray.400' borderRadius='md'>
            <AccordionItem>
              <h2>
                <NavLink to="/">
                  <AccordionButton _expanded={{ bg: 'gray.100'}}>
                    <Box as="span" flex='1' textAlign='left'>
                      <Text as='b' isTruncated>
                        Tournament
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </NavLink>
              </h2>
              <AccordionPanel p={2}>
                <VStack maxW='25vw' alignSelf='flex-start'>
                  <Stack>
                    <NavLink to="/tournament/new">
                      <HStack>
                        <Spacer/>
                        <Button whiteSpace="normal" height="auto" blockSize="auto" mx="auto">
                          <Text padding={2}>New Tournament</Text>
                        </Button>
                        <Spacer/>
                      </HStack>
                    </NavLink>
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
                    <Input type='text' placeholder='Search Tournament'/>
                  </Stack>
                </VStack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <NavLink to="/players">
                  <AccordionButton _expanded={{ bg: 'gray.100'}}>
                    <Box as="span" flex='1' textAlign='left'>
                    <Text as='b' >
                        Players
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </NavLink>
              </h2>
              <AccordionPanel p={2}>
              <VStack maxW='25vw' alignSelf='flex-start'>
                  <Stack>                    
                    <Input type='text' placeholder='Search Player'/>
                  </Stack>
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Stack id="content" w='60vw' alignSelf='flex-start' minH='20vw'px={4} py={4} border='1px' borderColor='gray.400' borderRadius='md'>
              <Routes>
                <Route exact path='/' element={<TournamentContent/>}/>
                <Route path='/players' element={<PlayersContent/>}/>
                <Route path='/players/new' element={<NewPlayerContent/>}/>
                <Route path='/tournament/new' element={<NewTournamentContent/>}/>
              </Routes>
          </Stack>
        </HStack>
      </HashRouter>
  );
}

export default App;
