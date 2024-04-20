import { Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel, Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Styles from './CustomerFag.module.css'
export default function CustomerFag() {
    return (
        <div className={Styles.Main}>
            <div>
                <h1 className={Styles.MainTitle}>
                    Customer FAQs
                </h1>
            </div>
            <div className={Styles.AcordionContainer}>
                <ChakraProvider>
                    <Accordion className={Styles.Acordion} allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={Styles.AcordionBtn} _expanded={{ color: 'white' }}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        How does FriendPay work?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel className={Styles.Desc} pb={4}>
                                FriendPay allows users to generate personalized payment links or QR codes, which they can share with others to send or receive money quickly and securely. Simply sign up for an account, generate your link or QR code, share it with friends or customers, and start receiving payments hassle-free.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={Styles.AcordionBtn} _expanded={{ color: 'white' }}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Is FriendPay secure?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel className={Styles.Desc} pb={4}>
                                FriendPay allows users to generate personalized payment links or QR codes, which they can share with others to send or receive money quickly and securely. Simply sign up for an account, generate your link or QR code, share it with friends or customers, and start receiving payments hassle-free.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={Styles.AcordionBtn} _expanded={{ color: 'white' }}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        How does FriendPay work?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel className={Styles.Desc} pb={4}>
                                FriendPay allows users to generate personalized payment links or QR codes, which they can share with others to send or receive money quickly and securely. Simply sign up for an account, generate your link or QR code, share it with friends or customers, and start receiving payments hassle-free.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton className={Styles.AcordionBtn} _expanded={{ color: 'white' }}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        How does FriendPay work?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel className={Styles.Desc} pb={4}>
                                FriendPay allows users to generate personalized payment links or QR codes, which they can share with others to send or receive money quickly and securely. Simply sign up for an account, generate your link or QR code, share it with friends or customers, and start receiving payments hassle-free.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </ChakraProvider>
            </div>
        </div>
    )
}
