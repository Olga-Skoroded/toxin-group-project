<<<<<<< HEAD:components/StarRating/StarRating.tsx
import { useState } from 'react';
import { Field, FieldInputProps } from 'react-final-form';

=======
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { keywords } from './StarRating.fixture';
import { StarRatingProps } from './StarRating.model';
>>>>>>> 1d48656ed3f2dc81d3561637bf83544c13197666:shared/view/elements/StarRating/StarRating.tsx
import * as S from './StarRating.styles';

<<<<<<< HEAD:components/StarRating/StarRating.tsx
const starIconName = 'star';
const starBorderIconName = 'star_border';

const StarRating: React.FC<StarRatingProps> = ({
  name,
  rating = 4,
  starCount = 5,
  disabled = true,
}: StarRatingProps) => {
  const [activeFlags, setActiveFlags] = useState(
    new Array(starCount).fill(false).map((_, index) => index < rating),
  );

  const [hoveredStarIndex, setHoveredStar] = useState<number | null>(null);
=======
const StarRating = memo(({ rating = 0 }: StarRatingProps) => {
  const { t } = useTranslation('StarRating');
  const ratingTextKey = Object.values(keywords)[rating];
  const title = `${t('Room rating')} - ${ratingTextKey}`;
>>>>>>> 1d48656ed3f2dc81d3561637bf83544c13197666:shared/view/elements/StarRating/StarRating.tsx

  const getContent = (input?: FieldInputProps<number, HTMLElement>) => (
    <S.StarRating>
      {activeFlags.map((isActive, index) => {
        const makeHandler = () => () => {
          setHoveredStar(index);
        };

        const makeClickHandler = () => () => {
          setActiveFlags((flags) => {
            const updatedFlags = flags.map((_, starIndex) => starIndex <= index);
            if (input) {
              setTimeout(() => input.onChange(updatedFlags.lastIndexOf(true) + 1));
            }
            return updatedFlags;
          });
        };

        const handleClick = makeClickHandler();
        const handleHover = makeHandler();
        const handleMouseLeave = () => setHoveredStar(null);

        let iconName;
        if (hoveredStarIndex !== null) {
          iconName = index <= hoveredStarIndex ? starIconName : starBorderIconName;
        } else {
          iconName = isActive ? starIconName : starBorderIconName;
        }

        return (
          <S.Star
            tabIndex={disabled ? undefined : 0}
            iconName={iconName}
            key={String(index)}
            onClick={disabled ? undefined : handleClick}
            onMouseEnter={disabled ? undefined : handleHover}
            onMouseLeave={disabled ? undefined : handleMouseLeave}
            disabled={disabled}
            type="button"
          />
        );
      })}
    </S.StarRating>
  );
<<<<<<< HEAD:components/StarRating/StarRating.tsx
  return disabled ? (
    getContent()
  ) : (
    <Field name={name} initialValue={rating} render={({ input }) => getContent(input)} />
  );
};
=======
});
>>>>>>> 1d48656ed3f2dc81d3561637bf83544c13197666:shared/view/elements/StarRating/StarRating.tsx

export { StarRating };
