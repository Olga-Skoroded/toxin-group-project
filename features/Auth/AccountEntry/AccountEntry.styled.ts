import { IconName } from '@fortawesome/fontawesome-common-types';
import Snackbar from '@material-ui/core/Snackbar';
import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { titles, fontAwesome, fontAwesomeIcons } from 'shared/styles/mixins';
import { Button } from 'shared/view/elements';

type SnackBarProps = {
  theme: 'success' | 'error';
};

type GoogleIconProps = {
  icon: IconName;
};

const CustomSnackBar = styled(Snackbar)<SnackBarProps>`
  ${(props) => {
    const { theme } = props;
    return css`
      & > div {
        background: ${theme === 'success' ? 'green' : 'darkred'};
      }
    `;
  }}
`;

const AccountEntry = styled.section`
  max-width: 27.1429rem;
  min-width: 21.4286rem;
  box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
  padding: 2.75rem 2rem 2rem 2.05rem;
  border: 0.0714rem solid rgba(0, 0, 0, 0.12);
  border-radius: 0.2857rem;
  background: white;
`;

const Title = styled.h1`
  ${titles.h1}
  font-size: 1.7143rem;
  line-height: 1.25;
  margin-bottom: 1.3214rem;

  @media ${breakpointDown('xs')} {
    font-size: 1.5rem;
  }
`;

const TwoCols = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const FieldsWrapper = styled.div`
  & > div:nth-child(1) {
    padding-bottom: 0.7rem;
  }

  & > div:nth-child(2) {
    margin-bottom: 0.1rem;
  }
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
`;

const GoogleIcon = styled.span<GoogleIconProps>`
  ${(props) => {
    const { gradients } = props.theme;
    const { icon } = props;

    return css`
      margin-left: 0.5rem;
      display: inline-block;
      ${fontAwesome}
      background-image: ${gradients.primary};
      text-decoration: none;

      &::before {
        content: '${fontAwesomeIcons[icon]}';
        font-size: 1.3rem;
      }
    `;
  }}
`;

export { CustomSnackBar, AccountEntry, Title, TwoCols, FieldsWrapper, CenteredButton, GoogleIcon };
