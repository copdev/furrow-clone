import React, {useEffect} from 'react'
import { Container } from '../../styles/globalStyles'
import { HomeContentSection, Content } from "../../styles/homeStyles"
import { useInView } from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

const HomeContent = () => {
    const animation = useAnimation();
    const [ contentRef, inView ] = useInView( {
        triggerOnce: true,
        rootMargin: '-300px'
    } )
    
    useEffect( () => {
        if ( inView )
        {
            animation.start("visible")
        }
    }, [animation, inView])
    return (
        <HomeContentSection
            ref={ contentRef }
            animate={ animation }
            initial="hidden"
            variants={ {
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: [.6, .05, -0.01, .9]
                    }
                },
                hidden: {
                    opacity: 0,
                    y: 72
                }
            }}
        >
            <Container>
                <Content>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/> Impedit excepturi sit eius nisi omnis laborum velit voluptatem laboriosam temporibus sapiente enim similique, illum ad dolor placeat sed, blanditiis quo aliquid?
                </Content>
            </Container>
        </HomeContentSection>
    )
}

export default HomeContent
