import { Text, Flex, Avatar, Box, Image } from '@chakra-ui/react';
import { BsThreeDots } from "react-icons/bs";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Action from '../components/Action';


const Userpost = () => {
   const [liked , setLiked] = useState(false)

   return (

      <Link to={'/elonmusk/post/1'}>

         <Flex gap={2} mt={5}>
            <Flex direction={"column"} alignItems={"center"}>
               <Avatar
                  src='/elon_avatar.jpg'
               />
               <Box w='1px' h={"full"} bg='gray.light' my={2}></Box>
               <Flex position={"relative"}>
                  <Avatar size={"xs"} src='https://bit.ly/dan-abramov' position={"absolute"} right={"-10px"} />
                  <Avatar size={"xs"} src='https://bit.ly/ryan-florence' position={"absolute"} top={"25px"} left={"5px"} />
                  <Avatar size={"xs"} src='https://bit.ly/prosper-baba' position={"absolute"} top={"25px"} right={"5px"} />
               </Flex>

            </Flex>

            <Flex direction={"column"}>
               <Flex justifyContent={"space-between"} w={"full"}>
                  <Flex gap={1} alignItems={"center"}>
                     <Text fontWeight={"bold"}>elonmusk</Text>
                     <Image w={"20px"} h={"20px"} src='/verified.png' />
                  </Flex>
                  <Flex gap={2} alignItems={"center"}>
                     <Text color={"gray.light"}>1d</Text>
                     <Box size={"md"}><BsThreeDots /></Box>
                  </Flex>
               </Flex>
               <Text mt={2} mb={3}>This is my first thread</Text>
               <Image src='/post3.png' w={"full"} borderRadius={"14px"} />
               <Action liked={liked} setLiked={setLiked}/>
               <Flex color={"gray.light"} mt="-2" alignItems={"center"} gap={2}> 
                  <Text> 454 replies</Text>
                  <Box w='3px' h={"3px"} borderRadius="50px" bg='gray.light' my={2}></Box>
                  <Text>{liked ? 1 + 123 : 123} likes</Text>
               </Flex>
            </Flex>
         </Flex>
      </Link>

   )
}

export default Userpost;
