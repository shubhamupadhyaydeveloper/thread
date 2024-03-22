import {
    Box,
    Button, Modal,
    ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, Text, Textarea,
    useDisclosure
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { TbMessageCircle } from "react-icons/tb";


const ReplytoPost = ({post,setReply}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user  = useSelector(state => state.user.isUser)
    const [update,setUpdate] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const postId = post._id

    const onFormSubmit = async (data) => {
         setUpdate(true)
        try {
            const text = data.text
            const requestData = { text }
            const request = await fetch(`/api/post/reply/${postId}`,{
                method : "PUT",
                headers: {
                    "Content-Type": "application/json" // Specify content type as JSON
                },
                body: JSON.stringify(requestData)
            })
            const response = await request.json() 
            post.replies.push(response.reply)
            setReply(post?.replies?.length)
            reset()
            onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setUpdate(false)
        }
    }

    if(!user) {
        return null
    }
    return (
        <>
            <Box as='button'
                onClick={onOpen}
            > <TbMessageCircle />
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w={["330px", "330px", "450px", "450px", "450px"]}>
                    <ModalHeader>Reply to Post</ModalHeader>
                    <ModalCloseButton />


                    <ModalBody>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <Textarea placeholder='write your reply'
                                {...register("text", { required: "Text is required" })} mb={"15px"}
                            />
                             {errors.text && <Text color={"red"} fontWeight="semibold" fontSize="sm">{errors.text.message}</Text>}
                            <ModalFooter >
                                <Button type="submit" disabled={update} bg={"green.500"}>Submit</Button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ReplytoPost;
