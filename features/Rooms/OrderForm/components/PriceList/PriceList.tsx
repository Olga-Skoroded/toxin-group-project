import { formatNumber } from 'shared/helpers';

import { Props } from '../../OrderForm.types';
import * as S from './PriceList.styles';

const PriceList: React.FC<Props> = ({ items }: Props) => (
  <S.List>
    {items.map((item) => {
      const { label, tooltip, price, currency = 'RUB' } = item;
      return price ? (
        <S.Item key={label}>
          <S.Label>
            <S.LabelText>{label}</S.LabelText>
            {tooltip && (
              <S.Tooltip tabIndex={0}>
                i<S.TooltipText>{tooltip}</S.TooltipText>
              </S.Tooltip>
            )}
          </S.Label>
          <S.Price>{formatNumber(price, currency)}</S.Price>
        </S.Item>
      ) : (
        ''
      );
    })}
  </S.List>
);

export { PriceList };
