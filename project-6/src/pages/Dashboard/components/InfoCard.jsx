import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard';
import { Tag, Text } from '@chakra-ui/react';

const InfoCard = ({ImgUrl, text, tagText, inverted}) => {
  return (
    <CustomCard bgImage={ImgUrl} bgSize="cover" bgRepeat="no-repeat"
      bgColor={inverted ? "#5F00D9" : "white"}
    >
        <Tag color= {inverted ? "#5F00D9" : "white"}
          bg= {inverted ? "white" : "#5F00D9"}
          borderRadius="full">

          {tagText}

          </Tag>
        <Text mt="4" fontWeight="medium" textStyle="h5"
          color={inverted ? "white" : "black.80"}
        >{text}</Text>

      </CustomCard>
  )
}

export default InfoCard;