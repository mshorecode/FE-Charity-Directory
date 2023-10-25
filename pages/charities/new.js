import CreateCharityForm from '../../components/CreateForm';

export default function CreatePage() {
  const chObj = {
    name: '',
    description: '',
    imgUrl: '',
  };
  return (<CreateCharityForm chObj={chObj} />);
}
