const snekfetch = require('snekfetch');

class randomAnimals {

	/**
	 * It returns a random cat
	 */
	async cat() {
		try {
			var { body } = await snekfetch
				.get('https://aws.random.cat/meow');
					return body.file;
		} catch (err) {
			throw 'Error: ' + err.message;
		}
	}

	/**
	 * It returns a random dog
	 */
	async dog() {
		try {
			const { body } = await snekfetch
				.get('https://random.dog/woof.json');
                	return body.url;
		} catch (err) {
			throw 'Error: ' + err.message;
		}
	}

}

module.exports = new randomAnimals();
