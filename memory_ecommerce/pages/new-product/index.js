
// our-domain.com/new-meetup
import { useRouter } from 'next/router';
import Head from 'next/head';
import NewProductForm from '../../components/products/NewProductForm';


const NewProductPage = () => {
  const router = useRouter();

  async function addProductHandler(enteredProductData) {
    const response = await fetch('/api/new-product', {
      method: 'POST',
      body: JSON.stringify(enteredProductData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Add a New Product</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewProductForm onAddProduct={addProductHandler} />
    </>
  );
};

export default NewProductPage;