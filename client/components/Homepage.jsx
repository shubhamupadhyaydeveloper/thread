import { Button, Flex } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Flex justifyContent={'center'}>
        <Link to='/elonmusk'>
        <Button>Visit page</Button>
        </Link>
    </Flex>
  )
}

export default Homepage;
