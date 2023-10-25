import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import CharityCard from '../../components/CharityCard';
import { getCharities } from '../../api/charityData';

export default function AllCharities() {
  const [charities, setCharities] = useState([]);

  const { user } = useAuth();

  const getAllCharities = () => {
    getCharities(user.uid).then(setCharities);
  };

  useEffect(() => {
    getAllCharities();
  });

  return (
    <>
      <h1 className="text-center mt-4">Charities</h1>
      <hr className="hr-m mb-4 w-10" />
      <div className="mt-3 mb-4 text-center">
        <Link href="/charities/new" passHref>
          <Button size="md" className="btn-m">Add a Charity</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {charities?.map((charity) => (
          <CharityCard key={charity.id} charityObj={charity} onUpdate={getAllCharities} />
        ))}
      </div>
    </>
  );
}
