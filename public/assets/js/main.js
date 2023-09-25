// global objects
const keyboard = {
	keys: [
		['a-key-default', 'a-key-active'],
		['b-key-default', 'b-key-active'],
		['c-key-default', 'c-key-active'],
		['d-key-default', 'd-key-active'],
		['e-key-default', 'e-key-active'],
		['f-key-default', 'f-key-active'],
		['g-key-default', 'g-key-active'],
		['h-key-default', 'h-key-active'],
		['i-key-default', 'i-key-active'],
		['j-key-default', 'j-key-active'],
		['k-key-default', 'k-key-active'],
		['l-key-default', 'l-key-active'],
		['m-key-default', 'm-key-active'],
		['n-key-default', 'n-key-active'],
		['o-key-default', 'o-key-active'],
		['p-key-default', 'p-key-active'],
		['q-key-default', 'q-key-active'],
		['r-key-default', 'r-key-active'],
		['s-key-default', 's-key-active'],
		['t-key-default', 't-key-active'],
		['u-key-default', 'u-key-active'],
		['v-key-default', 'v-key-active'],
		['w-key-default', 'w-key-active'],
		['x-key-default', 'x-key-active'],
		['y-key-default', 'y-key-active'],
		['z-key-default', 'z-key-active'],
		['dot-key-default', 'dot-key-active'],
		['one-key-default', 'one-key-active'],
		['two-key-default', 'two-key-active'],
		['six-key-default', 'six-key-active'],
		['tab-key-default', 'tab-key-active'],
		['plus-key-default', 'plus-key-active'],
		['zero-key-default', 'zero-key-active'],
		['four-key-default', 'four-key-active'],
		['five-key-default', 'five-key-active'],
		['nine-key-default', 'nine-key-active'],
		['quote-key-default', 'quote-key-active'],
		['minus-key-default', 'minus-key-active'],
		['comma-key-default', 'comma-key-active'],
		['tilde-key-default', 'tilde-key-active'],
		['three-key-default', 'three-key-active'],
		['seven-key-default', 'seven-key-active'],
		['eight-key-default', 'eight-key-active'],
		['slash-key-default', 'slash-key-active'],
		['enter-key-default', 'enter-key-active'],
		['space-key-default', 'space-key-active'],
		['command-key-default', 'command-key-active'],
		['alt-left-key-default', 'alt-left-key-active'],
		['alt-right-key-default', 'alt-right-key-active'],
		['semicolon-key-default', 'semicolon-key-active'],
		['backslash-key-default', 'backslash-key-active'],
		['backspace-key-default', 'backspace-key-active'],
		['caps-lock-key-default', 'caps-lock-key-active'],
		['shift-left-key-default', 'shift-left-key-active'],
		['shift-right-key-default', 'shift-right-key-active'],
		['open-bracket-key-default', 'open-bracket-key-active'],
		['control-left-key-default', 'control-left-key-active'],
		['close-bracket-key-default', 'close-bracket-key-active'],
		['control-right-key-default', 'control-right-key-active'],
		['function-left-key-default', 'function-left-key-active'],
		['function-right-key-default', 'function-right-key-active'],
	],
	profiles: [
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--a-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--a-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--b-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--b-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--c-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--c-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--d-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--d-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--e-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--e-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--f-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--f-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--g-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--g-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--h-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--h-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--i-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--i-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--j-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--j-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--k-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--k-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--l-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--l-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--m-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--m-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--n-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--n-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--o-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--o-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--p-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--p-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--q-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--q-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--r-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--r-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--s-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--s-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--t-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--t-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--u-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--u-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--v-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--v-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--w-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--w-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--x-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--x-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--y-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--y-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--z-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--z-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--a-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--b-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--c-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--d-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--e-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--f-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--g-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--h-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--i-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--j-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--k-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--l-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--m-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--n-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--o-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--p-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--q-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--r-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--s-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--t-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--u-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--v-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--w-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--x-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--y-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--z-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--dot-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--dot-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--one-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--one-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--two-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--two-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--six-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--six-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--alt-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--alt-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--tab-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--tab-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--dot-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--one-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--two-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--six-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--alt-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--tab-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--plus-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--plus-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--zero-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--zero-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--four-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--four-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--five-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--five-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--nine-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--nine-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--plus-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--zero-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--four-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--five-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--nine-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--quote-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--quote-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--minus-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--minus-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--comma-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--comma-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--tilde-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--tilde-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--three-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--three-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--seven-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--seven-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--eight-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--eight-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--slash-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--slash-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--enter-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--enter-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--space-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--space-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--quote-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--minus-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--comma-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--tilde-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--three-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--seven-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--eight-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--slash-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--enter-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--space-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--command-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--command-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--control-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--control-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--command-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--control-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--function-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--function-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--function-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--semicolon-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--semicolon-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--backslash-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--backslash-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--backspace-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--backspace-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--caps-lock-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--caps-lock-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--semicolon-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--backslash-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--backspace-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--caps-lock-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--shift-left-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--shift-left-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--shift-left-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--shift-right-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--shift-right-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--shift-right-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--open-bracket-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--open-bracket-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--open-bracket-empty-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--close-bracket-full-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--close-bracket-half-key')
			.slice(4, -1)}`,
		`${getComputedStyle(document.documentElement)
			.getPropertyValue('--close-bracket-empty-key')
			.slice(4, -1)}`,
	],
};

const snippet = {
	element: document.querySelector('note'),
	codeArray: [],
	getSnippet: function () {
		return new Promise(function (resolve, reject) {
			fetch(`/api/code`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					let snippets = data;
					let randomIndex = ~~(Math.random() * snippets.length);
					snippet.codeArray = JSON.stringify(snippets[randomIndex].code)
						.slice(1, -1)
						.split('');
					resolve(snippet.codeArray);
				})
				.catch(function (error) {
					reject(error);
				});
		});
	},
	deleteSnippet: function () {
		if (snippet.element.hasChildNodes()) {
			while (snippet.element.firstChild) {
				console.log(`snippet.${snippet.element.firstChild}`);
				snippet.element.removeChild(snippet.element.firstChild);
				console.log(`${snippet.element.hasChildNodes()}`, `while()`);
			}
		}
	},
};

const input = {
	// unique id
	id: 0,
	// score variables
	time: null,
	correct: 0,
	incorrect: 0,
	duration: 0.0,
	perMinute: null,
	// persistent score variables
	totalTime: 0,
	totalCorrect: 0,
	totalIncorrect: 0,
	myTimer: null,
	// other variables
	key: null,
	currentIndex: 0,
	startTimer: function () {
		// grabs the epoch time
		let start = new Date().getTime();
		// precision for timer, calculates the delta
		function instance() {
			input.time += 100;
			input.duration = ~~(input.time / 100) / 10;
			if (Math.round(input.duration) == input.duration) {
				input.duration += '.0';
			}
			document.getElementById('timer').textContent = input.duration;
			let diff = new Date().getTime() - start - input.time;
			input.id = window.setTimeout(instance, 100 - diff);
		}
		window.setTimeout(instance, 100);
	},
	checkInput: function (event) {
		try {
			// sets the variables
			this.key = event.key;
			let letterElements = Array.from(
				snippet.element.querySelectorAll('span'),
			);
			let textContentArray = letterElements.map(function (element) {
				return element.textContent;
			});
			// this is for debugging purposes
			console.log(`snippet.codeArray: ${textContentArray}.`);
			// compares the variables
			if (input.currentIndex !== textContentArray.length) {
				if (snippet.codeArray[input.currentIndex] === this.key) {
					// this is for debugging purposes
					console.log(`this.letters[${input.currentIndex}] === this.key`);
					let currentElement = letterElements[input.currentIndex];
					currentElement.style.animation =
						'successAnimation 0.8s forwards linear';
					// this is for debugging purposes
					console.log(`currentElement.style.animation`);
					// increments variables
					input.correct++;
					input.currentIndex++;
					// this is for debugging purposes
					console.log(`input.${input.currentIndex}`);
				} else if (snippet.codeArray[input.currentIndex] !== this.key) {
					// increments variable
					input.incorrect++;
					// checks if the backspace key was pressed
					if (event.code === 'Backspace') {
						let currentElement = letterElements[input.currentIndex];
						currentElement.style.animation =
							'clearAnimation 0.8s forwards linear';
					} else {
						// this is for debugging purposes
						console.log(
							`this.letters[${input.currentIndex}] !== this.key`,
						);
						let currentElement = letterElements[input.currentIndex];
						currentElement.style.animation =
							'warningAnimation 0.8s forwards linear';
						// this is for debugging purposes
						console.log(`currentElement.style.animation`);
					}
				}
			} else if (input.currentIndex === textContentArray.length) {
				// this is for debugging purposes
				console.log(`${input.currentIndex}] === textContentArray.length`);
				// this is for debugging purposes
				console.log(`time = ${input.time}, duration = ${input.duration}`);
				// calculates characters per minute
				input.perMinute = (input.correct / (input.duration * 1000)) * 60000;
				console.log(
					`correct = ${input.correct}, time = ${input.time}, duration = ${input.duration}, perMinute = ${input.perMinute}`,
				);
				console.log(
					`${input.duration} = now() - since() && ${input.perMinute}`,
				);
				// clears the timer element
				input.deleteTimer();
				// clears the running timer
				window.clearTimeout(input.id);
				// pushes the score to totals
				input.totalTime += input.time;
				input.totalCorrect += input.correct;
				input.totalIncorrect += input.incorrect;
				// shows the score
				document.getElementById(
					'score',
				).textContent = `CPM ${~~input.perMinute} | Correct ${
					input.totalCorrect
				} | Incorrect ${input.totalIncorrect}`;
				// clears the scores
				input.time = 0;
				input.correct = 0;
				input.incorrect = 0;
				input.duration = 0.0;
				// sets the score
				score.setScore(score.getScore().totalScore());
				let scoreValues = score.getScore().totalScore();
				// this is for debugging purposes
				console.log(
					`score.setScore(${scoreValues.wpm}, ${scoreValues.correct}, ${scoreValues.user_name})`,
				);
				// starts new snippet & timer
				initSnippet();
				input.startTimer();
				// clears current index
				input.currentIndex = 0;
			}
		} catch (error) {
			// this is for debugging purposes
			console.log(error);
			console.log(error.message);
			console.log(error.stack);
		}
	},
	deleteTimer: function () {
		// todo: currently not using this
		// this is for debugging purposes
		console.log(`deleteTimer: () => {...}`);
		if (document.getElementById('timer')) {
			document.getElementById('timer').textContent = '';
		}
	},
};

const preloader = {
	element: document.getElementById('preloader'),
	setPreloader: function () {
		// for loop that goes through pushing array to memory
		for (let i = 0; i < keyboard.profiles.length; i++) {
			let tempImage = document.createElement('img');
			// adds the images to the preloader
			tempImage.src = keyboard.profiles[i];
			this.element.appendChild(tempImage);
		}
	},
	deletePreloader: function () {
		if (preloader.element.hasChildNodes()) {
			while (preloader.firstChild) {
				preloader.removeChild(preloader.firstChild);
				console.log('deleted');
			}
		}
	},
};

function initSnippet() {
	// deletes the snippet
	snippet.deleteSnippet();
	// adds the snippet to the page
	snippet
		.getSnippet()
		.then(function (array) {
			array.forEach(function (letter) {
				let letterContainer = document.createElement('span');
				letterContainer.textContent = letter;
				snippet.element.appendChild(letterContainer);
			});
		})
		.catch(function (error) {
			console.log(error);
		});
}

// sets an event listener for 'load' event
window.addEventListener('load', function () {
	// sets the preloader
	preloader.setPreloader();
	this.window.addEventListener('resize', function () {
		preloader.deletePreloader();
		preloader.setPreloader();
	});
	// starts a snippet
	initSnippet();
	input.startTimer();
	// creates an event listener for each key
	document.addEventListener('keydown', function (event) {
		let keyboardGrid = document.querySelector('.keyboard-grid');
		let caps = keyboardGrid.querySelectorAll('span');
		// return keyCode on keydown
		input.checkInput(event);
		let keyCode = event.code;
		// loops through the caps array
		for (let i = 0; i < caps.length; i++) {
			// checks if the keyCode matches the data-code
			if (caps[i].getAttribute('data-code') === keyCode) {
				// gets the id of the span or cap
				let key = caps[i].getAttribute('id');
				// this is for debugging purposes
				console.log(`key = caps[${i}].getAttribute('${keyCode}')`, key);
				let cap = document.querySelector(`#${key}`);
				let index = keyboard.keys.findIndex(function (row) {
					return row[0] === key;
				});
				let animation = keyboard.keys[index][1];
				cap.setAttribute('id', animation);
				cap.addEventListener('animationend', function () {
					cap.setAttribute('id', keyboard.keys[index][0]);
				});
			}
		}
	});
	// creates an event listener so the mouse can be used
	document.addEventListener('click', function (event) {
		let keyboardGrid = document.querySelector('.keyboard-grid');
		let caps = keyboardGrid.querySelectorAll('span');
		let keyCode = event.target.getAttribute('data-code'); //return keyCode on keydown
		for (let i = 0; i < caps.length; i++) {
			if (caps[i].getAttribute('data-code') === keyCode) {
				let key = caps[i].getAttribute('id');
				// this is for debugging purposes
				console.log(`key = caps[${i}].getAttribute('${keyCode}')`, key);
				let cap = document.querySelector(`#${key}`);
				let index = keyboard.keys.findIndex(function (row) {
					return row[0] === key;
				});
				let animation = keyboard.keys[index][1];
				cap.setAttribute('id', animation);
				cap.addEventListener('animationend', function () {
					cap.setAttribute('id', keyboard.keys[index][0]);
				});
			}
		}
	});
});
