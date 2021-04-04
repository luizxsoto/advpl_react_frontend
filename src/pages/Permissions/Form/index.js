import { useRef, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import permissionsStoreService from '../../../services/permissionsStore';
import permissionsUpdateService from '../../../services/permissionsUpdate';

import validatorSchema from '../../../validators/permissions';

import { formDataParser } from '../../../utils/permissions';
import { setFormData } from '../../../utils/form';

import {
  Container,
  FormWrapper,
  Title,
  Form,
  TextInput,
  Button,
} from '../../../components/Form';

const PermissionsForm = () => {
  const history = useHistory();
  const location = useLocation();

  const [canEdit, setCanEdit] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const formRef = useRef(null);

  const handleCancel = () => {
    history.goBack();
  };

  const handleSubmit = async formData => {
    setFormLoading(true);

    try {
      if (location.state?.updating)
        await permissionsUpdateService({ data: formData });
      else await permissionsStoreService({ data: formData });
    } finally {
      setFormLoading(false);
    }

    history.goBack();
  };

  useEffect(() => {
    if (!location.state?.showing) setCanEdit(true);

    if (location.state?.register) {
      const formData = { ...location.state?.register };

      setFormData({ formRef, formData });
    }
  }, [location]);

  return (
    <Container>
      <Form
        formRef={formRef}
        validatorSchema={validatorSchema}
        dataParser={formDataParser}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <Title>Formulário de Permissão</Title>
          <TextInput name="RECNO" label="Código" disabled />
          <TextInput name="Z20_FILIAL" label="Filial" disabled={!canEdit} />
          <TextInput
            name="Z20_IDUSR"
            label="ID Usuário"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_USRNOM"
            label="Nome Usuário"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_SETOR"
            label="Setor"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_CODROT"
            label="COD. Rotina"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_ROTINA"
            label="Rotina"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_ROTDES"
            label="Rotina Desc."
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_USRINC"
            label="Usuário INC."
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_USRALT"
            label="Usuário ALT."
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM1"
            label="NUM1"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM2"
            label="NUM2"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM3"
            label="NUM3"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM4"
            label="NUM4"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM5"
            label="NUM5"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM6"
            label="NUM6"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM7"
            label="NUM7"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM8"
            label="NUM8"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM9"
            label="NUM9"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM10"
            label="NUM10"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM11"
            label="NUM11"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM12"
            label="NUM12"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM13"
            label="NUM13"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM14"
            label="NUM14"
            required
            disabled={!canEdit}
          />
          <TextInput
            name="Z20_NUM15"
            label="NUM15"
            required
            disabled={!canEdit}
          />
          <div>
            <Button loading={formLoading} $cancel onClick={handleCancel}>
              Cancelar
            </Button>
            <Button loading={formLoading} disabled={formLoading || !canEdit}>
              Salvar
            </Button>
          </div>
        </FormWrapper>
      </Form>
    </Container>
  );
};

export default PermissionsForm;
