import { Button, HStack, Icon, Stack, Tag, Text }  from '@chakra-ui/react';
import { CiCircleInfo } from "react-icons/ci";
import React from 'react';
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
const PortfolioSection = () => {
  return (
    <HStack 
    justify="space-between"
     bg="white"
      borderRadius="xl"
       p="6" 
        
 align={{
            base: "flex-start",
            xl: "center",
        }}
       flexDir={{
        base: "column",
        xl:"row",
       }} >
       
        <HStack spacing={14} 
          align={{
            base: "flex-start",
            xl: "center",
        }}
       flexDir={{
        base: "column",
        xl:"row",
       }} 
        >
        <Stack>
    <HStack color="black.80">
    <Text fontSize="sm">Total Portfolio Value</Text>
    <Icon as={CiCircleInfo}/>
        </HStack>   
        <Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
    </Stack>  

       <Stack>
    <HStack color="black.80">
    <Text fontSize="sm">Wallet Balances</Text>
   
        </HStack>
       <HStack spacing={5}
        align={{
            base: "flex-start",
            sm: "center",
        }}
       flexDir={{
        base: "column",
        sm:"row",
       }} 
       >
       <HStack>
            <Text textStyle="h2" fontWeight="medium">22.39401000</Text>
            <Tag colorScheme='gray'>BTC</Tag>
        </HStack>

        <HStack>
            <Text textStyle="h2" fontWeight="medium" >₹ 1,300.00</Text>
            <Tag colorScheme='gray'>INR</Tag>
        </HStack>

       </HStack>

        
    </Stack>  
       
        </HStack>

    <HStack>
           <Button leftIcon={<Icon as ={FaLongArrowAltDown} />}>Deposite</Button>
           <Button leftIcon={<Icon as ={FaLongArrowAltUp} />}>Withdraw</Button> 
        </HStack>  
 
    </HStack>    
)
}   

export default PortfolioSection; 