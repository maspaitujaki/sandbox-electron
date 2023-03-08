import { Heading, Box, Divider, Card, CardHeader, Text, CardBody, Icon, HStack} from "@chakra-ui/react"
import {
    MdOutlineDateRange,
  } from 'react-icons/md';

const ongoingTournament = [
    {
        name: 'Tuesday Tournament',
        date: '07/03/2023'
    }
]

const finishedTournament = [
    {
        name: 'Sunday Tournament',
        date: '05/03/2023'
    }
]

const createdTournament = [
    {
        name: 'Wednesday Tournament',
        date: '08/03/2023'
    }
]

export const TournamentContent = () =>{
    return(
        <Box>
            <Box>
                <Heading mb={1} mt={1} fontSize='3xl'>
                    Ongoing
                </Heading>
                <Divider mb={4}/>
                {
                    ongoingTournament.map((tournament)=>(
                    <Card>
                        <CardHeader px={2} py={1}>
                            <Text fontSize='xl' as='b'>
                                {tournament.name}
                            </Text>
                        </CardHeader>
                        <CardBody px={2} py={0}>
                            <HStack mb={2}>
                                <Icon color="gray.500" as={MdOutlineDateRange} boxSize='6'/>
                                <Text color="gray.400" fontSize='sm'> {tournament.date}</Text>
                            </HStack>
                        </CardBody>
                    </Card>
                    ))
                }  
            </Box>
            <Box>
                <Heading mb={1} mt={4} fontSize='3xl'>
                    Created
                </Heading>
                <Divider mb={4}/>
                {
                    createdTournament.map((tournament)=>(
                    <Card>
                        <CardHeader px={2} py={1}>
                            <Text fontSize='xl' as='b'>
                                {tournament.name}
                            </Text>
                        </CardHeader>
                        <CardBody px={2} py={0}>
                            <HStack mb={2}>
                                <Icon color="gray.500" as={MdOutlineDateRange} boxSize='6'/>
                                <Text color="gray.400" fontSize='sm'> {tournament.date}</Text>
                            </HStack>
                        </CardBody>
                    </Card>
                    ))
                }  
            </Box>
            <Box>
                <Heading mb={1} mt={4} fontSize='3xl'>
                    Finished
                </Heading>
                <Divider mb={4}/>
                {
                    finishedTournament.map((tournament)=>(
                    <Card>
                        <CardHeader px={2} py={1}>
                            <Text fontSize='xl' as='b'>
                                {tournament.name}
                            </Text>
                        </CardHeader>
                        <CardBody px={2} py={0}>
                            <HStack mb={2}>
                                <Icon color="gray.500" as={MdOutlineDateRange} boxSize='6'/>
                                <Text color="gray.400" fontSize='sm'> {tournament.date}</Text>
                            </HStack>
                        </CardBody>
                    </Card>
                    ))
                }  
            </Box>
        </Box>
        
    )
}