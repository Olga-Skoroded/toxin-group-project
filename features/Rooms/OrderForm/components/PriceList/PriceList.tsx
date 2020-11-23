import { memo } from 'react';

import { formatNumber } from 'utils/number.utils';

import { Props } from '../../OrderForm.model';
import * as S from './PriceList.styles';

const PriceList = memo(({ items }: Props) => (
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
));

export { PriceList };
