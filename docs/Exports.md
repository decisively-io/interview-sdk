# @decisively-io/interview-sdk

## Table of contents

### Classes

- [SessionInstance](../wiki/SessionInstance)

### Interfaces

- [AttributeData](../wiki/AttributeData)
- [BooleanControl](../wiki/BooleanControl)
- [CertaintyContainerControl](../wiki/CertaintyContainerControl)
- [ConditionExpression](../wiki/ConditionExpression)
- [ConditionValue](../wiki/ConditionValue)
- [Context](../wiki/Context)
- [ControlsValue](../wiki/ControlsValue)
- [CurrencyControl](../wiki/CurrencyControl)
- [DateControl](../wiki/DateControl)
- [DateTimeControl](../wiki/DateTimeControl)
- [EntityControl](../wiki/EntityControl)
- [EntityControlInstance](../wiki/EntityControlInstance)
- [EntityInstance](../wiki/EntityInstance)
- [FileControl](../wiki/FileControl)
- [FormatOptions](../wiki/FormatOptions)
- [ImageControl](../wiki/ImageControl)
- [InterviewProvider](../wiki/InterviewProvider)
- [NumberOfInstancesControl](../wiki/NumberOfInstancesControl)
- [Option](../wiki/Option)
- [OptionsControl](../wiki/OptionsControl)
- [Parent](../wiki/Parent)
- [Progress](../wiki/Progress)
- [RenderableCertaintyContainerControl](../wiki/RenderableCertaintyContainerControl)
- [RenderableEntityControl](../wiki/RenderableEntityControl)
- [RenderableRepeatingContainerControl](../wiki/RenderableRepeatingContainerControl)
- [RenderableSwitchContainerControl](../wiki/RenderableSwitchContainerControl)
- [RepeatingContainerControl](../wiki/RepeatingContainerControl)
- [Screen](../wiki/Screen)
- [Session](../wiki/Session)
- [SessionConfig](../wiki/SessionConfig)
- [Simulate](../wiki/Simulate)
- [State](../wiki/State)
- [Step](../wiki/Step)
- [SwitchContainerControl](../wiki/SwitchContainerControl)
- [TextControl](../wiki/TextControl)
- [TimeControl](../wiki/TimeControl)
- [TypographyControl](../wiki/TypographyControl)

### Type Aliases

