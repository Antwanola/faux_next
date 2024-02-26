'use client'

import { Stack, Flex, Button, Text, HStack, useBreakpointValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <HStack
        w={'full'}
        justify={'left'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} ml={30}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            textAlign={"left"}
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}>
            Go wherever,<br/>whenever.
          </Text>
          <Text 
          color={'white'}
          maxW={useBreakpointValue({ base: 'sm', md: 'xl'})}
          fontSize={useBreakpointValue({ base: '3sm', md: '6sm'})} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis atque inventore pariatur sequi, officiis temporibus alias veniam natus deleniti quod repellat, repudiandae mollitia nostrum neque. Corporis dolore dicta iusto.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg='Green'
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'dGreen' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  )
}
