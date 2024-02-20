import { Text, Flex, Avatar, Box, Image } from '@chakra-ui/react';
import dayjs from "dayjs"
import { BsThreeDots } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Action from "../components/Action"

const FeedPost = ({post , postedBy}) => {
   const [user , setUser] = useState({})

   useEffect(() => {
      const getProfile = async () => {
        const request = await fetch(`/api/user/profile/${postedBy}`)
        const response  = await request.json()
        setUser(response)
      }
      getProfile()
   },[])

   return (
      <Link to={'/elonmusk/post/1'} >   
         <Flex gap={2} mt={["20vw","20vw","9.5vw","8vw","5vw"]}>
            <Flex direction={"column"} alignItems={"center"}>
               <Avatar
                  src={user?.profilePic}
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
                     <Text fontWeight={"bold"}>{user?.username}</Text>
                     <Image w={"20px"} h={"20px"} src='/verified.png' />
                  </Flex>
                  <Flex gap={2} alignItems={"center"}>
                     <Text color={"gray.light"}>{dayjs(user?.createdAt).format('DD-MM-YYYY')}</Text>
                  </Flex>
               </Flex>
               <Text mt={2} mb={3}>{post?.text}</Text>
               <Image src={post?.img} w={"full"} borderRadius={"14px"} />
               <Action post={post} />
            </Flex>
         </Flex>
      </Link>

   )
}

export default FeedPost;
