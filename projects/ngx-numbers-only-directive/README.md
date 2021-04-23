# NumbersOnlyDirectiveLibrary

This project adds a new directive `called NgxNumbersOnly` it assures an HTML Input element will
only recieve numbers.

it can be defined to allow negative numbers or disallow them as well as decimal point numbers.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.


## How To Install

Run `npm i ngx-numbers-only-directive` .

## How To Use

In your appModule Import NgxNumbersOnlyDirectiveModule:
`import { NgxNumbersOnlyDirectiveModule }`

and add it to your imports array:
`imports: [NgxNumbersOnlyDirectiveModule]`

Add the directive to an input element. example:`<input NgxNumbersOnly>`

To allow Negative numbers:`<input NgxNumbersOnly [allowSign]=true>`

To allow decimals:`<input NgxNumbersOnly [allowDecimals]=true [allowSign]=true>`

## Contribute

If you enjoyed this code consider donating using paypal:[Donations](https://www.paypal.com/donate?business=8XDLJU4VZYYSS&currency_code=USD)

## Thanks
The base for this directive was a StackOverflow answer by [Elvis Fernandez](https://stackoverflow.com/users/1886084/elvis-fernandez).