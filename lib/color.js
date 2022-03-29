const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, color) => {
	return !color ? chalk.cyan('[YUKA] ') + chalk.green(text) : chalk.cyan('[YUKA] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor
}
