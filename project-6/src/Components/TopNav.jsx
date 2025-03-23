import { Heading, Menu, MenuButton,MenuList, MenuItem, HStack, Box, Icon } from '@chakra-ui/react';
import React from 'react'
import { FaUserTie, FaBars  } from "react-icons/fa";


const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack maxW="60rem" mx="auto"  h="16" justify="space-between" >
          <Icon 
          as={FaBars} 
          onClick={onOpen}
          display={{
            base: "block",  
            lg: "none",
          }}
          
          />  
       
       <Heading fontWeight="medium" fontSize="25px">{title}</Heading>
       <Menu>
<MenuButton>
    <Icon as={FaUserTie} fontSize="24px"   />


</MenuButton>
<MenuList>
<MenuItem>Logout</MenuItem>
<MenuItem>Support</MenuItem>

</MenuList>
</Menu>

</HStack>
    </Box>
  )
}

export default TopNav;