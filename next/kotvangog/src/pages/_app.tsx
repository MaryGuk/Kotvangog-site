import React from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import CloudinaryProvider from '@/providers/CloudinaryProvider';
import { Cloudinary } from '@cloudinary/url-gen';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';
import App from 'next/app';
import Navbar from '@/components/Navbar/navbar';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'ddeg71zn5',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Студия портретов KOTVANGOG</title>
        <meta name="description" content="Портреты по фото маслом и на холсте" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CloudinaryProvider cld={cld}>
          <Navbar />
          <Component {...pageProps} />
        </CloudinaryProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const userAgent = appContext.ctx.req ?
    appContext.ctx.req.headers['user-agent'] :
    navigator.userAgent;

  const MobileDetect = (
    (await import('mobile-detect')) as
      { default: (userAgent: unknown) => { mobile: () => boolean | null } }
  ).default;

  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      isMobile,
    },
  };
};

export default MyApp;