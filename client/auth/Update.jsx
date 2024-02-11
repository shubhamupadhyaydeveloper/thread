import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    Center,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/reducer'
import { useRef, useState } from 'react'
import useShowToast from '../hook/ShowToast';


export default function UserProfileEdit() {
    const dispatch = useDispatch()
    const showToast = useShowToast()
    const [sumbit , SetSubmit] = useState(false)
    const user = useSelector(state => state.user.isUser)
    const [inputs, setInputs] = useState({
        name: user?.name || "",
        username: user?.username || "",
        email: user?.email || "",
        bio: user?.bio || "",
        password: "",
        profilePic : user?.profilePic || ""
    })
    const fileref = useRef(null)
    const handleChange = (e) => {
      const file = e.target.files[0]
      const maxSize = 100 * 1024;
      if(file.size > maxSize) {
        showToast("filesize is too large" ,"warning")
        fileref.current.value = '';
        return;
      } else {
          setInputs({...inputs , profilePic : e.target.files[0]})
      }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if (sumbit) return;
		SetSubmit(true);
        const formdata = new FormData();
        formdata.append("profilePic", inputs.profilePic)
        formdata.append("name", inputs.name)
        formdata.append("username" , inputs.username)
        formdata.append("email", inputs.email)
        formdata.append("bio", inputs.bio)
        formdata.append("password", inputs.password)
        try {
            const request = await fetch(`/api/user/update/${user.id}`,{
                method: "PUT",
				body:  formdata,
            })
            const response = await request.json()
            console.log(response)
            dispatch(setUser(response))
            localStorage.setItem("user", JSON.stringify(response))
            
        } catch (err) {
            console.log(err)
        } finally {
           SetSubmit(false)
        }
  
    }
    return (
        <form action="#" onSubmit={handleUpdate}>
            <Flex
                align={'center'}
                justify={'center'}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.dark')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    >
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                        User Profile Edit
                    </Heading>
                    <FormControl id="userName">
                        <FormLabel>User Icon / less than 100kb</FormLabel>
                        <Stack direction={['column', 'row']} spacing={6}>
                            <Center>
                                <Avatar size="xl" src={user?.profilePic} />
                            </Center>
                            <Center w="full">
                                <Button w="full" onClick={() => fileref.current.click()}>Change Icon</Button>
                                <input type="file" hidden ref={fileref} onChange={handleChange} />
                            </Center>
                        </Stack>
                    </FormControl>
                    <FormControl id="fullname">
                        <FormLabel>Fullname</FormLabel>
                        <Input
                            placeholder="elonmusk"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            onChange={(e) => setInputs({...inputs , name : e.target.value})}
                            value={inputs.name}
                        />
                    </FormControl>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input
                            placeholder="elon"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            onChange={(e) => setInputs({...inputs , username : e.target.value})}
                            value={inputs.username}
                        />
                    </FormControl>
                    <FormControl id="bio">
                        <FormLabel>Bio</FormLabel>
                        <Input
                            placeholder="hi i am founder of spaceX"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            onChange={(e) => setInputs({...inputs , bio : e.target.value})}
                            value={inputs.bio}
                        />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input
                            placeholder="elon@gmail.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                            onChange={(e) => setInputs({...inputs , email : e.target.value})}
                            value={inputs.email}
                        />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            onChange={(e) => setInputs({...inputs , password : e.target.value})}
                            value={inputs.password}
                        />
                    </FormControl>
                    <Stack spacing={6} direction={['column', 'row']}>
                       
                        <Button
                            bg={'green.400'}
                            color={'white'}
                            isLoading={sumbit}
                            loadingText='Submitting'
                            w="full"
                            type='submit'
                            _hover={{
                                bg: 'green.500',
                            }}>
                            Submit
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </form>
    )
}