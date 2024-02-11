import { Button, Flex } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import useShowToast from '../hook/ShowToast';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { setUser } from '../store/reducer';
const Logout = () => {
  const showToast = useShowToast()
  const dispatch = useDispatch()
  const handlelogout = async () => {
    try {
      const request = await fetch("/api/user/logout",{
        method : 'POST',
        headers: {
          "Content-Type": "application/json"
      },
      })
      const response = await request.json()
      if(response.message) {
        showToast( response.message , 'errror')
        return;
      }
      if(response.success) {
        showToast(response.success , "success")
      }
      localStorage.removeItem('user')
      dispatch(setUser(null))
    } catch (err) {
      showToast( err.message , 'error')
    }
  }

  return (
    <Flex position={"absolute"} top="0px" right={["20px","20px","5rem","5rem","5rem"]}>
      <Button onClick={handlelogout}>
        <RiLogoutCircleRLine size={"20px"}/>
      </Button>
    </Flex>
  )
}

export default Logout;
