import { Box ,Flex,Text } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <Flex alignItems={"center"} justifyContent={"center"} h={"100vh"}>
            <Text fontWeight={"bold"} fontSize={"40px"}>Loading...</Text>
        </Flex>
    )
}

export default Loader
