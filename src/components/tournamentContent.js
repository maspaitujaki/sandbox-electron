import { Heading, Box, Divider} from "@chakra-ui/react"
import { TournamentCard } from "./tournamentCard";

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
                        <TournamentCard
                        tournament={tournament}
                        />
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
                    <TournamentCard
                    tournament={tournament}
                    />
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
                    <TournamentCard
                    tournament={tournament}
                    />
                    ))
                }  
            </Box>
        </Box>
        
    )
}