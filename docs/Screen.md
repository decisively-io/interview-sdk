# Screen

The screen represents the suggested way the information required of the user should be collected. An interview implementation could ignore this and build a user interface however it wishes, but this payload represents the design within the Decisively Interview Builder. 

The payload structure is:
```javascript
{
  title: 'string', // The title of the screen. This may differ from the title in the step
  id: 'id',
  controls: [// array of controls]
}
```

## Controls
### Boolean
A control to collect a true or false response from a user. Usually rendered as a checkbox. 
```javascript
export interface IBoolean {
  // unique id of the control
  id: string;
  type: 'boolean';
  label?: string;
  required?: true;
  default?: boolean;
  value?: boolean | null,
  // The GUID of the attribute
  attribute: string;
}
```
> Note: the control needs to allow for an indeterminate (or uncertain) response - i.e. the user did not provide an answer. You can't send back 'undefined' as the server will interpret that as requiring an answer again later. Send back 'null' to mark the question as reviewed but not answered. 

### Currency
A number input for inputting currency values. This should:
- Show the currency symbol
- Allow only numbers to be inputted. There is no restriction on the number of decimal places
- Negative numbers are allowed (unless the min is set to 0)
```javascript
export interface ICurrency {
  /** unique id of the control */
  id: string;
  type: 'currency';
  label?: string;
  required?: true;
  default?: number;
  /** uuid */
  attribute: string;
  value?: number | null;
  /** @default '$'' */
  symbol?: string;  
  /** Minimum number allowed - if not set assume no restriction */
  min?: number;
  /** Maximum number allowed - if not set assume no restriction */
  max?: number;
}
```

### Date
Allow a user to enter a date. This should send an ISO date string back to the server ('YYYY-MM-DD'). Do not send a time component back. 
```javascript
export interface IDate {
  /** unique id of the control */
  id: string;
  type: 'date';
  label?: string;
  required?: true;
  /** uuid */
  attribute: string;
  value?: string | null;
  /** YYYY-MM-DD */
  default?: string;
  /** Minimum date allowed, YYYY-MM-DD */
  min?: string | 'now';
  /** Maximum date allowed, YYYY-MM-DD */
  max?: string | 'now';
}
```

### Time
Allow a user to enter a time. This should send an ISO time string back to the server ('HH:mm:ss'). Do not send a date component back. 
```javascript
export interface ITime {
  /** unique id of the control */
  id: string;
  type: 'time';
  label?: string;
  required?: true;
  /** uuid */
  attribute: string;
  value?: string | null;
  /** HH:mm:ss */
  default?: string;
  /** Minimum time allowed, HH:mm:ss */
  min?: string;
  /** Maximum time allowed, HH:mm:ss */
  max?: string;
  /**
   * Whether to display time with an 'AM/PM' or in 24 hour time.
   * Regardless of this input the server expects 24 hour time
   */
  amPmFormat?: true;
  /** Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60 */
  minutes_increment?: number;
  allowSeconds?: true;
}
```

### Date Time
Allow a user to enter a date and time in one control. This should send an ISO date time string back to the server ('YYYY-MM-DD HH:mm:ssZ'). It's metadata is basically a merge of the date and time, but with seperate min/max.
```javascript
export interface IDateTime {
  /** unique id of the control */
  id: string;
  type: 'datetime',
  label?: string;
  required?: true;
  /** uuid */
  attribute: string;
  value: string | null;
  /** YYYY-MM-DD HH:mm:ss */
  default?: string;
  /** YYYY-MM-DD */
  date_min?: string | 'now';
  /** YYYY-MM-DD */
  date_max?: string | 'now';
  /** HH:mm:ss */
  time_min?: string;
  /** HH:mm:ss */
  time_max?: string;
  /** Whether to display time with an 'AM/PM' or in 24 hour time.
   *  Regardless of this input the server expects 24 hour time
   */
  amPmFormat?: true;
  /** Eg: 15 = only allow time in 15 minute increments (3:00, 3:15, 3:30, 3:45). The increment is assumed to start from the hour and will not be greater than 60 */
  minutes_increment?: number;
  allow_seconds?: true;
}
```
### Options
Allow a user to select from a predefined list of options (eg: a dropdown or a radio button). 
```javascript
export interface IOptions {
  /** unique id of the control */
  id: string;
  type: 'options';
  /**
   * Display as a series of radio buttons. \
   * Default display as standart select
   */
  asRadio?: true;
  label?: string;
  required?: true;
  value?: string | boolean | null;
  default?: string;
  /** uuid */
  attribute: string;
  options: Array<{ label: string, value: string }>;
  /** Allow a user to add their own option, not in the list, in */
  allow_other?: true;
  /** uuid */
}
```

### Number of Instances
Collects the number of instances of an entity the user will want. This will be used to control the repetition of steps to collect information for these instances. See . This should be displayed as a number input field or a dropdown (if the max is known and it makes more sense to display that way)
```javascript
export interface INumberOfInstances {
  /** unique id of the control */
  id: string;
  type: 'number_of_instances',
  label?: string;
  required?: true;
  default?: number;
  /** The name of the entity */
  entity: string;
  /**
   * The minimum number of instances. 0 or greater.\
   * Default is 0 unless required, in which case 1.
   */
  min?: number;
  max?: number;
}
```

### Text
Collects text from the user. 
```javascript
export interface IText {
  /** unique id of the control */
  id: string;
  type: 'text';
  label?: string;
  required?: true;
  default?: string;
  /** uuid */
  attribute: string;
  value?: string | null;
  /** The maximum length of the string */
  max?: number;
}
```

### Typography
Display text to the user. This differs from the text control above, which collects text from the user. 
```javascript
export interface ITypography {
  id: string;
  type: 'typography',
  text: string;
  style:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'banner-green'
    | 'banner-yellow'
    | 'banner-red',
  emoji: string
}
```
The end-styling of the text is up to the run time.

### Entity
Collect information about instances (of an entity) within a tabular structure. 

```javascript
export interface IEntity {
  /** unique id of the control */
  id: string;
  type: 'entity';
  label?: string;
  /** Should all the fields be vertical (like table columns) or horizontal (individual rows, table-like) */
  /** describes single 'row' of entries, each of which has all controls from `template` */
  display?: 'horizontal' | 'vertical',
  template: Exclude< Control, IEntity >[],
  value?: [{
    '@id': '<guid>',
    '<attribute guid>': value
  }], 
  entity: 'string',
  /** min number of instances */
  min?: number;
  max?: number;
}
```
