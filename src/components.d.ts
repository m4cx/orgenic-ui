/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  Event,
  EventEmitter,
} from '@stencil/core';
import {
  OgDatatableConfig,
} from './components/og-datatable/interfaces/og-datatable-column-def';


export namespace Components {

  interface OgButton {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the button
    */
    'label': string;
  }
  interface OgButtonAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the button
    */
    'label'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onClicked'?: (event: CustomEvent<Event>) => void;
  }

  interface OgCard {
    /**
    * The name for this card
    */
    'name': string;
  }
  interface OgCardAttributes extends StencilHTMLAttributes {
    /**
    * The name for this card
    */
    'name'?: string;
  }

  interface OgCheckbox {
    /**
    * The value of the checkbox
    */
    'checked': boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the checkbox
    */
    'label': string;
  }
  interface OgCheckboxAttributes extends StencilHTMLAttributes {
    /**
    * The value of the checkbox
    */
    'checked'?: boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the checkbox
    */
    'label'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
  }

  interface OgCombobox {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'itemLabelProperty': string;
    /**
    * Set the property for the items to define as value. Default: "value"
    */
    'itemValueProperty': string;
    /**
    * An array of items to choose from
    */
    'items': any[];
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value': string;
  }
  interface OgComboboxAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'itemLabelProperty'?: string;
    /**
    * Set the property for the items to define as value. Default: "value"
    */
    'itemValueProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items'?: any[];
    /**
    * Event is being emitted when value changes.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value'?: string;
  }

  interface OgDatatable {
    /**
    * Table configuration (type OgDatatableConfig)
    */
    'config': OgDatatableConfig;
    /**
    * Triggers a reload of the table data.
    */
    'reloadData': () => void;
    /**
    * Selected row identified by id-property
    */
    'selected': any;
    /**
    * Programatically update selected row by idProperty.
    */
    'setSelection': (id: any) => void;
  }
  interface OgDatatableAttributes extends StencilHTMLAttributes {
    /**
    * Table configuration (type OgDatatableConfig)
    */
    'config'?: OgDatatableConfig;
    /**
    * Item selection event. Event.detail contains selected item.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Selected row identified by id-property
    */
    'selected'?: any;
  }

  interface OgExpander {
    /**
    * Sets or unsets the expanded state.
    */
    'expanded': boolean;
    /**
    * Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders.
    */
    'group': string;
    /**
    * The name for this expander
    */
    'name': string;
    /**
    * Use this method to toggle expanded state. Group property is respected when calling this method.
    */
    'toggleExpandedState': () => void;
  }
  interface OgExpanderAttributes extends StencilHTMLAttributes {
    /**
    * Sets or unsets the expanded state.
    */
    'expanded'?: boolean;
    /**
    * Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders.
    */
    'group'?: string;
    /**
    * The name for this expander
    */
    'name'?: string;
  }

  interface OgFormItem {
    'disabled': boolean;
    /**
    * The label for the form item
    */
    'label': string;
  }
  interface OgFormItemAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    /**
    * The label for the form item
    */
    'label'?: string;
  }

  interface OgNumberInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Maximum value for this component.
    */
    'max': number;
    /**
    * Minimum value for this component.
    */
    'min': number;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Increment or decrement steps for the value.
    */
    'step': number;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': number;
  }
  interface OgNumberInputAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Maximum value for this component.
    */
    'max'?: number;
    /**
    * Minimum value for this component.
    */
    'min'?: number;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<number>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Increment or decrement steps for the value.
    */
    'step'?: number;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: number;
  }

  interface OgPasswordInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Define, whether a switch should be visible, to show the password in plain text.
    */
    'showTogglePasswordVisibility': boolean;
    'togglePasswordVisibility': () => void;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgPasswordInputAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Define, whether a switch should be visible, to show the password in plain text.
    */
    'showTogglePasswordVisibility'?: boolean;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }

  interface OgTextInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgTextInputAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }

  interface OgList {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Set the property for the items to define as disabled. Default: "disabled"
    */
    'disabledProperty': string;
    /**
    * Set the that will be displayed if the items array is empty.
    */
    'emptyListMessage': string;
    /**
    * Set the property for the items to define as image url. *Optional* Default: no image
    */
    'imageUrlProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items': any[];
    /**
    * Set the property for the items to define as value. Default: "key"
    */
    'keyProperty': string;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'labelProperty': string;
    /**
    * The key of the selected list item
    */
    'selected': string;
    /**
    * Set the property for the items to define as value. *Optional* Default: no value
    */
    'valueProperty': string;
  }
  interface OgListAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Set the property for the items to define as disabled. Default: "disabled"
    */
    'disabledProperty'?: string;
    /**
    * Set the that will be displayed if the items array is empty.
    */
    'emptyListMessage'?: string;
    /**
    * Set the property for the items to define as image url. *Optional* Default: no image
    */
    'imageUrlProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items'?: any[];
    /**
    * Set the property for the items to define as value. Default: "key"
    */
    'keyProperty'?: string;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'labelProperty'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * The key of the selected list item
    */
    'selected'?: string;
    /**
    * Set the property for the items to define as value. *Optional* Default: no value
    */
    'valueProperty'?: string;
  }

  interface OgRadioButtonGroup {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * name for the radiobuttons within this group
    */
    'name': string;
    /**
    * The value of the selected radio button.
    */
    'value': string;
  }
  interface OgRadioButtonGroupAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * name for the radiobuttons within this group
    */
    'name'?: string;
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * The value of the selected radio button.
    */
    'value'?: string;
  }

  interface OgRadioButton {
    /**
    * Determines, whether the radio button is checked or not
    */
    'checked': boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Determines, whether the control is disabled from the parent group
    */
    'groupDisabled': boolean;
    /**
    * The label of the radio button
    */
    'label': string;
    /**
    * The name of the radio button. All radio buttons with the same name belong to one group.
    */
    'name': string;
    /**
    * The value of the radio button that is set to the parent group if radio button is selected
    */
    'value': string;
  }
  interface OgRadioButtonAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the radio button is checked or not
    */
    'checked'?: boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Determines, whether the control is disabled from the parent group
    */
    'groupDisabled'?: boolean;
    /**
    * The label of the radio button
    */
    'label'?: string;
    /**
    * The name of the radio button. All radio buttons with the same name belong to one group.
    */
    'name'?: string;
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
    /**
    * The value of the radio button that is set to the parent group if radio button is selected
    */
    'value'?: string;
  }

  interface OgTabContainer {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    'openTab': (index: number) => void;
  }
  interface OgTabContainerAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when value changes.
    */
    'onTabSelected'?: (event: CustomEvent<number>) => void;
  }

  interface OgTab {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the tab
    */
    'label': string;
    'selected': boolean;
  }
  interface OgTabAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the tab
    */
    'label'?: string;
    'selected'?: boolean;
  }

  interface OgTextarea {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgTextareaAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }

  interface OgToggleSwitch {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The value of the toggle-switch
    */
    'value': boolean;
  }
  interface OgToggleSwitchAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when value changes.
    */
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
    /**
    * The value of the toggle-switch
    */
    'value'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'OgButton': Components.OgButton;
    'OgCard': Components.OgCard;
    'OgCheckbox': Components.OgCheckbox;
    'OgCombobox': Components.OgCombobox;
    'OgDatatable': Components.OgDatatable;
    'OgExpander': Components.OgExpander;
    'OgFormItem': Components.OgFormItem;
    'OgNumberInput': Components.OgNumberInput;
    'OgPasswordInput': Components.OgPasswordInput;
    'OgTextInput': Components.OgTextInput;
    'OgList': Components.OgList;
    'OgRadioButtonGroup': Components.OgRadioButtonGroup;
    'OgRadioButton': Components.OgRadioButton;
    'OgTabContainer': Components.OgTabContainer;
    'OgTab': Components.OgTab;
    'OgTextarea': Components.OgTextarea;
    'OgToggleSwitch': Components.OgToggleSwitch;
  }

  interface StencilIntrinsicElements {
    'og-button': Components.OgButtonAttributes;
    'og-card': Components.OgCardAttributes;
    'og-checkbox': Components.OgCheckboxAttributes;
    'og-combobox': Components.OgComboboxAttributes;
    'og-datatable': Components.OgDatatableAttributes;
    'og-expander': Components.OgExpanderAttributes;
    'og-form-item': Components.OgFormItemAttributes;
    'og-number-input': Components.OgNumberInputAttributes;
    'og-password-input': Components.OgPasswordInputAttributes;
    'og-text-input': Components.OgTextInputAttributes;
    'og-list': Components.OgListAttributes;
    'og-radio-button-group': Components.OgRadioButtonGroupAttributes;
    'og-radio-button': Components.OgRadioButtonAttributes;
    'og-tab-container': Components.OgTabContainerAttributes;
    'og-tab': Components.OgTabAttributes;
    'og-textarea': Components.OgTextareaAttributes;
    'og-toggle-switch': Components.OgToggleSwitchAttributes;
  }


  interface HTMLOgButtonElement extends Components.OgButton, HTMLStencilElement {}
  var HTMLOgButtonElement: {
    prototype: HTMLOgButtonElement;
    new (): HTMLOgButtonElement;
  };

  interface HTMLOgCardElement extends Components.OgCard, HTMLStencilElement {}
  var HTMLOgCardElement: {
    prototype: HTMLOgCardElement;
    new (): HTMLOgCardElement;
  };

  interface HTMLOgCheckboxElement extends Components.OgCheckbox, HTMLStencilElement {}
  var HTMLOgCheckboxElement: {
    prototype: HTMLOgCheckboxElement;
    new (): HTMLOgCheckboxElement;
  };

  interface HTMLOgComboboxElement extends Components.OgCombobox, HTMLStencilElement {}
  var HTMLOgComboboxElement: {
    prototype: HTMLOgComboboxElement;
    new (): HTMLOgComboboxElement;
  };

  interface HTMLOgDatatableElement extends Components.OgDatatable, HTMLStencilElement {}
  var HTMLOgDatatableElement: {
    prototype: HTMLOgDatatableElement;
    new (): HTMLOgDatatableElement;
  };

  interface HTMLOgExpanderElement extends Components.OgExpander, HTMLStencilElement {}
  var HTMLOgExpanderElement: {
    prototype: HTMLOgExpanderElement;
    new (): HTMLOgExpanderElement;
  };

  interface HTMLOgFormItemElement extends Components.OgFormItem, HTMLStencilElement {}
  var HTMLOgFormItemElement: {
    prototype: HTMLOgFormItemElement;
    new (): HTMLOgFormItemElement;
  };

  interface HTMLOgNumberInputElement extends Components.OgNumberInput, HTMLStencilElement {}
  var HTMLOgNumberInputElement: {
    prototype: HTMLOgNumberInputElement;
    new (): HTMLOgNumberInputElement;
  };

  interface HTMLOgPasswordInputElement extends Components.OgPasswordInput, HTMLStencilElement {}
  var HTMLOgPasswordInputElement: {
    prototype: HTMLOgPasswordInputElement;
    new (): HTMLOgPasswordInputElement;
  };

  interface HTMLOgTextInputElement extends Components.OgTextInput, HTMLStencilElement {}
  var HTMLOgTextInputElement: {
    prototype: HTMLOgTextInputElement;
    new (): HTMLOgTextInputElement;
  };

  interface HTMLOgListElement extends Components.OgList, HTMLStencilElement {}
  var HTMLOgListElement: {
    prototype: HTMLOgListElement;
    new (): HTMLOgListElement;
  };

  interface HTMLOgRadioButtonGroupElement extends Components.OgRadioButtonGroup, HTMLStencilElement {}
  var HTMLOgRadioButtonGroupElement: {
    prototype: HTMLOgRadioButtonGroupElement;
    new (): HTMLOgRadioButtonGroupElement;
  };

  interface HTMLOgRadioButtonElement extends Components.OgRadioButton, HTMLStencilElement {}
  var HTMLOgRadioButtonElement: {
    prototype: HTMLOgRadioButtonElement;
    new (): HTMLOgRadioButtonElement;
  };

  interface HTMLOgTabContainerElement extends Components.OgTabContainer, HTMLStencilElement {}
  var HTMLOgTabContainerElement: {
    prototype: HTMLOgTabContainerElement;
    new (): HTMLOgTabContainerElement;
  };

  interface HTMLOgTabElement extends Components.OgTab, HTMLStencilElement {}
  var HTMLOgTabElement: {
    prototype: HTMLOgTabElement;
    new (): HTMLOgTabElement;
  };

  interface HTMLOgTextareaElement extends Components.OgTextarea, HTMLStencilElement {}
  var HTMLOgTextareaElement: {
    prototype: HTMLOgTextareaElement;
    new (): HTMLOgTextareaElement;
  };

  interface HTMLOgToggleSwitchElement extends Components.OgToggleSwitch, HTMLStencilElement {}
  var HTMLOgToggleSwitchElement: {
    prototype: HTMLOgToggleSwitchElement;
    new (): HTMLOgToggleSwitchElement;
  };

  interface HTMLElementTagNameMap {
    'og-button': HTMLOgButtonElement
    'og-card': HTMLOgCardElement
    'og-checkbox': HTMLOgCheckboxElement
    'og-combobox': HTMLOgComboboxElement
    'og-datatable': HTMLOgDatatableElement
    'og-expander': HTMLOgExpanderElement
    'og-form-item': HTMLOgFormItemElement
    'og-number-input': HTMLOgNumberInputElement
    'og-password-input': HTMLOgPasswordInputElement
    'og-text-input': HTMLOgTextInputElement
    'og-list': HTMLOgListElement
    'og-radio-button-group': HTMLOgRadioButtonGroupElement
    'og-radio-button': HTMLOgRadioButtonElement
    'og-tab-container': HTMLOgTabContainerElement
    'og-tab': HTMLOgTabElement
    'og-textarea': HTMLOgTextareaElement
    'og-toggle-switch': HTMLOgToggleSwitchElement
  }

  interface ElementTagNameMap {
    'og-button': HTMLOgButtonElement;
    'og-card': HTMLOgCardElement;
    'og-checkbox': HTMLOgCheckboxElement;
    'og-combobox': HTMLOgComboboxElement;
    'og-datatable': HTMLOgDatatableElement;
    'og-expander': HTMLOgExpanderElement;
    'og-form-item': HTMLOgFormItemElement;
    'og-number-input': HTMLOgNumberInputElement;
    'og-password-input': HTMLOgPasswordInputElement;
    'og-text-input': HTMLOgTextInputElement;
    'og-list': HTMLOgListElement;
    'og-radio-button-group': HTMLOgRadioButtonGroupElement;
    'og-radio-button': HTMLOgRadioButtonElement;
    'og-tab-container': HTMLOgTabContainerElement;
    'og-tab': HTMLOgTabElement;
    'og-textarea': HTMLOgTextareaElement;
    'og-toggle-switch': HTMLOgToggleSwitchElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
