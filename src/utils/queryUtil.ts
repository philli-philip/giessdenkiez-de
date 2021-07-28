export const getUrlQueryParameter = (name = ''): string => {
  name = name.replace(/[[]/gi, '\\[').replace(/[\]]/gi, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
