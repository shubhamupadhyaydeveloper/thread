import { Flex, Image, Spinner, Text } from '@chakra-ui/react';
import React, { Suspense, useState } from 'react'
import useShowToast from '../hook/ShowToast';
import { useSelector } from 'react-redux';
import Userheader from '../components/Userheader';
import Userpost from './Userpost';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Userpage = () => {
  const showToast = useShowToast()
  const [loading , setLoading] = useState(true)
  const [user, setUser] = useState('')
  const { username } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const request = await fetch(`/api/user/profile/${username}`);
        const response = await request.json()
        if (response.message) {
          showToast(response.message, "error")
        } else {
          setUser(response)
        }
      } catch (err) {
        console.log("Error in fetch user", err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])
  
  if(!user && loading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="100px">
        <Spinner size="xl" mt={"15vh"} />
      </Flex>
    )
  }

  if (!user && !loading) return (
    <Flex flexDirection={"column"} alignItems={"center"} gap={3}>
      <Image src='/notfound.svg' mt={["65vw","65vw","25vw","15vw"]}/>  
      <Text fontWeight={"bold"} fontSize={"2xl"}>Page not found</Text>                                                                          
    </Flex>
  )

  return (
    <>
        <Userheader user={user} />
        <Userpost />
    </>
  )
}

export default Userpage;
