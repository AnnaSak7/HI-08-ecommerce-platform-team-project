import Head from "next/head";
import { useRouter } from "next/router";

import NewUserForm from "../../components/forms/NewUserForm";

const SignupPage = () => {
  const router = useRouter();

  const addUserHandler = async (enteredUserData) => {
    const response = await fetch("/api/new-user", {
      method: "POST",
      body: JSON.stringify(enteredUserData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up and create your account" />
      </Head>
      <NewUserForm onAddUser={addUserHandler} />
    </>
  );
};

export default SignupPage;
