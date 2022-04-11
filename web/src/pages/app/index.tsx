import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import { useMeQuery } from '../../graphql/generated/graphql';
import { getServerPageGetProducts, ssrGetProducts } from '../../graphql/generated/page';
import { withApollo } from '../../lib/withApollo';

const Home: React.FC = ({ data }: any) => {
  const { user } = useUser();
  const { data: me} = useMeQuery();
  
  return (
    <div className='text-violet-500'>
      <h1>Hello world!</h1>
      <pre>
        {JSON.stringify(me, null, 2)}
      </pre>
      {/* <pre>
        {JSON.stringify(data.products, null, 2)}
      </pre> */}
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>      
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {    
    // return getServerPageGetProducts({}, ctx);
    return{
      props: {}
    };
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);