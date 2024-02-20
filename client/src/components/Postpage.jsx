import { Text, Flex, Box, Avatar, Image, Divider, Button } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import Action from './Action';
import React, { useState } from 'react'
import Comment from './Comment';

const Postpage = ({post}) => {
    return (
        <Flex alignItems={"start"} direction={"column"}
        mt={["20vw","20vw","9.5vw","7vw","5.5vw"]}
        >
            <Flex justifyContent={"space-between"} w="full">
                <Flex gap={2} alignItems={"center"}>
                    <Avatar size={"md"} src='/elon_avatar.jpg' />
                    <Text fontSize={"bold"}>elon musk</Text>
                    <Image w={"20px"} h={"20px"} src='/verified.png' />
                </Flex>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>1d</Text>
                    <Box size={"md"}><BsThreeDots /></Box>
                </Flex>
            </Flex>
            <Text mt={4} mb={2}>Let's talk about Threads</Text>
            <Image w="full" borderRadius="12px" src='/elon_speech.jpg' />
            <Action post={post}/>
            <Divider mt={3}/>
            <Flex justifyContent="space-between" w="full" alignItems="center" mt={3}>
               <Flex  gap={2}> 
                👋 Get the app to like, reply and post
               </Flex>
               <Button w="3.5vw" bg="gray.dark" borderRadius="12px"><Text color={"white"}>Get</Text></Button>
            </Flex>
            <Divider mt={3}/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Flex>
    )
}

export default Postpage;
