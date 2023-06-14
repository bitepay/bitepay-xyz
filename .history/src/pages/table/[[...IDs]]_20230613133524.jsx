import { useRouter } from 'next/router';
import { useContext } from 'react';
import Head from "next/head";
import Link from "next/link";

const Table = () => {
  const router = useRouter();

  const { IDs } = router.query;

  if (IDs.length < 2) {
    alert('The table ID and name is missing from your link. Please go back to the home page and try again.');
    router.push('/');
  }

  const tableID = IDs[0];
  const userName = IDs[1];

  

  return (
    <>
    </>
  )
}


export default Table;