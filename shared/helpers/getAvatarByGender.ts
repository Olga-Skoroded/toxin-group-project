type Gender = 'male' | 'female' | 'Male' | 'Female' | 'Мужчина' | 'Женщина';

const getAvatarByGender = (gender: Gender): string | null => {
  switch (gender.toLowerCase()) {
    case 'male':
    case 'мужчина':
      return '/img/avatar-male.jpg';
    case 'female':
    case 'женщина':
      return '/img/avatar-female.jpg';
    default:
      return null;
  }
};

export { getAvatarByGender };
