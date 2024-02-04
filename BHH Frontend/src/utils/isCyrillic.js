function isCyrillic(text) {
  // Regular expression to match Cyrillic characters
  const cyrillicRegex = /[\u0400-\u04FF]/;

  // Test if the string contains any Cyrillic characters
  return cyrillicRegex.test(text);
}

export default isCyrillic;
