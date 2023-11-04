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
      <div className="d-flex flex-row justify-content-between">
        <h1 className="align-self-end text-center mb-0">Charities</h1>
        <div className="align-self-end text-center">
          <Link href="/charities/new" passHref>
            <Button
              size="md"
              className="btn-m"
              style={{
                backgroundColor: 'transparent', color: 'black', border: 'none', fontWeight: 600,
              }}
            >Create
            </Button>
          </Link>
        </div>
      </div>
      <hr className="hr-m mb-4 w-10" />
      <div className="d-flex flex-wrap justify-content-center">
        {charities?.map((charity) => (
          <CharityCard key={charity.id} charityObj={charity} onUpdate={getAllCharities} />
        ))}
      </div>
    </>
  );
}
