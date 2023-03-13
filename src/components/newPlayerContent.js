import { Box, Button, Text, FormControl, FormLabel, FormHelperText, Input, HStack, Spacer, useToast,Heading, Divider } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"

export const NewPlayerContent = () => {
    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors }
      } = useForm();
    
    const toast = useToast()
      
    const onSubmit = async (data) => {
        try {
            let user = await window.api.createPlayer({
                id : data.id,
                first_name :data.first_name,
                last_name : data.last_name
            })
            console.log(user)
            user.id !== null ? toast({
                title: 'Success.',
                description: "Player is succesfully created.",
                status: 'success',
                duration: 2000,
                isClosable: true,
              }) : toast({
                title: 'Error.',
                description: "Player is not created try again.",
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            reset()
          } catch (error) {
            console.error(error);
          }
    };
    return(
        <Box>
            <Heading mb={1} mt={1} fontSize='3xl'>
                Player Information
            </Heading>
            <Divider mb={4}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb={3}>
                    <FormLabel>Player ID</FormLabel>
                        <Input type='text' {...register("id")}/>
                    <FormHelperText>If unspecified, player will be assigned a temporary ID.</FormHelperText>
                </FormControl>
                <FormControl mb={3} isRequired>
                    <FormLabel>First Name</FormLabel>
                        <Input type='text' {...register("first_name")}/>
                </FormControl>
                <FormControl mb={3}>
                    <FormLabel>Last Name</FormLabel>
                        <Input type='text' {...register("last_name")}/>
                </FormControl>
                <HStack>
                    <NavLink to="/players">
                        <Button bg='transparent' border='1px' borderColor='gray.400' boxShadow='md'> 
                            <Text fontSize='sm'>
                                ← Done
                            </Text>
                        </Button>
                    </NavLink>
                    <Spacer/>
                    <Button type="submit" bg='transparent' border='1px' borderColor='gray.400' boxShadow='md'>Okay</Button>
                </HStack>
            </form>
            {/* <NavLink>
                <Button bg='transparent' border='1px' borderColor='gray.400' boxShadow='md'> 
                    <Text fontSize='sm'>
                        ← Back
                    </Text>
                </Button>
            </NavLink> */}
        </Box>
    )
}