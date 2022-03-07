import * as Yup from 'yup';
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '../../../../common/constants';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(MIN_PASSWORD_LENGTH, 'Слишком короткий пароль!')
    .max(MAX_PASSWORD_LENGTH, 'Слишком длинный пароль')
    .required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
});

export default LoginSchema;
