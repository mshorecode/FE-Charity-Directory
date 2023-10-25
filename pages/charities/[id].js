/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSingleCharity } from '../../api/charityData';

export default function ViewCharity() {
  const [charityDetails, setCharityDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  console.warn(charityDetails);

  useEffect(() => {
    getSingleCharity(id).then(setCharityDetails);
  }, [id]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={charityDetails.imgUrl} alt={charityDetails.name} style={{ width: '200px', height: '200px', border: '1px solid white' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {charityDetails.name}
          </h5>
          <p>{charityDetails.description || ''}</p>
          <hr />
          <Link href={`/charities/edit/${charityDetails.id}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
        </div>
        <hr />
      </div>
    </>

  );
}
