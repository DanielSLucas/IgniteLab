import { getAccessToken, getSession,  } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';
import React from 'react';

const Home: React.FC = () => {
  
  
  

  return null;
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const token = getAccessToken(req, res);
  console.log(token);
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }
}