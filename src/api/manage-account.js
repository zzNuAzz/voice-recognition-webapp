/* eslint-disable */
const { httpGet } = require('./sender/sender');

function getAccounts() {
	const route = `/get-accounts`;
	// return httpGet(route);
	return Promise.resolve([
		{
			id: 1,
			name: 'Trần Tuấn Anh',
			role: 'Administrator',
		},
		{
			id: 2,
			name: 'Lê Phương',
			role: 'User',
		},
		{
			id: 3,
			name: 'NuA',
			role: 'User',
		},
		{
			id: 4,
			name: 'NuA',
			role: 'User',
		},
		{
			id: 5,
			name: 'NuA',
			role: 'User',
		},
		{
			id: 6,
			name: 'NuA',
			role: 'User',
		},
		{
			id: 7,
			name: 'NuA',
			role: 'User',
		},
		{
			id: 8,
			name: 'NuA',
			role: 'User',
		},
	]);
}

function deleteAccount(param) {
    return Promise.resolve({
		success: true
	});
}

function deleteAllAccount() {
	return Promise.resolve({
		success: true
	});
}


export default {
    getAll: getAccounts,
	delete: deleteAccount,
	deleteAll: deleteAllAccount
}