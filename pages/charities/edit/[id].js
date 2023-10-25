import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCharity } from '../../../api/charityData';
import CreateCharityForm from '../../../components/CreateForm';

export default function EditCharity() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleCharity(id).then(setEditItem);
  }, [id]);

  console.warn(editItem);

  return (<CreateCharityForm chObj={editItem} />);
}
