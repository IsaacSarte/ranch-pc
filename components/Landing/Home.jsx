import {
  Flex,
  Box,
  Text,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

import List from './Home/List'
import Footer from './Home/Footer'

const Home = () => {
  return (
    <div className="home__container">
      <Box className="home">
        <Flex direction="column" alignItems="center">
          <motion.div
            initial={{ opacity: 0, x: '-10vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <Text className="home-title title-1">
              Future <br /> <Text className="home-title title-2">Computer</Text>
            </Text>
          </motion.div>
        </Flex>

        <Flex direction="column" alignItems="center">
          <motion.div
            initial={{ opacity: 0, x: '-10vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            <Text className="home-details details-1">
              Build your computer needs that satisfies you with Ranch PC <br />
              <Text className="home-details details-2">Services including personal computer, business computer, <br />
                <Text className="home-details details-3">and other computer needs.</Text>
              </Text>
            </Text>
          </motion.div>
        </Flex>
      </Box>

      <Box className="mt-5">
        <List />
      </Box>

      <Box className="mt-5">
        <Footer />
      </Box>
    </div>
  )
}

export default Home;