export default class Video {
  constructor({ target }) {
    this._elem = document.querySelector(target);
    this._elem.addEventListener('load', this._onLoad)
  }

  _onLoad() {

  }
}
