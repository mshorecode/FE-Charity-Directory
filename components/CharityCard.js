import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function CharityCard({ charityObj }) {
  return (
    <Card style={{
      width: '25rem', height: '25rem', margin: '8px', backgroundColor: '#fff', color: 'black', boxShadow: '3px 3px 4px #9e9e9e', borderRadius: '18px',
    }}
    >
      <Link href={`/charities/${charityObj.id}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
          <Card.Img variant="top" src={charityObj.imgUrl} alt="Charity Logo" style={{ width: '6.25rem', height: '6.25rem' }} />
          <Card.Title className="align-self-center text-center fs-4">
            {charityObj.name}
          </Card.Title>
        </div>
      </Link>
      <hr className="m-3" />
      <Card.Body>
        {charityObj.description}
      </Card.Body>
    </Card>
  );
}

CharityCard.propTypes = {
  charityObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};
