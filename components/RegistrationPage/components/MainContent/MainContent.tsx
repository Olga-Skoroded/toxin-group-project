import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { RegistrationFormProps } from 'components/RegistrationForm/RegistrationForm.types';

import * as S from './MainContent.styles';

type Props = RegistrationFormProps;

const MainContent: React.FC<Props> = ({
  isSuccess,
  isProcess,
  statusText,
  requestRegistration,
  stopRegistration,
}: Props): JSX.Element => (
  <S.Container>
    <RegistrationForm
      isSuccess={isSuccess}
      isProcess={isProcess}
      statusText={statusText}
      requestRegistration={requestRegistration}
      stopRegistration={stopRegistration}
    />
  </S.Container>
);

export default MainContent;