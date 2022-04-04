import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import React from 'react';

const Home: React.FC = () => {
  const { user } = useUser();
  
  return (
    <div>
      <h1>Hello world!</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>      
    </div>
  );
}

export default Home;

export const getServerSideProps = withPageAuthRequired();
