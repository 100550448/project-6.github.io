import React, { Fragment } from 'react'
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from '../../../chakra/CustomCard';
import { MdCurrencyRupee} from "react-icons/md";
import { FaBtc } from "react-icons/fa";

const Transactions = () => {

    const transactions  = [
       {
        id: "1",
         icon : MdCurrencyRupee,  
        Text : "INR Deposite",
        amount : "+ ₹81,123.10",
        timestamp : "2022-06-09 7:06 PM",
    },

    {
id: "2",
        icon : FaBtc,  
       Text : "INR Deposite",
       amount : "+ ₹81,123.10",
       timestamp : "2022-06-09 7:06 PM",
   },
   
   {
id: "3",
    icon : MdCurrencyRupee,
   Text : "INR Deposite",
   amount : "+ ₹81,123.10",
   timestamp : "2022-06-09 7:06 PM",
},

    
    ];


  return (
    <CustomCard h='full'>
        <Text mb="6" fontSize="sm" color="black.80" >Recent Transactions</Text>

        <Stack spacing="4">
          {transactions.map((transaction, i) =>(
            <Fragment key={transaction.id}> 

            {i !== 0 && <Divider /> }
              <Flex  gap="4" w="full">
              <Grid placeItems="center"  bg="black.5" boxSize={10} borderRadius="full">
              <Icon as={transaction.icon} />
              </Grid>

              <Flex justify='space-between' w="full">
              <Stack spacing="0">
                <Text textStyle="h6" >
                  {transaction.Text}
                </Text>

                <Text fontSize="sm" color="black.80">
                  {transaction.timestamp}
                </Text>


              </Stack>

              <Text textStyle="h6" >
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>

            </Fragment>
          ))}
        </Stack>  

        <Button w="full" mt="6" colorScheme="gray">View All</Button>
        </CustomCard>
  )
}

export default Transactions;