- [AttributeId](../wiki/Exports#attributeid)
- [AttributeValue](../wiki/Exports#attributevalue)
- [AttributeValues](../wiki/Exports#attributevalues)
- [ConditionType](../wiki/Exports#conditiontype)
- [Control](../wiki/Exports#control)
- [ControlType](../wiki/Exports#controltype)
- [DateControlThreeVariantDate](../wiki/Exports#datecontrolthreevariantdate)
- [DynamicUpdateFunction](../wiki/Exports#dynamicupdatefunction)
- [EntityValue](../wiki/Exports#entityvalue)
- [Formatter](../wiki/Exports#formatter)
- [IBoolean](../wiki/Exports#iboolean)
- [IControlsValue](../wiki/Exports#icontrolsvalue)
- [ICurrency](../wiki/Exports#icurrency)
- [IDate](../wiki/Exports#idate)
- [IDateTime](../wiki/Exports#idatetime)
- [IEntity](../wiki/Exports#ientity)
- [IEntityInstance](../wiki/Exports#ientityinstance)
- [IEntityValue](../wiki/Exports#ientityvalue)
- [IFile](../wiki/Exports#ifile)
- [IImage](../wiki/Exports#iimage)
- [INumberOfInstances](../wiki/Exports#inumberofinstances)
- [IOptions](../wiki/Exports#ioptions)
- [IText](../wiki/Exports#itext)
- [ITime](../wiki/Exports#itime)
- [ITypography](../wiki/Exports#itypography)
- [InterviewId](../wiki/Exports#interviewid)
- [LabelDisplay](../wiki/Exports#labeldisplay)
- [Navigate](../wiki/Exports#navigate)
- [Overrides](../wiki/Exports#overrides)
- [ProjectId](../wiki/Exports#projectid)
- [ReleaseId](../wiki/Exports#releaseid)
- [RenderableControl](../wiki/Exports#renderablecontrol)
- [RenderableControlType](../wiki/Exports#renderablecontroltype)
- [ResponseData](../wiki/Exports#responsedata)
- [SessionId](../wiki/Exports#sessionid)
- [SessionObservable](../wiki/Exports#sessionobservable)
- [StepId](../wiki/Exports#stepid)

### Variables

- [ControlTypesInfo](../wiki/Exports#controltypesinfo)
- [DATE\_FORMAT](../wiki/Exports#date_format)
- [DATE\_TIME\_FORMAT\_12](../wiki/Exports#date_time_format_12)
- [DATE\_TIME\_FORMAT\_24](../wiki/Exports#date_time_format_24)
- [TIME\_FORMAT\_12](../wiki/Exports#time_format_12)
- [TIME\_FORMAT\_24](../wiki/Exports#time_format_24)
- [defaultPath](../wiki/Exports#defaultpath)

### Functions

- [applyInstancesToEntityControl](../wiki/Exports#applyinstancestoentitycontrol)
- [back](../wiki/Exports#back)
- [cmpAttributeData](../wiki/Exports#cmpattributedata)
- [containsCurrentStep](../wiki/Exports#containscurrentstep)
- [create](../wiki/Exports#create)
- [createApiInstance](../wiki/Exports#createapiinstance)
- [deriveDefaultControlsValue](../wiki/Exports#derivedefaultcontrolsvalue)
- [exportTimeline](../wiki/Exports#exporttimeline)
- [flatten](../wiki/Exports#flatten)
- [formatDate](../wiki/Exports#formatdate)
- [formatValue](../wiki/Exports#formatvalue)
- [getCurrentStep](../wiki/Exports#getcurrentstep)
- [getDate](../wiki/Exports#getdate)
- [init](../wiki/Exports#init)
- [isAttributeDynamic](../wiki/Exports#isattributedynamic)
- [iterateControls](../wiki/Exports#iteratecontrols)
- [load](../wiki/Exports#load)
- [navigate](../wiki/Exports#navigate-1)
- [render](../wiki/Exports#render)
- [replaceTemplatedText](../wiki/Exports#replacetemplatedtext)
- [setCurrentInStep](../wiki/Exports#setcurrentinstep)
- [simulate](../wiki/Exports#simulate)
- [submit](../wiki/Exports#submit)
- [transformResponse](../wiki/Exports#transformresponse)
- [uuid](../wiki/Exports#uuid)

## Common Helpers

### formatDate

▸ **formatDate**<`DateType`\>(`date`, `formatStr`, `options?`): `string`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `DateType` | extends `Date` | The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc). |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `string` \| `number` \| `DateType` | The original date |
| `formatStr` | `string` | - |
| `options?` | `FormatOptions` | An object with options |

#### Returns

`string`

The formatted date string

**`Name`**

format

**`Alias`**

formatDate

**`Summary`**

Format the date.

**`Description`**

Return the formatted date string in the given format. The result may vary by locale.

> ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
> See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

The characters wrapped between two single quotes characters (') are escaped.
Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
(see the last example)

Format of the string is based on Unicode Technical Standard #35:
https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
with a few additions (see note 7 below the table).

Accepted patterns:
| Unit                            | Pattern | Result examples                   | Notes |
|---------------------------------|---------|-----------------------------------|-------|
| Era                             | G..GGG  | AD, BC                            |       |
|                                 | GGGG    | Anno Domini, Before Christ        | 2     |
|                                 | GGGGG   | A, B                              |       |
| Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
|                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
|                                 | yy      | 44, 01, 00, 17                    | 5     |
|                                 | yyy     | 044, 001, 1900, 2017              | 5     |
|                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
|                                 | yyyyy   | ...                               | 3,5   |
| Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
|                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
|                                 | YY      | 44, 01, 00, 17                    | 5,8   |
|                                 | YYY     | 044, 001, 1900, 2017              | 5     |
|                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
|                                 | YYYYY   | ...                               | 3,5   |
| ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
|                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
|                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
|                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
|                                 | RRRRR   | ...                               | 3,5,7 |
| Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
|                                 | uu      | -43, 01, 1900, 2017               | 5     |
|                                 | uuu     | -043, 001, 1900, 2017             | 5     |
|                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
|                                 | uuuuu   | ...                               | 3,5   |
| Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
|                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
|                                 | QQ      | 01, 02, 03, 04                    |       |
|                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
|                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
|                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
| Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
|                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
|                                 | qq      | 01, 02, 03, 04                    |       |
|                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
|                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
|                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
| Month (formatting)              | M       | 1, 2, ..., 12                     |       |
|                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
|                                 | MM      | 01, 02, ..., 12                   |       |
|                                 | MMM     | Jan, Feb, ..., Dec                |       |
|                                 | MMMM    | January, February, ..., December  | 2     |
|                                 | MMMMM   | J, F, ..., D                      |       |
| Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
|                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
|                                 | LL      | 01, 02, ..., 12                   |       |
|                                 | LLL     | Jan, Feb, ..., Dec                |       |
|                                 | LLLL    | January, February, ..., December  | 2     |
|                                 | LLLLL   | J, F, ..., D                      |       |
| Local week of year              | w       | 1, 2, ..., 53                     |       |
|                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
|                                 | ww      | 01, 02, ..., 53                   |       |
| ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
|                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
|                                 | II      | 01, 02, ..., 53                   | 7     |
| Day of month                    | d       | 1, 2, ..., 31                     |       |
|                                 | do      | 1st, 2nd, ..., 31st               | 7     |
|                                 | dd      | 01, 02, ..., 31                   |       |
| Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
|                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
|                                 | DD      | 01, 02, ..., 365, 366             | 9     |
|                                 | DDD     | 001, 002, ..., 365, 366           |       |
|                                 | DDDD    | ...                               | 3     |
| Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
|                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
|                                 | EEEEE   | M, T, W, T, F, S, S               |       |
|                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
| ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
|                                 | io      | 1st, 2nd, ..., 7th                | 7     |
|                                 | ii      | 01, 02, ..., 07                   | 7     |
|                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
|                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
|                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
|                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
| Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
|                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
|                                 | ee      | 02, 03, ..., 01                   |       |
|                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
|                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
|                                 | eeeee   | M, T, W, T, F, S, S               |       |
|                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
| Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
|                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
|                                 | cc      | 02, 03, ..., 01                   |       |
|                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
|                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
|                                 | ccccc   | M, T, W, T, F, S, S               |       |
|                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
| AM, PM                          | a..aa   | AM, PM                            |       |
|                                 | aaa     | am, pm                            |       |
|                                 | aaaa    | a.m., p.m.                        | 2     |
|                                 | aaaaa   | a, p                              |       |
| AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
|                                 | bbb     | am, pm, noon, midnight            |       |
|                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
|                                 | bbbbb   | a, p, n, mi                       |       |
| Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
|                                 | BBBB    | at night, in the morning, ...     | 2     |
|                                 | BBBBB   | at night, in the morning, ...     |       |
| Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
|                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
|                                 | hh      | 01, 02, ..., 11, 12               |       |
| Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
|                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
|                                 | HH      | 00, 01, 02, ..., 23               |       |
| Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
|                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
|                                 | KK      | 01, 02, ..., 11, 00               |       |
| Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
|                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
|                                 | kk      | 24, 01, 02, ..., 23               |       |
| Minute                          | m       | 0, 1, ..., 59                     |       |
|                                 | mo      | 0th, 1st, ..., 59th               | 7     |
|                                 | mm      | 00, 01, ..., 59                   |       |
| Second                          | s       | 0, 1, ..., 59                     |       |
|                                 | so      | 0th, 1st, ..., 59th               | 7     |
|                                 | ss      | 00, 01, ..., 59                   |       |
| Fraction of second              | S       | 0, 1, ..., 9                      |       |
|                                 | SS      | 00, 01, ..., 99                   |       |
|                                 | SSS     | 000, 001, ..., 999                |       |
|                                 | SSSS    | ...                               | 3     |
| Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
|                                 | XX      | -0800, +0530, Z                   |       |
|                                 | XXX     | -08:00, +05:30, Z                 |       |
|                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
|                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
| Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
|                                 | xx      | -0800, +0530, +0000               |       |
|                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
|                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
|                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
| Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
|                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
| Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
|                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
| Seconds timestamp               | t       | 512969520                         | 7     |
|                                 | tt      | ...                               | 3,7   |
| Milliseconds timestamp          | T       | 512969520900                      | 7     |
|                                 | TT      | ...                               | 3,7   |
| Long localized date             | P       | 04/29/1453                        | 7     |
|                                 | PP      | Apr 29, 1453                      | 7     |
|                                 | PPP     | April 29th, 1453                  | 7     |
|                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
| Long localized time             | p       | 12:00 AM                          | 7     |
|                                 | pp      | 12:00:00 AM                       | 7     |
|                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
|                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
| Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
|                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
|                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
|                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
Notes:
1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   are the same as "stand-alone" units, but are different in some languages.
   "Formatting" units are declined according to the rules of the language
   in the context of a date. "Stand-alone" units are always nominative singular:

   `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`

   `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`

2. Any sequence of the identical letters is a pattern, unless it is escaped by
   the single quote characters (see below).
   If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
   the output will be the same as default pattern for this unit, usually
   the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
   are marked with "2" in the last column of the table.

   `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`

   `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`

   `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`

   `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`

   `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`

3. Some patterns could be unlimited length (such as `yyyyyyyy`).
   The output will be padded with zeros to match the length of the pattern.

   `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`

4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   These tokens represent the shortest form of the quarter.

5. The main difference between `y` and `u` patterns are B.C. years:

   | Year | `y` | `u` |
   |------|-----|-----|
   | AC 1 |   1 |   1 |
   | BC 1 |   1 |   0 |
   | BC 2 |   2 |  -1 |

   Also `yy` always returns the last two digits of a year,
   while `uu` pads single digit years to 2 characters and returns other years unchanged:

   | Year | `yy` | `uu` |
   |------|------|------|
   | 1    |   01 |   01 |
   | 14   |   14 |   14 |
   | 376  |   76 |  376 |
   | 1453 |   53 | 1453 |

   The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   except local week-numbering years are dependent on `options.weekStartsOn`
   and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
   and [getWeekYear](https://date-fns.org/docs/getWeekYear)).

6. Specific non-location timezones are currently unavailable in `date-fns`,
   so right now these tokens fall back to GMT timezones.

7. These patterns are not in the Unicode Technical Standard #35:
   - `i`: ISO day of week
   - `I`: ISO week of year
   - `R`: ISO week-numbering year
   - `t`: seconds timestamp
   - `T`: milliseconds timestamp
   - `o`: ordinal number modifier
   - `P`: long localized date
   - `p`: long localized time

8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
   You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

`date` must not be Invalid Date

**`Throws`**

`options.locale` must contain `localize` property

**`Throws`**

`options.locale` must contain `formatLong` property

**`Throws`**

use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md

**`Throws`**

format string contains an unescaped latin alphabet character

**`Example`**

```ts
// Represent 11 February 2014 in middle-endian format:
const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
//=> '02/11/2014'
```

**`Example`**

```ts
// Represent 2 July 2014 in Esperanto:
import { eoLocale } from 'date-fns/locale/eo'
const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
  locale: eoLocale
})
//=> '2-a de julio 2014'
```

**`Example`**

```ts
// Escape string by single quote characters:
const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
//=> "3 o'clock"
```

#### Defined in

node_modules/date-fns/format.d.ts:306

## Other

### AttributeId

Ƭ **AttributeId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:7

___

### AttributeValue

Ƭ **AttributeValue**: `string` \| `number` \| `boolean` \| `Record`<`string`, [`AttributeValue`](../wiki/Exports#attributevalue)\>[]

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:8

___

### AttributeValues

Ƭ **AttributeValues**: `Record`<[`AttributeId`](../wiki/Exports#attributeid), [`AttributeValue`](../wiki/Exports#attributevalue)\>

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:15

___

### ConditionType

Ƭ **ConditionType**: ``"equals"`` \| ``"not-equals"`` \| ``"and"`` \| ``"or"`` \| ``"less-than"`` \| ``"less-than-equals"`` \| ``"greater-than"`` \| ``"greater-than-equals"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:467

___

### Control

Ƭ **Control**: [`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`TypographyControl`](../wiki/TypographyControl) \| [`EntityControl`](../wiki/EntityControl) \| [`RepeatingContainerControl`](../wiki/RepeatingContainerControl) \| [`CertaintyContainerControl`](../wiki/CertaintyContainerControl) \| [`SwitchContainerControl`](../wiki/SwitchContainerControl)

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:482

___

### ControlType

Ƭ **ControlType**: [`Control`](../wiki/Exports#control)[``"type"``]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:483

___

### DateControlThreeVariantDate

Ƭ **DateControlThreeVariantDate**: `string` \| ``"now"``

when we work with min/max/default date in an interview designer, \
we have several possible values that can be assigned to these:
- "now" literal value, which means "right now, this moment \
of time", and this is used when we want to use the date\
at which interview is being filled in by the user
- "YYYY-MM-DD"-like string, i.e. date that is formatted using \
this string and is exactly 10 characters long
- "{{some attribute name}}" - a very special value, that \
references another attribute in the graph. It must not have any\
trailing or leading whitespaces, no whitespaces between left or\
right bracket and the attribute, and have no | (which is an  \
attribute format description, I believe). \
**IMPORTANT** while this is a valid variant for interview designer\
to input, we don't expect BE to respond with this exact value \
when hydrating a Session for an interview runtime,\
instead it will replace this value with "YYYY-MM-DD" formatted \
string, that corresponds to referenced attribute.

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:84

___

### DynamicUpdateFunction

Ƭ **DynamicUpdateFunction**: (`data`: [`AttributeValues`](../wiki/Exports#attributevalues)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

##### Returns

`void`

#### Defined in

[src/core/types.ts:25](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/types.ts#L25)

___

### EntityValue

Ƭ **EntityValue**: [`AttributeValues`](../wiki/Exports#attributevalues) & [`EntityInstance`](../wiki/EntityInstance)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:27

___

### Formatter

Ƭ **Formatter**: ``"currency"`` \| \`date ${string}\` \| ``"date"``

#### Defined in

[src/core/formatting.ts:5](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/formatting.ts#L5)

___

### IBoolean

Ƭ **IBoolean**: [`BooleanControl`](../wiki/BooleanControl)

**`Deprecated`**

Use `BooleanControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:33

___

### IControlsValue

Ƭ **IControlsValue**: [`ControlsValue`](../wiki/ControlsValue)

**`Deprecated`**

Use `ControlValue` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:490

___

### ICurrency

Ƭ **ICurrency**: [`CurrencyControl`](../wiki/CurrencyControl)

**`Deprecated`**

Use `CurrencyControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:64

___

### IDate

Ƭ **IDate**: [`DateControl`](../wiki/DateControl)

**`Deprecated`**

Use `DateControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:114

___

### IDateTime

Ƭ **IDateTime**: [`DateTimeControl`](../wiki/DateTimeControl)

**`Deprecated`**

Use `DateTimeControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:201

___

### IEntity

Ƭ **IEntity**: [`EntityControl`](../wiki/EntityControl)

**`Deprecated`**

Use `EntityControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:409

___

### IEntityInstance

Ƭ **IEntityInstance**: [`EntityInstance`](../wiki/EntityInstance)

**`Deprecated`**

Use `EntityInstance` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:26

___

### IEntityValue

Ƭ **IEntityValue**: [`EntityValue`](../wiki/Exports#entityvalue)

**`Deprecated`**

Use `EntityValue` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:31

___

### IFile

Ƭ **IFile**: [`FileControl`](../wiki/FileControl)

**`Deprecated`**

Use `FileControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:280

___

### IImage

Ƭ **IImage**: [`ImageControl`](../wiki/ImageControl)

**`Deprecated`**

Use `ImageControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:298

___

### INumberOfInstances

Ƭ **INumberOfInstances**: [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl)

**`Deprecated`**

Use `NumberOfInstancesControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:331

___

### IOptions

Ƭ **IOptions**: [`OptionsControl`](../wiki/OptionsControl)

**`Deprecated`**

Use `OptionsControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:254

___

### IText

Ƭ **IText**: [`TextControl`](../wiki/TextControl)

**`Deprecated`**

Use `TextControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:362

___

### ITime

Ƭ **ITime**: [`TimeControl`](../wiki/TimeControl)

**`Deprecated`**

Use `TimeControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:159

___

### ITypography

Ƭ **ITypography**: [`TypographyControl`](../wiki/TypographyControl)

**`Deprecated`**

Use `TypographyControl` instead

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:382

___

### InterviewId

Ƭ **InterviewId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:6

___

### LabelDisplay

Ƭ **LabelDisplay**: ``"automatic"`` \| ``"separate"`` \| ``"inline"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:2

___

### Navigate

Ƭ **Navigate**: [`StepId`](../wiki/Exports#stepid) \| `boolean`

Navigation can be step id, or true for next, false for no navigation

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:10

___

### Overrides

Ƭ **Overrides**: `Record`<`string`, `any`\>

#### Defined in

[src/core/types.ts:23](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/types.ts#L23)

___

### ProjectId

Ƭ **ProjectId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:4

___

### ReleaseId

Ƭ **ReleaseId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:3

___

### RenderableControl

Ƭ **RenderableControl**: [`BooleanControl`](../wiki/BooleanControl) \| [`CurrencyControl`](../wiki/CurrencyControl) \| [`DateControl`](../wiki/DateControl) \| [`TimeControl`](../wiki/TimeControl) \| [`DateTimeControl`](../wiki/DateTimeControl) \| [`OptionsControl`](../wiki/OptionsControl) \| [`FileControl`](../wiki/FileControl) \| [`ImageControl`](../wiki/ImageControl) \| [`NumberOfInstancesControl`](../wiki/NumberOfInstancesControl) \| [`TextControl`](../wiki/TextControl) \| [`TypographyControl`](../wiki/TypographyControl) \| [`RenderableEntityControl`](../wiki/RenderableEntityControl) \| [`RenderableSwitchContainerControl`](../wiki/RenderableSwitchContainerControl) \| [`RenderableCertaintyContainerControl`](../wiki/RenderableCertaintyContainerControl) \| [`RenderableRepeatingContainerControl`](../wiki/RenderableRepeatingContainerControl) & { `dynamicAttributes?`: `string`[] ; `loading?`: `boolean`  }

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:477

___

### RenderableControlType

Ƭ **RenderableControlType**: [`RenderableControl`](../wiki/Exports#renderablecontrol)[``"type"``]

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:481

___

### ResponseData

Ƭ **ResponseData**: [`AttributeValues`](../wiki/Exports#attributevalues) & [`Parent`](../wiki/Parent)

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:19

___

### SessionId

Ƭ **SessionId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:5

___

### SessionObservable

Ƭ **SessionObservable**: `Partial`<[`SessionInstance`](../wiki/SessionInstance)\>

#### Defined in

[src/core/init.ts:465](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/init.ts#L465)

___

### StepId

Ƭ **StepId**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/core.d.ts:2

___

### ControlTypesInfo

• `Const` **ControlTypesInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BOOLEAN` | { `id`: ``"boolean"`` = "boolean"; `name`: ``"Checkbox"`` = "Checkbox" } |
| `BOOLEAN.id` | ``"boolean"`` |
| `BOOLEAN.name` | ``"Checkbox"`` |
| `CERTAINTY_CONTAINER` | { `id`: ``"certainty_container"`` = "certainty\_container"; `name`: ``"Certainty Container"`` = "Certainty Container" } |
| `CERTAINTY_CONTAINER.id` | ``"certainty_container"`` |
| `CERTAINTY_CONTAINER.name` | ``"Certainty Container"`` |
| `CURRENCY` | { `id`: ``"currency"`` = "currency"; `name`: ``"Currency"`` = "Currency" } |
| `CURRENCY.id` | ``"currency"`` |
| `CURRENCY.name` | ``"Currency"`` |
| `DATE` | { `id`: ``"date"`` = "date"; `name`: ``"Date"`` = "Date" } |
| `DATE.id` | ``"date"`` |
| `DATE.name` | ``"Date"`` |
| `ENTITY` | { `id`: ``"entity"`` = "entity"; `name`: ``"Entity"`` = "Entity" } |
| `ENTITY.id` | ``"entity"`` |
| `ENTITY.name` | ``"Entity"`` |
| `NUMBER_OF_INSTANCES` | { `id`: ``"number_of_instances"`` = "number\_of\_instances"; `name`: ``"Number Of Instances"`` = "Number Of Instances" } |
| `NUMBER_OF_INSTANCES.id` | ``"number_of_instances"`` |
| `NUMBER_OF_INSTANCES.name` | ``"Number Of Instances"`` |
| `OPTIONS` | { `id`: ``"options"`` = "options"; `name`: ``"Select"`` = "Select" } |
| `OPTIONS.id` | ``"options"`` |
| `OPTIONS.name` | ``"Select"`` |
| `RADIO` | { `id`: ``"radio"`` = "radio"; `name`: ``"Radio Buttons"`` = "Radio Buttons" } |
| `RADIO.id` | ``"radio"`` |
| `RADIO.name` | ``"Radio Buttons"`` |
| `REPEATING_CONTAINER` | { `id`: ``"repeating_container"`` = "repeating\_container"; `name`: ``"Repeat Container"`` = "Repeat Container" } |
| `REPEATING_CONTAINER.id` | ``"repeating_container"`` |
| `REPEATING_CONTAINER.name` | ``"Repeat Container"`` |
| `SWITCH_CONTAINER` | { `id`: ``"switch_container"`` = "switch\_container"; `name`: ``"Switch Container"`` = "Switch Container" } |
| `SWITCH_CONTAINER.id` | ``"switch_container"`` |
| `SWITCH_CONTAINER.name` | ``"Switch Container"`` |
| `TEXT` | { `id`: ``"text"`` = "text"; `name`: ``"Text"`` = "Text" } |
| `TEXT.id` | ``"text"`` |
| `TEXT.name` | ``"Text"`` |
| `TIME` | { `id`: ``"time"`` = "time"; `name`: ``"Time"`` = "Time" } |
| `TIME.id` | ``"time"`` |
| `TIME.name` | ``"Time"`` |
| `TYPOGRAPHY` | { `id`: ``"typography"`` = "typography"; `name`: ``"Typography"`` = "Typography" } |
| `TYPOGRAPHY.id` | ``"typography"`` |
| `TYPOGRAPHY.name` | ``"Typography"`` |

#### Defined in

[src/core/constants.ts:1](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/constants.ts#L1)

___

### DATE\_FORMAT

• `Const` **DATE\_FORMAT**: ``"yyyy-MM-dd"``

pretty strange format, because it's from date-fns

**`Link`**

https://date-fns.org/v2.16.1/docs/format. \
For some reason their approach is that dd is "day \
of month" but DD is "day of year" (in dayjs DD is\
"day of month")

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:122

___

### DATE\_TIME\_FORMAT\_12

• `Const` **DATE\_TIME\_FORMAT\_12**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:203

___

### DATE\_TIME\_FORMAT\_24

• `Const` **DATE\_TIME\_FORMAT\_24**: `string`

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:202

___

### TIME\_FORMAT\_12

• `Const` **TIME\_FORMAT\_12**: ``"h:mm:ss a"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:161

___

### TIME\_FORMAT\_24

• `Const` **TIME\_FORMAT\_24**: ``"HH:mm:ss"``

#### Defined in

node_modules/@decisively-io/types-interview/dist/controls.d.ts:160

___

### defaultPath

• `Const` **defaultPath**: `string`[]

#### Defined in

[src/core/init.ts:74](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/init.ts#L74)

___

### applyInstancesToEntityControl

▸ **applyInstancesToEntityControl**(`control`, `instances`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `control` | [`RenderableEntityControl`](../wiki/RenderableEntityControl) |
| `instances` | `string`[] |

#### Returns

`void`

#### Defined in

[src/core/util.ts:85](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/util.ts#L85)

___

### back

▸ **back**(`api`, `project`, `session`, `overrides?`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:77](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L77)

___

### cmpAttributeData

▸ **cmpAttributeData**(`prev`, `next`): [`AttributeValues`](../wiki/Exports#attributevalues)

Strips out any common attributes between two AttributeValues objects, reporting only the latest changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prev` | [`AttributeValues`](../wiki/Exports#attributevalues) | The previous state of the attributes |
| `next` | [`AttributeValues`](../wiki/Exports#attributevalues) | The current state of the attributes |

#### Returns

[`AttributeValues`](../wiki/Exports#attributevalues)

#### Defined in

[src/core/helpers.ts:57](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/helpers.ts#L57)

___

### containsCurrentStep

▸ **containsCurrentStep**(`s`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Step`](../wiki/Step) |

#### Returns

`boolean`

#### Defined in

[src/core/helpers.ts:19](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/helpers.ts#L19)

___

### create

▸ **create**(`api`, `project`, `options?`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `options` | [`SessionConfig`](../wiki/SessionConfig) |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:15](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L15)

___

### createApiInstance

▸ **createApiInstance**(`baseURL`, `overrides?`): `AxiosInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `overrides` | `AxiosRequestConfig`<`any`\> |

#### Returns

`AxiosInstance`

#### Defined in

[src/core/init.ts:34](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/init.ts#L34)

___

### deriveDefaultControlsValue

▸ **deriveDefaultControlsValue**(`controls`): [`ControlsValue`](../wiki/ControlsValue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `controls` | [`RenderableControl`](../wiki/Exports#renderablecontrol)[] |

#### Returns

[`ControlsValue`](../wiki/ControlsValue)

#### Defined in

[src/core/util.ts:103](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/util.ts#L103)

___

### exportTimeline

▸ **exportTimeline**(`api`, `project`, `session`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/core/api.ts:104](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L104)

___

### flatten

▸ **flatten**(`value`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[src/core/util.ts:212](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/util.ts#L212)

___

### formatValue

▸ **formatValue**(`value`, `options?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AttributeValue`](../wiki/Exports#attributevalue) |
| `options?` | [`FormatOptions`](../wiki/FormatOptions) |

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/formatting.ts:77](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/formatting.ts#L77)

___

### getCurrentStep

▸ **getCurrentStep**(`s`): ``null`` \| [`Step`](../wiki/Step)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Step`](../wiki/Step) |

#### Returns

``null`` \| [`Step`](../wiki/Step)

#### Defined in

[src/core/helpers.ts:23](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/helpers.ts#L23)

___

### getDate

▸ **getDate**(`value`): `undefined` \| `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`undefined` \| `Date`

#### Defined in

[src/core/formatting.ts:26](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/formatting.ts#L26)

___

### init

▸ **init**(`host`, `path?`, `overrides?`): [`InterviewProvider`](../wiki/InterviewProvider)

Initialize the SDK

chOnScreenData  : Renderer -{updated attribute}-> SDK
   - (the function never moves, so we can safely give it to the renderer)
newDataCallback : SDK -{updated session}-> Renderer :
   - if using react, the renderer needs to be careful, because unless this function is within
     a HOC, it will be recreated every render, and the SDK will not be able to send updates

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `host` | `string` | `undefined` |
| `path` | `string` \| `string`[] | `defaultPath` |
| `overrides` | `AxiosRequestConfig`<`any`\> | `{}` |

#### Returns

[`InterviewProvider`](../wiki/InterviewProvider)

#### Defined in

[src/core/init.ts:476](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/init.ts#L476)

___

### isAttributeDynamic

▸ **isAttributeDynamic**(`attribId`, `state?`): `boolean`

Checks if an attribId is within the goal or dependency list of a state object.
NOTE: goals with zero dependencies will have themselves in the dependency list,
      but we check both anyway

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribId` | `string`[] |
| `state?` | [`State`](../wiki/State)[] |

#### Returns

`boolean`

`true` if any of the supplied attribIds are dynamic, `false` otherwise

#### Defined in

[src/core/helpers.ts:82](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/helpers.ts#L82)

___

### iterateControls

▸ **iterateControls**(`controls`, `func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controls` | [`Control`](../wiki/Exports#control)[] |
| `func` | (`control`: [`Control`](../wiki/Exports#control)) => `void` |

#### Returns

`void`

#### Defined in

[src/core/util.ts:47](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/util.ts#L47)

___

### load

▸ **load**(`api`, `project`, `session`): `Promise`<[`Session`](../wiki/Session)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `session` | `string` |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:31](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L31)

___

### navigate

▸ **navigate**(`api`, `project`, `session`, `step`, `overrides?`): `Promise`<[`Session`](../wiki/Session)\>

Navigate to a specific step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `step` | `string` | The desired step ID |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) | - |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:66](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L66)

___

### render

▸ **render**(`template`, `data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `string` |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) |

#### Returns

`string`

#### Defined in

[src/core/placeholders.ts:10](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/placeholders.ts#L10)

___

### replaceTemplatedText

▸ **replaceTemplatedText**(`text`, `replacements`, `state?`, `locale?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `replacements` | [`AttributeValues`](../wiki/Exports#attributevalues) \| `Record`<`string`, `string`\> |
| `state?` | [`State`](../wiki/State)[] |
| `locale?` | `string` |

#### Returns

`string`

#### Defined in

[src/core/helpers.ts:32](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/helpers.ts#L32)

___

### setCurrentInStep

▸ **setCurrentInStep**(`s`, `id`): [`Step`](../wiki/Step)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Step`](../wiki/Step) |
| `id` | `string` |

#### Returns

[`Step`](../wiki/Step)

#### Defined in

[src/core/helpers.ts:7](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/helpers.ts#L7)

___

### simulate

▸ **simulate**(`api`, `project`, `release`, `session`, `data`): `Promise`<[`AttributeValues`](../wiki/Exports#attributevalues)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `AxiosInstance` |
| `project` | `string` |
| `release` | `string` |
| `session` | `string` |
| `data` | `Partial`<[`Simulate`](../wiki/Simulate)\> |

#### Returns

`Promise`<[`AttributeValues`](../wiki/Exports#attributevalues)\>

#### Defined in

[src/core/api.ts:82](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L82)

___

### submit

▸ **submit**(`api`, `project`, `session`, `data`, `navigate`, `overrides?`, `releaseId?`): `Promise`<[`Session`](../wiki/Session)\>

Submit response for current step.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `AxiosInstance` | - |
| `project` | `string` | - |
| `session` | `string` | - |
| `data` | [`AttributeValues`](../wiki/Exports#attributevalues) | The data for the current step to submit |
| `navigate` | [`Navigate`](../wiki/Exports#navigate) | The desired navigation after update, defaults to next |
| `overrides?` | [`Overrides`](../wiki/Exports#overrides) | Other params to pass through to payload |
| `releaseId?` | `string` | - |

#### Returns

`Promise`<[`Session`](../wiki/Session)\>

#### Defined in

[src/core/api.ts:43](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/api.ts#L43)

___

### transformResponse

▸ **transformResponse**(`session`, `data`): [`ResponseData`](../wiki/Exports#responsedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../wiki/Session) |
| `data` | [`ResponseData`](../wiki/Exports#responsedata) |

#### Returns

[`ResponseData`](../wiki/Exports#responsedata)

#### Defined in

[src/core/init.ts:59](https://github.com/decisively-io/interview-sdk/blob/8661c64/src/core/init.ts#L59)

___

### uuid

▸ **uuid**<`T`\>(`options`, `buffer`, `offset?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `OutputBuffer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `undefined` \| ``null`` \| `V4Options` |
| `buffer` | `T` |
| `offset?` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@types/uuid/index.d.ts:38

▸ **uuid**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `V4Options` |

#### Returns

`string`

#### Defined in

node_modules/@types/uuid/index.d.ts:37
