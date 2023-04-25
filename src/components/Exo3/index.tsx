import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setInputExo3 } from '../../store/reducers/input3';
import './styles.scss';

function Exo3() {
  const dispatch = useAppDispatch();
  const inputExo3 = useAppSelector((state) => state.input3.inputExo3);
  return (
    <div className={inputExo3 ? 'exercice nuit' : 'exercice'}>
      <h2>Exo3 : Lors du click sur le btn nuit, bg de l&apos;exo3 en black et text en white : </h2>
      <button type="button" className="btn" onClick={() => dispatch(setInputExo3(false))}>Jour</button>
      <button type="button" className="btn" onClick={() => dispatch(setInputExo3(true))}>Nuit</button>
    </div>
  );
}

export default Exo3;
