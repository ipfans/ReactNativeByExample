'use strict';

export function request(url) {
	console.log("url=", url);
	return fetch(url).then(response => response.json());
}