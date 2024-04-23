import { Box, Heading } from "@chakra-ui/react";
import VideoGallery from '../components/VideoGallery.jsx'; // Importing the VideoGallery component

const sampleVideos = [
  { url: 'http://example.com/video1.mp4', title: 'Video 1' },
  { url: 'http://example.com/video2.mp4', title: 'Video 2' },
  { url: 'http://example.com/video3.mp4', title: 'Video 3' }
];

const Work = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      <VideoGallery videos={sampleVideos} />
    </Box>
  );
};

export default Work;
