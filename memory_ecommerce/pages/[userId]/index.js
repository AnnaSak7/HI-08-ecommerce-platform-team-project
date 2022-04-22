import Head from "next/head";
import UserDetail from "../../components/users/UserDetail";

const UserDetails = () => {
  return (
    <>
      <Head>
        <title>User Page</title>
        <meta name="description" content="User page" />
      </Head>
      <UserDetail />
    </>
  );
};

export default ProductDetails;
