import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createCharity, updateCharity } from '../api/charityData';

const initialState = {
  name: '',
  description: '',
  imgUrl: '',
};

export default function CreateCharityForm({ chObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (chObj.id) setFormInput(chObj);
  }, [chObj]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormInput((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chObj.id) {
      updateCharity(formInput).then(() => router.push(`/charities/${chObj.id}`));
    } else {
      createCharity(formInput).then(() => router.push('/charities/view'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{chObj.id ? 'Update' : 'Create'} Charity</h2>

      <FloatingLabel controlId="floatingInput1" label="Charity Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="name"
          name="name"
          value={formInput.name}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Description"
          name="description"
          value={formInput.description}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Image" className="mb-3">
        <Form.Control
          type="text"
          placeholder="ImgUrl"
          name="imgUrl"
          value={formInput.imgUrl}
          onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{chObj.id ? 'Update' : 'Create'} Charity</Button>
    </Form>
  );
}

CreateCharityForm.propTypes = {
  chObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};
