const isDefaultAvatar = (url: string): boolean => {
  return url === '/img/avatar-male.jpg' || url === '/img/avatar-female.jpg' || url === null;
};

export { isDefaultAvatar };
