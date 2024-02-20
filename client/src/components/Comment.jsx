import { Avatar, Flex, Text, Box, Divider } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import React, { useState } from 'react'
import Action from './Action';

const Comment = () => {
    return (
        <>
        <Flex gap={3} w={"full"} >
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
                <Action />
            </Flex>
        </Flex>
        <Divider/>
        </>
    )
}

export default Comment;
