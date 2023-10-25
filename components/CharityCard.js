import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteSingleCharity } from '../api/charityData';

export default function CharityCard({ charityObj, onUpdate }) {
  const deleteCharity = (() => {
    if (window.confirm(`Are you sure you want to delete ${charityObj.name}?`)) {
      deleteSingleCharity(charityObj.id).then(() => onUpdate());
    }
  }

  );
  return (
    <Card style={{
      width: '18rem', margin: '10px', backgroundColor: '#2B2D42', color: 'white',
    }}
    >
      <Card.Img variant="top" src={charityObj.imgUrl} alt="Charity Logo" />
      <Card.Body>
        <Card.Title className="text-center">
          {charityObj.name}
          <hr />
          {charityObj.description}
        </Card.Title>
        <div className="text-center">
          <Link href={`/charities/${charityObj.id}`} passHref>
            <Button className="m-2 view-btn">👀</Button>
          </Link>
          <Link href={`/charities/edit/${charityObj.id}`} passHref>
            <Button className="edit-btn">✍️</Button>
          </Link>
          <Button className="m-2 del-btn" onClick={deleteCharity}>
            ❌
          </Button>
        </div>
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
  onUpdate: PropTypes.func.isRequired,
};
