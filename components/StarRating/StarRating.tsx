import { useState } from 'react';
import { Field } from 'react-final-form';

import * as S from './StarRating.styles';
import { StarRatingProps } from './StarRating.types';

const starIconName = 'star';
const starBorderIconName = 'star_border';

const StarRating: React.FC<StarRatingProps> = ({
  name,
  rating = 2,
  starCount = 5,
  disabled = false,
}: StarRatingProps) => {
  const [activeFlags, setActiveFlags] = useState(
    new Array(starCount).fill(false).map((_, index) => index < rating),
  );

  const [hoveredStarIndex, setHoveredStar] = useState<number | null>(null);
  return (
    <Field
      name={name}
      initialValue={rating}
      render={({ input }) => (
        <S.StarRating>
          {activeFlags.map((isActive, index) => {
            const makeHandler = () => () => {
              setHoveredStar(index);
            };

            const makeClickHandler = () => () => {
              setActiveFlags((flags) => {
                const updatedFlags = flags.map((_, starIndex) => starIndex <= index);
                setTimeout(() => input.onChange(updatedFlags.lastIndexOf(true) + 1));
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
                tabIndex={0}
                iconName={iconName}
                key={String(index)}
                onClick={disabled ? undefined : handleClick}
                onMouseEnter={disabled ? undefined : handleHover}
                onMouseLeave={disabled ? undefined : handleMouseLeave}
                type="button"
              />
            );
          })}
        </S.StarRating>
      )}
    />
  );
};

export default StarRating;
