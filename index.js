const snekfetch = require('snekfetch');

class randomAnimal {

	/**
	 * It returns a cat :)
	 */
	cat() {
		try {
			var { body } = await snekfetch
			.get('http://random.cat/meow');
        		return 'body.file';
		} catch (err) {
			throw 'Error: ' + err.message;
		}
	}
	
}

module.exports = new randomAnimal();
