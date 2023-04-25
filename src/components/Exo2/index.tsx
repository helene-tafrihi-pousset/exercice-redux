import './styles.scss';
import Form2 from './Form2';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInputExo2, setSubmit } from '../../store/reducers/input2';

function Exo2() {
  // const [inputExo2, setInputExo2] = useState(''); // 1er state pour le onchange (input)
  // const [submit, setSubmit] = useState(''); // 2e state pour gérer le submit
  const dispatch = useAppDispatch();
  const inputExo2 = useAppSelector((state) => state.input2.inputExo2);
  const submit = useAppSelector((state) => state.input2.submit);

  const handleChangeInputValue = (message: string) => {
    dispatch(setInputExo2(message));
  };

  const handleSubmitForm = () => {
    dispatch(setSubmit());
  };

  return (
    <div className="exercice">
      <h2>
        Exo2 : ton message apparait ici au onSubmit :
        {' '}
        {submit}
      </h2>
      <Form2
        inputExo2={inputExo2}
        handleChangeInputValue={(message) => handleChangeInputValue(message)}
        handleSubmit={handleSubmitForm}
      />
    </div>
  );
}

export default Exo2;
