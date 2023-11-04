/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { deleteSingleCharity, getSingleCharity } from '../../api/charityData';
import { createSubscription, getsubscriptionsByCharity } from '../../api/SubscriptionApiCalls';
import { useAuth } from '../../utils/context/authContext';

export default function ViewCharity() {
  const [charityDetails, setCharityDetails] = useState({});
  const [subscriptionDetails, setSubscriptionDetails] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;

  const deleteCharity = () => {
    if (window.confirm(`Are you sure you want to delete ${charityDetails.name}?`)) {
      deleteSingleCharity(charityDetails.id).then(() => router.push('/charities/view'));
    }
  };

  const subscribedToCharity = () => {
    createSubscription(charityDetails.id, user[0].id);
  };

  useEffect(() => {
    getSingleCharity(id).then(setCharityDetails);
    getsubscriptionsByCharity(id).then(setSubscriptionDetails);
  }, [id]);

  console.warn(user);

  return (
    <>
      <div className="d-flex justify-content-end mt-5 mb-0">
        <Button
          onClick={subscribedToCharity}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'black',
          }}
          className="d-flex justify-content-end"
        >
          SUBSCRIBE
        </Button>
        <Link href={`/charities/edit/${charityDetails.id}`} passHref>
          <Button
            variant="info"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'black',
            }}
          >
            EDIT
          </Button>
        </Link>
        <Button
          onClick={deleteCharity}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'black',
          }}
          className="d-flex justify-content-end"
        >
          DELETE
        </Button>
      </div>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-row">
          <div>
            <img src={charityDetails.imgUrl} alt={charityDetails.name} style={{ width: '400px', height: '400px' }} />
          </div>
          <div className="text-black ms-5 details align-self-center">
            <h2>{charityDetails.name}</h2>
            <p>{charityDetails.description || ''}</p>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="text-center">Current Donors</h1>
      {/* SIMPLE PROFILE CARDS */}
      <div>
        {subscriptionDetails[0]?.name
          ? (
            <Card style={{
              width: '275px', height: '100px', padding: '15px', fontWeight: '600', boxShadow: '2px 2px 4px #9e9e9e',
            }}
            >
              <h2>{subscriptionDetails[0]?.name}</h2>
              <p style={{ fontSize: '16px' }}>{subscriptionDetails[0]?.email}</p>
            </Card>
          ) : ''}
      </div>
    </>
  );
}
