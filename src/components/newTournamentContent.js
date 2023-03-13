import { Box, Button, Text, FormControl, FormLabel, Textarea, Input, HStack, Spacer, useToast, Heading, Divider, Select, FormHelperText, Icon} from "@chakra-ui/react"
import { MdArrowUpward, MdArrowDownward } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { SelectableTable } from "./selectableTable"

const players = [
    {
        player_id : 'P01',
        first_name : 'Dimas',
        last_name : 'Muzaki'
    },
    {
        player_id : 'P02',
        first_name : 'Diclo',
        last_name : 'Fenac'
    },
    {
        player_id : 'P03',
        first_name : 'Diethy',
        last_name : 'Lamine'
    },
    {
        player_id : 'P04',
        first_name : 'Pairing',
        last_name : 'System'
    },
    {
        player_id : 'P05',
        first_name : 'Git',
        last_name : 'Graph'
    },
]


export const NewTournamentContent = () => {
    const [checkedAvailablePlayersIds, setCheckedAvailablePlayersIds] = useState([]);
    const [checkedEnrolledPlayerIds, setCheckedEnrolledPlayerIds] = useState([]);

    const [availablePlayers, setAvailablePlayers] = useState(players)
    const [enrolledPlayers, setEnrolledPlayers] = useState([])


    const {
        register,
        handleSubmit,
        reset,
        setValue
        // formState: { errors }
      } = useForm();
    
    const toast = useToast()

    const onClickEnroll = () => {
        const [enrolled, unenrolled] = availablePlayers.reduce(([p, f], e) => (checkedAvailablePlayersIds.includes(e.player_id) ? [[...p, e], f] : [p, [...f, e]]), [[], []]);
        setAvailablePlayers(unenrolled)
        setEnrolledPlayers([...enrolledPlayers,...enrolled])
        setCheckedAvailablePlayersIds([])
        setCheckedEnrolledPlayerIds([])
    }

    const onClickRemove = () => {
        const [removed, unremoved] = enrolledPlayers.reduce(([p, f], e) => (checkedEnrolledPlayerIds.includes(e.player_id) ? [[...p, e], f] : [p, [...f, e]]), [[], []]);
        setAvailablePlayers([...availablePlayers,...removed])
        setEnrolledPlayers(unremoved)
        setCheckedAvailablePlayersIds([])
        setCheckedEnrolledPlayerIds([])
    }
      
    const onSubmit = async (data) => {
        // alert(JSON.stringify(data))
        alert(JSON.stringify(checkedAvailablePlayersIds))
        alert(JSON.stringify(checkedEnrolledPlayerIds))
        // try {
        //     let user = await window.api.createPlayer({
        //         id : data.id,
        //         first_name :data.first_name,
        //         last_name : data.last_name
        //     })
        //     console.log(user)
        //     user.id !== null ? toast({
        //         title: 'Success.',
        //         description: "Player is succesfully created.",
        //         status: 'success',
        //         duration: 2000,
        //         isClosable: true,
        //       }) : toast({
        //         title: 'Error.',
        //         description: "Player is not created try again.",
        //         status: 'error',
        //         duration: 2000,
        //         isClosable: true,
        //       });
        //     reset()
        //   } catch (error) {
        //     console.error(error);
        //   }
    };

    return (
        <Box>
            <Heading mb={1} mt={1} fontSize='3xl'>
                Tournament Information
            </Heading>
            <Divider mb={4}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb={3} isRequired>
                    <FormLabel>Tournament Name</FormLabel>
                        <Input type='text' {...register("tournament_name")}/>
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                    h={100}
                    {...register("tournament_description")}
                    />
                </FormControl>
                <FormControl mb={3} isRequired>
                    <FormLabel>Scheduled Date</FormLabel>
                    <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    />
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Pairing Method</FormLabel>
                    <Select placeholder='Select option'
                    {...register("pairing_method")}
                    onChange={(e) => setValue('pairing_method', e.target.value, { shouldValidate: true })}
                    >
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Select Participant</FormLabel>
                    <Divider/>

                    <FormHelperText>Enrolled Players</FormHelperText>
                    <SelectableTable
                    data={enrolledPlayers}
                    checkedIds={checkedEnrolledPlayerIds}
                    onChangeCheckedIds={setCheckedEnrolledPlayerIds}/>

                    <HStack>
                        <Spacer/>
                        <Button onClick={onClickEnroll}>
                            <Text>Enroll</Text>
                            <Icon as={MdArrowUpward} boxSize='5'/>
                        </Button>
                        <Button onClick={onClickRemove}>
                            <Text>Remove</Text>
                            <Icon as={MdArrowDownward} boxSize='5'/>
                        </Button>
                        <Spacer/>
                    </HStack>
                    
                    <FormHelperText>Available Players</FormHelperText>
                    <SelectableTable
                    data={availablePlayers}
                    checkedIds={checkedAvailablePlayersIds}
                    onChangeCheckedIds={setCheckedAvailablePlayersIds}/>
                </FormControl>

                <HStack>
                    <NavLink to="/">
                        <Button bg='transparent' border='1px' borderColor='gray.400' boxShadow='md'> 
                            <Text fontSize='sm'>
                                Cancel
                            </Text>
                        </Button>
                    </NavLink>
                    <Spacer/>
                    <Button type="submit" bg='transparent' border='1px' borderColor='gray.400' boxShadow='md'>Okay</Button>
                </HStack>
            </form>
        </Box>
    )
}