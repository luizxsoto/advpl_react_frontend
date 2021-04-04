import { useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSessions } from '../../hooks/sessions';

import permissionsListService from '../../services/permissionsList';
import permissionsDestroyService from '../../services/permissionsDestroy';

import Table from '../../components/Table';
import { Container, IconButton, ExitToAppIcon } from './styles';

const Permissions = () => {
  const history = useHistory();
  const { signOut } = useSessions();

  const [data, setData] = useState();

  const columnInfos = useMemo(
    () => [
      { key: 'RECNO', label: 'Código' },
      { key: 'Z20_USRNOM', label: 'Usuário' },
      { key: 'Z20_SETOR', label: 'Setor' },
      { key: 'Z20_ROTINA', label: 'Rotina' },
      { key: 'Z20_ROTDES', label: 'Rotina Desc.' },
    ],
    []
  );

  const actionFunctions = useMemo(
    () => [
      {
        key: 'show',
        label: 'Visualizar',
        handle: register =>
          history.push('/permissions/form', { showing: true, register }),
      },
      {
        key: 'update',
        label: 'Editar',
        handle: register =>
          history.push('/permissions/form', { updating: true, register }),
      },
      {
        key: 'destroy',
        label: 'Remover',
        handle: async register => {
          await permissionsDestroyService({ data: register });

          setData(oldData =>
            oldData.filter(oldDataItem => oldDataItem.RECNO !== register.RECNO)
          );
        },
      },
    ],
    [history]
  );

  const addFunction = () => history.push('/permissions/form');

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    const loadData = async () => {
      const permissionListed = await permissionsListService();

      setData(permissionListed);
    };

    loadData();
  }, []);

  return (
    <Container>
      <IconButton onClick={handleSignOut}>
        <ExitToAppIcon />
      </IconButton>
      <Table
        data={data}
        filterBy="Z20_USRNOM"
        addFunction={addFunction}
        title="Permissões"
        columnInfos={columnInfos}
        actionFunctions={actionFunctions}
      />
    </Container>
  );
};

export default Permissions;
