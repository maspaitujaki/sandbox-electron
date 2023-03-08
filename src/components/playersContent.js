import { Heading, Box, Divider, TableContainer,Table, TableCaption,Thead,Tr,Th,Tbody,Td,Tfoot, Text, HStack, Button, Spacer} from "@chakra-ui/react"

const players = [
    {
        ID : 'P01',
        fName : 'Dimas',
        lName : 'Muzaki'
    },
    {
        ID : 'P02',
        fName : 'Diclo',
        lName : 'Fenac'
    },
    {
        ID : 'P03',
        fName : 'Diethy',
        lName : 'Lamine'
    },
    {
        ID : 'P04',
        fName : 'Pairing',
        lName : 'System'
    },
    {
        ID : 'P05',
        fName : 'Git',
        lName : 'Graph'
    },
]


export const PlayersContent = () =>{
    return(
        <Box>
            <Box>
                <HStack pb={1}>
                    <Heading mb={1} mt={1} fontSize='3xl'>
                        Players
                    </Heading>
                    <Spacer/>
                    <Button bg='transparent' border='1px' borderColor='gray.400'> 
                        <Text fontSize='sm'>
                            Add Player
                        </Text>
                    </Button>
                </HStack>
                <Divider mb={4}/>
            </Box>
            <TableContainer>
                <Table variant='striped' colorScheme='gray' size='sm'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
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
                                <Td>{player.ID}</Td>
                                <Td>{player.fName}</Td>
                                <Td>{player.lName}</Td>
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