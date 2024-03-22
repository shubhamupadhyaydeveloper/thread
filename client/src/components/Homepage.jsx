import { Box, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useShowToast from '../hook/ShowToast';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
import FeedPost from './FeedPost';
import RecommendUser from './RecommendUser';

const Homepage = () => {
  const user = useSelector(state => state.user.isUser)
  const navigate = useNavigate()
  const [feed, setFeed] = useState([])
  const [loading, setLoading] = useState(true)
  const showToast = useShowToast()

  useEffect(() => {
    const feedUser = async () => {
      try {
        setLoading(true)
        const request = await fetch('/api/user/feed')
        const response = await request.json()
        if (response.error) {
          showToast("Follow someuser for Feed", "warning")
        } else {
          setFeed(response)
        }
      } catch (err) {
        console.log(err.message)
      } finally {
        setLoading(false)
      }
    }
    feedUser()
  }, [])

  if (feed.length === 0 && loading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="100px">
        <Spinner size="xl" mt={"15vh"} />
      </Flex>
    )
  }

  if (feed.length === 0 && !loading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} flexDirection="column" mt={"5vh"} >
        <Image src='/home.svg' _focus={{ outline: 'none' }} w={["50vw", "50vw", "30vw"]} mt={"10vh"} />
        <Text mt={"5vh"} fontWeight={['md', 'md', 'semibold', "bold"]} fontSize={["md", "md", "xl", "2xl"]}>Follow Users for Feed</Text>
        <RecommendUser />
      </Flex>
    )
  }
  return (
    <>
      {user ? (
        <>
          <Box>
            {feed?.map((item) => (
              <FeedPost key={`post-${item._id}`} post={item} postedBy={item.postedBy} />
            ))}
          </Box>
          <RecommendUser />
        </>
      ) : navigate('/auth/login')}
    </>
  )

}

export default Homepage;
