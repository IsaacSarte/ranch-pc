import { 
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

const List = () => {
  return (
    <div className="list__container">
      <Flex direction="column">
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 1, delay: 3}}
        >
          <Grid templateColumns="repeat(5, 1fr)"
            className="list__container-grid list-top-1"
          >
            <GridItem
              w='100%'
              className="list-grid list-grid-1"
            >/desksetup</GridItem>
            <GridItem 
              w='100%'
              className="list-grid top-grid-2"
            >/office</GridItem>
            <GridItem 
              w='100%'
              className="list-grid"
            >/school</GridItem>
            <GridItem 
              w='100%'
              className="list-grid"
            >/personal</GridItem>
            <GridItem 
              w='100%'
              className="list-grid top-grid-5"
            >/work</GridItem>
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3}}
        >
          <Grid templateColumns="repeat(5, 1fr)" 
            className="list__container-grid bot-1 mt-4"
          >
            <GridItem
              w='100%'
              className="list-grid bot-grid-1"
            >/personal</GridItem>
            <GridItem 
              w='100%'
              className="list-grid"
            >/desktop</GridItem>
            <GridItem 
              w='100%'
              className="list-grid"
            >/office</GridItem>
            <GridItem 
              w='100%'
              className="list-grid"
            >/work</GridItem>
            <GridItem 
              w='100%'
              className="list-grid"
            >/school</GridItem>
          </Grid>
        </motion.div>
      </Flex>
    </div>
  )
}

export default List