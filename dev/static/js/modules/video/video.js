class Video {
  constructor({ target }) {
    this._elem = document.querySelector(target);
    this._elem.addEventListener('load', this._onLoad)
  }

  _onLoad() {
    console.log('hello world');
  }
}

const video = new Video({ target: '#main-video' })
