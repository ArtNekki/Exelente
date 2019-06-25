import ready from '../../utils/documentReady'

export default class Select {
    constructor(select) {
        this._select = select;
        this._init(select);
    }

    _init(select) {
        let wrap = document.createElement('div');
        let customSelect = null;
        let customSelectTemplate = this._renderSelect(select);

        wrap.innerHTML = customSelectTemplate;

        customSelect = wrap.children[0];
        customSelect.addEventListener('change', this._onChange.bind(this));

        select.classList.add('select--hidden')
        select.parentNode.appendChild(customSelect);

        this._selectTrigger = customSelect.querySelector('[data-select-trigger]');
        this._customSelect = customSelect;
    }

    _renderSelect(select) {
        let options = Array.from(select.querySelector('.select__content--native').options);
        let name = select.dataset.customSelect;
        let placeholder = select.dataset.customSelectPlaceholder;
        let icon = select.dataset.customSelectIcon;
        let label = select.dataset.customSelectLabel;

        return `
                <div class='select select--custom' data-select-id='${select.id}'>
      				    <input type='radio' class='select__trigger--main' data-select-trigger name='${name}'>
      				    <span class='select__content select__content--title'>
                              ${icon ? this._renderIcon(icon) : ''}
      						<span class='select__placeholder'>${placeholder}</span>
                          </span>
      				    <div class='select__list'>
      					    ${options.map((option) => this._renderOption(name, option)).join(``)}
      				    </div>
		         </div>`;
    }

    _renderOption(name, option) {
        return `
                    <label class='select__option js-select-option' data-value='${option.value}'>
					    <input type='radio' class='select__trigger--option' name='${name}' ${option.selected ? 'checked=true' : ''}>
					    <span class='select__content select__content--option'>
                            ${option.dataset.icon ? this._renderIcon(option.dataset.icon) : ''}
						    <span class='select__placeholder' data-type='${option.dataset.type ? option.dataset.type : ''}'>${option.text}</span>
					    </span>
				    </label>`;
    }

    _renderIcon(name) {
        return `<i class='${name} select__icon'></i>`;
    }

    _onChange(e) {
        let option = e.target.closest('.js-select-option');
        let select = this._select.querySelector('select');
        let newEvent = new Event('change');

        if (!option) {
            return;
        }

        if (this._selectedOption) {
            this._selectedOption.classList.remove('select__option--active');
        }

        option.classList.add('select__option--active');
        this._selectedOption = option;

        this._customSelect.classList.remove('select--rotate');
        select.value = option.dataset.value;
        select.dispatchEvent(newEvent);

        this.onChange();
    }

    getOriginalSelect() {
        return this._select;
    }

    close(target) {
      const activeOption = this._customSelect.querySelector('.select__option--active .select__trigger--option')
            || this._customSelect.querySelector('.select__option:first-of-type .select__trigger--option');

      if (!this._customSelect.contains(target)) {
        console.log('contains', this._customSelect.contains(target))
        activeOption.checked = true;
      }
    }

    onChange() { }
}
