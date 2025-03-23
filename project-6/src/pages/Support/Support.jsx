
import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../Components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { FaMessage } from "react-icons/fa6";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";



const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="5rem">
      <SupportCard icon={IoMdMail} leftComponent={<ContactCard />} title="Contact Us" text="Have a question or just want to know more? Feel free to reach out to us." />

<SupportCard icon={FaMessage} leftComponent=
{<InfoCard ImgUrl="/grid_bg.png"
     inverted={true}
     tagText="Contact"
    text="Learn more about our real estate, mortgage, and  corporate account services" /> 
    } 
    title="Live chat" 
    text="Have a question or just want to know more? Feel free to reach out to us." />

      </Stack>
      
            </DashboardLayout>
  )
}

export default Support;