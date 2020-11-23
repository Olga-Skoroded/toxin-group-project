function getNounInDeclension(value: number, declension: string[]): string {
  switch (value) {
    case 0:
      return declension[2];
    case 1:
      return declension[0];
    case 2:
    case 3:
    case 4:
      return declension[1];
    default:
      if (value > 20) {
        if (value > 99) {
          return getNounInDeclension(value % 100, declension);
        }
        return getNounInDeclension(value % 10, declension);
      }
      return declension[2];
  }
}

export { getNounInDeclension };
