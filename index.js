const snekfetch = require('snekfetch');

class randomAnimal {

	/**
	 * It returns a random cat
	 */
	cat() {
		try {
			var { body } = await snekfetch
			.get('http://random.cat/meow');
        		return body.file;
		} catch (err) {
			throw 'Error: ' + err.message;
		}
	}

	/**
	 * It returns a random dog
	 */
	dog() {
		try {
			const { body } = await snekfetch
				.get('https://random.dog/woof.json');
                	return body.url;
		} catch (err) {
			throw 'Error: ' + err.message;
		}
	}
}

module.exports = new randomAnimal();
