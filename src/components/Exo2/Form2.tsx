interface HandleProps {
  inputExo2: string
  handleChangeInputValue: (message: string) => void
  handleSubmit: () => void
}
function Form2({ inputExo2, handleChangeInputValue, handleSubmit }: HandleProps) {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    handleChangeInputValue(newValue);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <label htmlFor="input-promo2">
        <input
          type="text"
          name="input-promo2"
          id="input-promo2"
          placeholder="Saississez votre message..."
          onChange={(e) => handleChangeInput(e)}
          value={inputExo2}
        />
        <button className="button" type="submit"> Envoyer </button>
      </label>
    </form>
  );
}
export default Form2;
