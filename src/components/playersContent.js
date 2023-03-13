import { Heading, Box, Divider, TableContainer,Table,Thead,Tr,Th,Tbody,Td, Text, HStack, Button, Spacer} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


export const PlayersContent = () =>{
    const [players, setPlayers] = useState([])

    useEffect(() => {
        async function fetchPlayers(){
            try {
                const players = await window.api.getAllPlayers();
                console.log(players)
                setPlayers(players)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPlayers()
    },[])
    return(
        <Box>
            <Box>
                <HStack pb={1}>
                    <Heading mb={1} mt={1} fontSize='3xl'>
                        Players
                    </Heading>
                    <Spacer/>
                    <NavLink to="/players/new"  >
                        <Button bg='transparent' border='1px' borderColor='gray.400' boxShadow='md'> 
                            <Text fontSize='sm'>
                                Add Player
                            </Text>
                        </Button>
                    </NavLink>
                </HStack>
                <Divider mb={4}/>
            </Box>
            <TableContainer overflowY="auto" maxHeight='md'>
                <Table variant='striped' colorScheme='gray' size='sm'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead position="sticky" top={0} bgColor="white">
                            <Tr>
                                <Th>ID</Th>
                                <Th>First Name</Th>
                                <Th>Last Name</Th>
                            </Tr>
                        </Thead>
                    <Tbody>
                    {
                        players.map((player)=>(
                            <Tr>
                                <Td>{player.player_id}</Td>
                                <Td>{player.first_name}</Td>
                                <Td>{player.last_name}</Td>
                            </Tr>
                        ))
                    } 
                    </Tbody>
                    {/* <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th>multiply by</Th>
                    </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
        </Box>
        
    )
}