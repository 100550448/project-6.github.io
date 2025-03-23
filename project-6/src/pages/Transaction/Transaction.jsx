import { Card, HStack, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { FaDownload, FaSearch } from "react-icons/fa";
import { Button, Flex, Icon } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";

const TransactionPage = () => {

const tabs = [
  {
    name:"All",
    count:"349",
  },

  {
    name:"Deposite",
    count:"114",
  },

  {
    name:"Withdraw",
    count:"55",
  },
  
  {
    name:"Trade",
    count:"50",
  },
  
]

  return (
   <DashboardLayout title="Transactions">
    <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={FaDownload} /> }>Export CSV</Button>
      </Flex>
      
     <Card borderRadius="1rem">
     <Tabs>
  <TabList pt="4" display="flex" w="full" justifyContent="space-between" >

    <HStack>
    {
      tabs.map((tab) =>(
        <Tab key={tab.name} display="flex" gap="2" pb="4">
          {tab.name} <Tag colorScheme="gray" borderRadius="full" >{tab.count}</Tag>
        </Tab>

      ))
    }
    
    </HStack>

    <InputGroup maxWidth="200px"  pr="6">
    <InputLeftElement pointerEvents='none'>
      <Icon as={FaSearch}/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search....' />
  </InputGroup>

  </TabList>

  <TabPanels>
    <TabPanel>
      <TransactionTable />
    </TabPanel>
    <TabPanel>
    <TransactionTable />
    </TabPanel>
    <TabPanel>
    <TransactionTable />
    </TabPanel>
    <TabPanel>
    <TransactionTable />
    </TabPanel>
  </TabPanels>
</Tabs>
     </Card>
   </DashboardLayout>
  )
}

export default TransactionPage;