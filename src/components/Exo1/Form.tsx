import { useAppDispatch } from '../../hooks/redux';
import { setInputExo1 } from '../../store/reducers/input1';

interface HandleTypeInput {
  inputExo1: string
}
function Form({ inputExo1 }: HandleTypeInput) {
  const dispatch = useAppDispatch();

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch(setInputExo1(newValue));
  };
  return (
    <form className="form">
      <label htmlFor="input-promo">
        <input
          type="text"
          name="input-promo"
          id="input-promo"
          placeholder="Saississez votre message..."
          value={inputExo1}
          onChange={(e) => handleChangeInputValue(e)}
        />
      </label>
    </form>
  );
}
export default Form;
