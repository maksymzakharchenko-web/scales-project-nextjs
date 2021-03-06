/** @jsx jsx */
import {jsx, Container, Heading, Text, Box, Image} from 'theme-ui';
import SectionHeader from 'components/section-header/section-header';
import Rating from 'components/rating/rating';
import Carousel from 'react-multi-carousel';

import {data, carouselParams} from "./data";
import {styles} from "./styles";

export default function TestimonialCard() {
    return (
        <section id='testimonial' sx={{variant: 'section.testimonial'}}>
            <Container css={{textAlign: 'center'}}>
                <SectionHeader
                    slogan='Відгуки про нашу діяльність'
                    title='Ми хочемо, щоб всі наші клієнти були максимально задоволені'
                />
            </Container>
            <Box sx={styles.carouselWrapper}>
                <Carousel {...carouselParams}>
                    {data.map((item) => (
                        <Box sx={styles.reviewCard} key={item.id}>
                            <Rating rating={item.review}/>
                            <Heading as='h3' sx={styles.title}>
                                {item.title}
                            </Heading>
                            <Text sx={styles.description}>
                                {item.description}
                            </Text>
                            <div className='card-footer'>
                                <div className='image'>
                                    <Image src={item.avatar} alt='Client Image'/>
                                </div>
                                <div className='reviewer-info'>
                                    <Heading as='h4' sx={styles.heading}>
                                        {item.name}
                                    </Heading>
                                </div>
                            </div>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </section>
    );
}


