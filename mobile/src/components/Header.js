import {
  Button,
  HStack,
  Icon,
  IconButton,
  Text,
  SearchIcon,
  HamburgerIcon,
  ArrowBackIcon,
  Heading,
  Input,
} from 'native-base';
import React, {useState} from 'react';
import {ImageLogo1} from '.';

export const Header = () => {
  const [isLeaf, setIsLeaf] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  return (
    <>
      <HStack px="1" justifyContent="space-between" alignItems="center">
        {isLeaf ? (
          <HStack alignItems="center">
            <IconButton
              colorScheme="offWhite"
              onPress={() => setSearchActive(true)}
              icon={<ArrowBackIcon size="sm" />}
              accessibilityLabel="Search"
            />
            <Heading size="md" fontWeight="normal">
              Title of the leaf
            </Heading>
          </HStack>
        ) : searchActive ? (
          <HStack alignItems="center" maxWidth="75%" space={4}>
            <Input
              isFullWidth={false}
              borderWidth={0}
              borderBottomWidth={3}
              borderRadius={0}
              borderColor="offWhite.400"
              InputRightElement={<SearchIcon size="sm" />}
              placeholder=""
              paddingLeft={0}
              _focus={{
                borderColor: 'offWhite.400',
              }}
            />
            <Button
              onPress={() => setSearchActive(false)}
              colorScheme="offWhite"
              size="sm"
              variant="ghost" // onPress={() => console.log('hello world')}
            >
              Cancel
            </Button>
          </HStack>
        ) : (
          <>
            <ImageLogo1 width={50} height={50} />

            <HStack space={2}>
              <IconButton
                colorScheme="offWhite"
                onPress={() => setSearchActive(true)}
                icon={<SearchIcon size="sm" />}
                accessibilityLabel="Search"
              />
              <IconButton
                colorScheme="offWhite"
                onPress={() => setSearchActive(true)}
                icon={<HamburgerIcon size="md" />}
                accessibilityLabel="Search"
              />
            </HStack>
          </>
        )}
      </HStack>
    </>
  );
};
