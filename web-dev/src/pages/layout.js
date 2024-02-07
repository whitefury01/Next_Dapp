
import Head from 'next/head'
import { Box } from '@mui/material';

import ContactInfo from '../components/ContactInfo'

export default function Layout() {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContactInfo />
        </Box>
    )
}
