import React, { FC } from 'react';
import { Collapse, Popover, PopoverTrigger, PopoverContent, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import UserMenu from '../UserMenu';
import { GetNavItem, NavItem } from './NavigationItem';
import IconButton from '@/atoms/IconButton';
import LanguageChangeButton from '@/components/LanguageChangeButton';

const NavigationBar: FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const items = GetNavItem();
  return (
    <>
      <header className='z-[200] w-full md:fixed'>
        <div className='flex min-h-[60px] items-center border-b border-solid border-gray-200 bg-white px-4 py-2 text-gray-600'>
          <div className='-ml-2 flex flex-1 md:hidden md:flex-auto'>
            <IconButton onClick={onToggle} color='ghost' aria-label='toggle navigation'>
              {isOpen ? <GrClose size={16} /> : <GiHamburgerMenu size={18} />}
            </IconButton>
          </div>
          <div className='flex flex-auto justify-center md:justify-start'>
            <Link href='/' passHref>
              <Image src='/logo.svg' alt='darts homes logo' height={40} width={200} />
            </Link>
            <div className='ml-10 hidden md:flex'>
              <DesktopNav items={items} />
            </div>
            <div className='flex-1' />
            <div className='flex items-center gap-2'>
              <LanguageChangeButton />
              <UserMenu />
            </div>
          </div>
        </div>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav items={items} />
        </Collapse>
      </header>
      <div className='hidden pt-[60px] md:block' />
    </>
  );
};

const DesktopNav: FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <div className='flex flex-row items-center gap-4'>
      {items.map((navItem) => (
        <div key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <div className='p-2 text-sm font-medium text-gray-500 hover:text-gray-800'>
                <Link href={navItem.href ?? '#'} passHref aria-label={navItem.label}>
                  {navItem.label}
                </Link>
              </div>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={'white'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <div className='max-h-[80vh] overflow-y-scroll'>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>
        </div>
      ))}
    </div>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <div className='group rounded-md p-2 hover:bg-pink-50'>
      <Link href={href ?? '/'}>
        <div className='flex flex-row items-center'>
          <div>
            <p className='font-medium text-gray-600 transition-all duration-300 group-hover:text-pink-400'>
              {label}
            </p>
            <p className='text-sm'>{subLabel}</p>
          </div>
          <div className='flex flex-1 -translate-x-3 justify-end opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
            <GoChevronRight size={20} className='text-pink-400' />
          </div>
        </div>
      </Link>
    </div>
  );
};

const MobileNav: FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <div className='bg-white p-4'>
      {items.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </div>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div onClick={children && onToggle}>
      <Link href={href && !children ? href : '#'} passHref>
        <div className='flex flex-row items-center justify-between p-2'>
          <span className='font-medium text-gray-600'>{label}</span>
          {children && (
            <GoChevronDown
              size={20}
              className={`${isOpen ? 'rotate-180' : ''} transition-all duration-200 ease-in-out`}
            />
          )}
        </div>
      </Link>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <div className='mt-2 border-l-2 border-gray-200 pl-4 text-start'>
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href ?? '/'}>
                <div className='py-3'>{child.label}</div>
              </Link>
            ))}
        </div>
      </Collapse>
    </div>
  );
};

export default NavigationBar;
