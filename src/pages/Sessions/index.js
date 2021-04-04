import { useRef, useState } from 'react';

import { useSessions } from '../../hooks/sessions';

import validatorSchema from '../../validators/sessions';
import { formDataParser } from '../../utils/sessions';

import {
  Container,
  FormWrapper,
  Title,
  Form,
  TextInput,
  Button,
} from '../../components/Form';

import {
  Avatar,
  IconLockOutlined,
  IconButton,
  Visibility,
  VisibilityOff,
} from './styles';

const Sessions = () => {
  const { signIn, sessionLoading } = useSessions();

  const [showPassword, setShowPassword] = useState(false);

  const formRef = useRef(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async ({ username, password }) => {
    await signIn({ username, password });
  };

  return (
    <Container>
      <Form
        formRef={formRef}
        validatorSchema={validatorSchema}
        dataParser={formDataParser}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <Avatar>
            <IconLockOutlined />
          </Avatar>
          <Title>REACT + ADVPL</Title>
          <TextInput name="username" label="Usuário" required />
          <TextInput
            name="password"
            label="Senha"
            required
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
          />
          <Button loading={sessionLoading}>Entrar</Button>
        </FormWrapper>
      </Form>
    </Container>
  );
};

export default Sessions;
