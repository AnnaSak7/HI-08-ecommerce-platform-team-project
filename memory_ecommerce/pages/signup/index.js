import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import NewUserForm from "../../components/forms/NewUserForm";

const SignupPage = () => {
  //   const navigate = useNavigate();
  //   const { search } = useLocation();
  //   const redirectInUrl = new URLSearchParams(search).get('redirect');
  //   const redirect = redirectInUrl ? redirectInUrl : '/';

  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [confirmPassword, setConfirmPassword] = useState('');
  //   const { state, dispatch: ctxDispatch } = useContext(Store);
  //   const { userInfo } = state;

  //   const submitHandler = async (e) => {
  //     e.preventDefault();
  //   if (password !== confirmPassword) {
  //     toast.error('Passwords do not match');
  //     return;
  //   }
  //   try {
  //     const { data } = await axios.post('/api/users/signup', {
  //       name,
  //       email,
  //       password,
  //     });
  //     ctxDispatch({ type: ACTIONS.USER_SIGNIN, payload: data });
  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //     navigate(redirect || '/');
  //   } catch (err) {
  //     // toast.error('Invalid email or password');
  //     // instead of direct message, getting the error from backend utils to show in the Network preview on the browser
  //     toast.error(getError(err));
  //   }

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate(redirect);
  //     }
  //   }, [navigate, redirect, userInfo]);

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
