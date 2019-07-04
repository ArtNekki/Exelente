export default class Tabs {
  constructor({ target }) {
    this._container = document.querySelector(target);
    this._tabs = this._container.querySelectorAll(`input[id^='tab']`);

    this._onLoad(this._tabs);
  }

  _onLoad(tabs) {
    tabs.forEach((item) => {
      item.addEventListener('change', (e) => {
        this._onChange(e.currentTarget);
      })
    });

    this._setActiveTab();
    this._setActivePane(this._activeTab);

    this.onLoad(this._activeTab, this._activePane);
  }

  _onChange(tab) {
    this._setActiveTab();
    this._setActivePane(tab);

    this.onChange(this._activeTab, this._activePane);
  }

  _setActiveTab() {
    this._activeTab = Array.from(this._tabs).filter((tab) => {
      return tab.checked;
    })[0];
  }

  _setActivePane(tab) {
    const index = tab.id.split('-')[1];
    this._activePane = tab.parentNode.querySelectorAll('.tabs__pane')[index];
  }

  getActiveTab() {
    return this._activeTab;
  }

  getActivePane() {
    return this._activePane;
  }

  onLoad(activeTab, activePane) {

  }

  onChange(activeTab, activePane) {

  }
}
