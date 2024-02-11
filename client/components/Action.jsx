import { Flex, Box } from '@chakra-ui/react';
import { TbMessageCircle } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import React from 'react'
import { GoHeart } from "react-icons/go";

const Action = ({liked , setLiked}) => {

    return (
        <Flex mt={4} mb={5} alignItems="center" gap={["3", "3", "3"]} onClick={(e) => e.preventDefault()}>
            <Box fontSize={['1.2rem', '1.45rem', "2.4vw", "2.3vw",'1.35vw']}>
                {liked ? (
                    <GoHeartFill fill='red'
                        onClick={() => setLiked(!liked)}
                    />


                ) : <GoHeart
                    onClick={() => setLiked(!liked)}
                />}
            </Box>

            <Box fontSize={['1.2rem', '1.45rem', "2.4vw","2.3vw", '1.35vw']}>
                <TbMessageCircle />
            </Box>

            <svg
                aria-label='Repost'
                color='currentColor'
                fill='currentColor'
                height='20'
                role='img'
                viewBox='0 0 24 24'
                width='20'
            >
                <title>Repost</title>
                <path
                    fill=''
                    d='M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z'
                ></path>
            </svg>
            <Box fontSize={['1.2rem', '1.5rem', '2.4vw', '2.3vw', "1.35vw" ]} mt="-1">
                <FiSend />
            </Box>

        </Flex>
    )
}

export default Action;
