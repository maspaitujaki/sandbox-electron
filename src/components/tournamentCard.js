import { Card, CardHeader, Text, CardBody, HStack, Icon, Spacer, Box } from "@chakra-ui/react"
import {
    MdOutlineDateRange,
  } from 'react-icons/md';
import { NavLink } from "react-router-dom";

export const TournamentCard = ({ tournament , status}) => {
    return(
        <Card
        overflow='hidden'
        variant='outline'>
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
    )
}