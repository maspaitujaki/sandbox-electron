import { TableContainer, Table, Thead, Tr, Th, Checkbox, Tbody, Td } from "@chakra-ui/react";

export const SelectableTable = ({data, checkedIds, onChangeCheckedIds}) => {
    return (
        <TableContainer overflowY="auto" maxHeight='md' border='1px' borderColor='gray.300' mb={3}>
            <Table variant='striped' colorScheme='gray' size='sm'>
                    <Thead position="sticky" top={0} bgColor="white">
                        <Tr>
                            <Th>ID</Th>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>
                                <Checkbox
                                isChecked={
                                    checkedIds.length ===
                                    data.map(player => player.player_id).length
                                    }
                                    onChange={() => {
                                    const playerIds = data.map(player => player.player_id);
                                    if (checkedIds.length === playerIds.length) {
                                        onChangeCheckedIds([]);
                                    } else {
                                        onChangeCheckedIds(playerIds);
                                    }
                                    }}
                                /></Th>
                        </Tr>
                    </Thead>
                <Tbody>
                {
                    data.map((player, index)=>(
                        <Tr
                        key={player.id}
                        // _hover={{ bg: bg }}
                        // _groupHover={{ bg: bg }}
                        cursor="pointer">
                            <Td>{player.player_id}</Td>
                            <Td>{player.first_name}</Td>
                            <Td>{player.last_name}</Td>
                            <Td>
                                <Checkbox
                                isChecked={checkedIds.includes(player.player_id)}
                                onChange={event => {
                                    event.stopPropagation();
                                    const index = checkedIds.indexOf(player.player_id);
                                    if (index > -1) {
                                    onChangeCheckedIds([
                                        ...checkedIds.slice(0, index),
                                        ...checkedIds.slice(index + 1)
                                    ]);
                                    } else {
                                    onChangeCheckedIds([
                                        ...checkedIds,
                                        player.player_id
                                    ]);
                                    }
                                }}/>
                            </Td>
                        </Tr>
                    ))
                } 
                </Tbody>
            </Table>
        </TableContainer>
    )
}