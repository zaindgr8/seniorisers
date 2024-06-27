import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterWhite from "@/components/footer-white";

export default function Layout({ children }) {
  return (
    <>
      <Header />
       {children}
      <FooterWhite  />
    </>
  );
}
