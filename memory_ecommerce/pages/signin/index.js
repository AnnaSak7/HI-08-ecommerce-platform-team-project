import { MongoClient } from "mongodb";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import SigninForm from "../../components/forms/SigninForm";

export default function SigninPage({ users }) {
  console.log("users : ", users);
  const router = useRouter();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const user = users.find((email) => email === enteredEmail);

    console.log("user : ", user);
    // if (enteredPassword !== enteredConfirmPassword) {
    //   console.log("pass", passwordInputRef);
    //   toast.error("Passwords do not match");
    // }
    // try {
    //   const userData = {
    //     email: enteredEmail,
    //     password: enteredPassword,
    //   };

    // } catch (err) {
    //   toast.error(err);
    // }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign up and create your account" />
      </Head>
      <SigninForm />
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
