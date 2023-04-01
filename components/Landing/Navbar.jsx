import { useState, useEffect } from 'react'

import { 
  Flex,
  Box,
  Heading,
  List,
  ListItem
} from '@chakra-ui/react'

// icons
import { TbArrowsRightLeft } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { MdInfo } from 'react-icons/md';

// images
import Image from 'next/image'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [width, setWidth] = useState(false)

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked)
  }

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (width < 768) {
      setIsMenuClicked(false)
    }
  }, [width])

  return (
    <div className="navbar__container">
      <Flex color="#FFF" fontWeight="700" alignItems="center" justifyContent="space-around">
        {/* left nav */}
        <Flex alignItems="center">
          <Box p="2" w="100px">
            <Image src={logo} alt="logo" className="logo-image" />
          </Box>
          <Box p="2">
            <Heading size="lg" className="navbar-title">Ranch PC</Heading>
          </Box>
        </Flex>

        {/* right nav */}
        <Flex alignItems="center">
          <List display={{ base: 'none', md: 'flex' }} className="gap-2">
            <ListItem>Home</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>About</ListItem>
          </List>

          {/* quote now button */}
          <List display={{ base: 'none', md: 'flex' }} marginLeft="4" className="gap-2">
            <Flex className="quote-btn">
              <TbArrowsRightLeft fontSize={25} />
              <span>Quote Now</span>
            </Flex>
          </List>

          {/* hamburger menu button */}
          <List display={{ base: 'flex', md: 'none'}}>
            <GiHamburgerMenu
              className="hamburger-menu"
              fontSize={25}
              onClick={handleMenuClick}
            />
          </List>
        </Flex>
      </Flex>

      {/* overlayed menu */}
      {isMenuClicked && (
        <div className="navbar__container-overlay">
          <Flex alignItems="center" justifyContent="space-between">
            <Box p="2" w="75px">
              <Image src={logo} alt="logo" className="logo-overlay" />
            </Box>
            <IoIosClose
              className="close-menu"
              fontSize={45}
              onClick={handleMenuClick}
            />
          </Flex>

          <List className="list-overlay" spacing={4}>
            <ListItem display="flex" alignItems="center" className="list-item-overlay">
              <HiOutlineHome fontSize={25} />Home
            </ListItem>
            <ListItem display="flex" alignItems="center" className="list-item-overlay">
              <MdOutlineMiscellaneousServices fontSize={25} /> Services
            </ListItem>
            <ListItem display="flex" alignItems="center" className="list-item-overlay">
              <MdInfo fontSize={25} />About
            </ListItem>
          </List>

          <hr className="my-2" />

          <Flex className="quote-btn btn-overlay">
            <TbArrowsRightLeft fontSize={25} />
            <span>Quote Now</span>
          </Flex>
        </div>
      )}
    </div>
  )
}

export default Navbar;