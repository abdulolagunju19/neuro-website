import React, { useRef, useState } from 'react';
import {
    Input,
    Stack,
    InputGroup,
    Button,
    Box,
    useColorMode,
    Text,
    Heading,
    InputRightElement,
    InputLeftElement,
    Icon,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from "@chakra-ui/react"
import { Formik } from 'formik';
import { useToast } from "@chakra-ui/react"

export const Subscribe = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }
    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    toast({
        title: "Account added.",
        description: "Your email has been added to the subscription list.",
        status: "success",
        duration: 3500,
        isClosable: true,
    })
  };
  
  const toast = useToast()
  return (
      <Box mt='10' width='100%' borderRadius="lg" border="2px" borderColor="gray.200" p={8} boxShadow='xl'>
        <Text fontSize="2xl" fontWeight="semibold">Subscribe to get Posts Delivered Right to Your Inbox!</Text>
        <FormControl id="email" isRequired>
          <form onSubmit={subscribe}>
              <FormLabel as="legend">{'Email Address'}</FormLabel>
              <Input
                variant="filled"
                id="email-input"
                name="email"
                placeholder="you@gmail.com"
                ref={inputEl}
                required
                type="email"
                width='full'
              />
              <Box mt='5' width='full'>
                  <Button 
                    type="submit"
                    transition='all 0.25s'
                    transitionTimingFunction='spring(1 100 10 10)'
                    _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
                  >
                    {'✨ Subscribe 💌'}
                  </Button>
              </Box>
        </form>
      </FormControl>
    </Box>
  );
}
