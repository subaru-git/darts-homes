import React, { FC } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
  Spacer,
} from '@chakra-ui/react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { GetNavItem, NavItem } from './NavigationItem';
import LanguageChangeButton from '@/components/LanguageChangeButton';

const NavigationBar: FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const items = GetNavItem();
  return (
    <>
      <Box position={{ md: 'fixed' }} width={'100%'} zIndex={200} as={'header'}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <GrClose width={3} height={3} /> : <GiHamburgerMenu width={5} height={5} />
              }
              variant={'ghost'}
              aria-label={'toggle navigation'}
            />
          </Flex>
          <Flex flex={{ base: 'auto' }} justify={{ base: 'center', md: 'start' }}>
            <Box
              _hover={{
                textDecoration: 'none',
                color: useColorModeValue('gray.800', 'white'),
              }}
            >
              <Link href={'/'} passHref>
                <a>
                  <Image src={'/logo.svg'} alt={'darts homes logo'} h={'40px'} w={'200px'} />
                </a>
              </Link>
            </Box>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav items={items} />
            </Flex>
            <Spacer />
            <LanguageChangeButton />
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav items={items} />
        </Collapse>
      </Box>
      <Box pt={'60px'} display={{ base: 'none', md: 'block' }} />
    </>
  );
};

const DesktopNav: FC<{ items: NavItem[] }> = ({ items }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Stack direction={'row'} spacing={4} alignItems={'center'}>
      {items.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                <Link href={navItem.href ?? '#'} passHref aria-label={navItem.label}>
                  {navItem.label}
                </Link>
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack maxH={'80vh'} overflowY={'scroll'}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Link href={href ?? '/'}>
        <a aria-label={label}>
          <Stack direction={'row'} align={'center'}>
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'pink.400' }}
                fontWeight={500}
              >
                {label}
              </Text>
              <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>
            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}
            >
              <Icon color={'pink.400'} w={5} h={5} as={GoChevronRight} />
            </Flex>
          </Stack>
        </a>
      </Link>
    </Box>
  );
};

const MobileNav: FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {items.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link href={href && !children ? href : '#'} passHref>
        <Flex
          py={2}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={GoChevronDown}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href ?? '/'}>
                <Box py={2}>{child.label}</Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default NavigationBar;
