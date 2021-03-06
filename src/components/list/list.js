import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';
import {styles} from './styles';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
      <Box
          as='ul'
          sx={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            ...parentStyle
          }}
      >
          {items.map((item, index) => (
              <Flex
               className={item.isAvailable ? 'open' : 'close'}
               as='li'
               sx={{...childStyle}}
               key={index}
              >
                  <IconButton sx={styles.listIcon} aria-label='list icon'>
                      {item.icon}
                  </IconButton>
                  {item.text}
              </Flex>
          ))}
      </Box>
  );
}


