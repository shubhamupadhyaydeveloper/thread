import { Avatar, Flex, Text, Box, Divider } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import React, { useState } from 'react'
import Action from './Action';

const Comment = () => {
    const [liked , setLiked] = useState(false)
    return (
        <>
        <Flex gap={3} w={"full"} mt={4} >
            <Avatar size="xs" src='https://bit.ly/dan-abramov' mt="1"/>
            <Flex direction="column" alignItems="start" w="full">
                <Flex gap={2} justifyContent="space-between" w="full" alignItems={"center"}>
                    <Text fontWeight="bold">elon musk</Text>
                    <Flex gap={2} alignItems="center">
                        <Text color={"gray.light"}>2d</Text>
                        <Box size={"md"}><BsThreeDots /></Box>
                    </Flex>
                </Flex>
                <Text>I love this post! Looks really cool</Text>
                <Action liked={liked} setLiked={setLiked}/>
                <Text mt="-2" mb="1" color="gray.light">{liked ? 1 + 12 : 12}likes</Text>
            </Flex>
        </Flex>
        <Divider/>
        </>
    )
}

export default Comment;
