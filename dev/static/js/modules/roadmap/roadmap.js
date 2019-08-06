import { MediaQuery } from '../../utils/utils';
import SmoothScroll from 'smooth-scroll';

export default class Roadmap {
  constructor({ target }) {
    this._container = document.querySelector(target);
    this._onLoad();
  }

  _onLoad() {
    const currentStepTrigger = this.getCurrentStepTrigger();
    this._toggleCurrentClass(currentStepTrigger);

    this._container.addEventListener(`change`, this._onChange.bind(this));
  }

  _onChange(e) {
    const stepTrigger = e.target.closest(`input[type='radio']`);

    if (stepTrigger) {
      this._scrollTo();
      this._toggleCurrentClass(stepTrigger);
    }

    this.onChange();
  }

  _toggleCurrentClass(trigger) {
    if (this._currentClass) {
        this._prevClass = this._currentClass;
    }

    this._currentClass = this._createCurrentClass(trigger);

    if (this._prevClass) {
      this._container.classList.remove(this._prevClass);
    }

    this._container.classList.add(this._currentClass);
  }

  _createCurrentClass(trigger) {
    const id = trigger.id;
    const prefix = `roadmapStep`;
    return `roadmap--step-${id.slice(prefix.length, id.length).toLowerCase()}`;
  }

  getCurrentStepTrigger() {
    const allTriggers = this._container.querySelectorAll(`input[type='radio']`);

    return Array.from(allTriggers).filter((trigger) => {
      return trigger.checked;
    })[0];
  }

  _scrollTo() {
    const breakpoint = window.matchMedia(`(min-width: ${MediaQuery.MD}`);

    if (breakpoint.matches) {
      return false;
    }

  }

  onChange() {

  }
}
