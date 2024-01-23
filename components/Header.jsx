import { Flex, useColorMode, Image } from '@chakra-ui/react';
import React from 'react'

const Header = () => {
    const {colorMode , toggleColorMode} = useColorMode()
    return (
        <>
          <Flex
            justifyContent={'center'}
            mt={'6'}
            mb="12"
          >
            <Image
              alt='logo'
              w={8}
              cursor={"pointer"}
              onClick={() => toggleColorMode()}
              src={colorMode === 'dark' ? "/light-logo.svg" : "/dark-logo.svg"}
            />
         </Flex> 
        </>
    )
}

export default Header;
