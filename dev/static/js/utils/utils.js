const truncate = function (elem, limit, after) {

  if (!elem || !limit) return;

  let content = elem.textContent.trim();
  content = content.split('').slice(0, limit);

  content = content.join('') + (after ? after : '');
  elem.textContent = content;
};

export default {
  truncate
}
