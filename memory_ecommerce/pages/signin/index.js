import { ContactlessOutlined } from "@mui/icons-material";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import SigninForm from "../../components/forms/SigninForm";
import { toast } from "react-toastify";
import { useForkRef } from "@mui/material";

export default function SigninPage({ users }) {
  console.log("users : ", users);
  const router = useRouter();

  const loginHandler = (enteredUserData) => {
    console.log("euD : ", enteredUserData);
    const user = users.find((user) => user.email === enteredUserData.email);
    // const userPassword = users.find(
    //   (password) => password === enteredUserData.password
    // );

    console.log("user : ", user);
    if (user === undefined) {
      toast.error("Entered email does not exist");
    }

    if (user.password !== enteredUserData.password) {
      toast.error("Wrong password");
    }

    if (
      user.email === enteredUserData.email &&
      user.password === enteredUserData.password
    ) {
      router.push("/" + user.id);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign up and create your account" />
      </Head>
      <SigninForm onLogin={loginHandler} />
    </>
  );
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const userCollection = db.collection("users");
  const users = await userCollection.find().toArray();

  client.close();

  return {
    props: {
      users: users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        password: user.password,
      })),
    },
  };
};
