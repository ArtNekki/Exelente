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

        select.hidden = true;
        select.parentNode.append(customSelect);

        this._customSelect = customSelect;
    }

    _renderSelect(select) {
        let options = Array.from(select.options);
        let name = select.dataset.selectField;
        let placeholder = select.dataset.selectFieldPlaceholder;
        let icon = select.dataset.selectFieldIcon;

        return `
                <div class='select select--custom' data-select-id='${select.id}'>
				    <input type='radio' data-select-trigger name='${name}'>
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
					    <input type='radio' name='${name}' ${option.selected ? 'checked=true' : ''}>
					    <span class='select__content'>
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
        let select = this._select;
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

    onChange() { }
}
