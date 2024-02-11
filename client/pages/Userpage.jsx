import { Text } from '@chakra-ui/react';
import React from 'react'
import Userheader from '../components/Userheader';
import Userpost from './Userpost';

const Userpage = () => {
  return (
     <>
      <Userheader/>
      <Userpost/>
     </>
  )
}

export default Userpage;
