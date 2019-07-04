const MediaQuery = {
  XS: '320px',
  SM: '480px',
  MD: '768px',
  LG: '992px',
  XL: '1280px',
  XXL: '1800px'
}

const truncate = function (elem, limit, after) {

  if (!elem || !limit) return;

  let content = elem.textContent.trim();
  content = content.split('').slice(0, limit);

  content = content.join('') + (after ? after : '');
  elem.textContent = content;
};

export default {
  MediaQuery,
  truncate
}
