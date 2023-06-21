import { 
  Flex,
  Box,
  Heading,
  List,
  ListItem
} from "@chakra-ui/react"

// icons
import { FaFacebookSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'

// images
import Image from "next/image"
import logo from '../../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="footer__container pb-1">
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="space-around" className="gap-2">
        <Flex alignItems="center">
          <Box p="2" w="60px">
            <Image src={logo} alt="logo" className="logo-footer" />
          </Box>
          <Box p="2">
            <Heading size="md" className="footer-title">Ranch PC</Heading>
          </Box>
        </Flex>

        <Flex alignItems="center">
          <List display="flex" className="footer-list gap-4">
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Services</ListItem>
          </List>
        </Flex>

        <Flex alignItems="center" className="gap-4 mt-2 md:mt-0">
          <FaFacebookSquare />
          <SiGmail />
          <BsFillTelephoneFill />
        </Flex>
      </Flex>
    </div>
  )
}

export default Footer