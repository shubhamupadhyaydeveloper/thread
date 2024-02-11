import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { PiDotsThreeCircle } from "react-icons/pi";
import { VStack, Box, Flex, Text, Avatar , Menu , MenuButton , MenuList , Portal , MenuItem} from '@chakra-ui/react';
import useShowToast from '../hook/ShowToast';

const Userheader = () => {
  const showToast = useShowToast()

  const handleiconclick = () => {
     const requesturl = window.location.href
     navigator.clipboard.writeText(requesturl).then(() => {
        showToast("Link is copied" , 'success')
     })
  }

  return (
    <VStack
      gap={4}
      alignItems={"start"}
    >
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontWeight={'bold'} fontSize='30px'>Elon Musk</Text>
          <Flex >
            <Flex gap={3}>
              <Text >elonmusk</Text>
              <Text
                borderRadius={'full'}
                bg={"gray.600"}
                fontSize={"xs"}
                p={1}
              >threads.net</Text>
            </Flex>
          </Flex>
        </Box>
        <Avatar
          src='/elon_avatar.jpg'
          size={"xl"}
        />
      </Flex>
      <Text>the founder, chairman, CEO, and CTO of SpaceXthe founder</Text>

      <Flex justifyContent={"space-between"} w={'full'} mb={4}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>
          <Text color={"gray.light"}>instagram.com</Text>
        </Flex>

        <Flex  gap={2} >
          <Box >
            <FaInstagram  size="30px"/>
          </Box>
          <Box>
            <Menu>
              <MenuButton><PiDotsThreeCircle size="30px"/></MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem  onClick={handleiconclick} bg={"gray.dark"}>Copy Linked</MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"} >
          <Flex flex={1} borderBottom={"1px solid white"} justifyContent={"center"} pb='3' cursor={"pointer"}>
             <Text color={"gray.300"}>
             Threads
             </Text>
          </Flex>
          <Flex flex={1 } borderBottom={"1px solid gray"} justifyContent={"center"} pb='3' cursor={"pointer"}> 
             <Text color={"gray.600"}>
             Replies
             </Text>
          </Flex>
      </Flex>
    </VStack>
  )
}

export default Userheader;
