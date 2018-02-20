decypherPhrase = (map, str) => {
  let charactersMap = {};
  for (key in map) {
    charactersMap[map[key]] = key;
  }
  return cypherPhrase(charactersMap, str);
}
