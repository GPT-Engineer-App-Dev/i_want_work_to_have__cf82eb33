import React from 'react';
import { SimpleGrid, Box, Image, Text } from '@chakra-ui/react';

const VideoGallery = ({ videos }) => {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {videos.map((video, index) => (
        <Box key={index} p={5} shadow='md' borderWidth='1px'>
          <Image src={video.url} alt={`Video ${index + 1}`} />
          <Text mt={2}>{video.title}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default VideoGallery;
