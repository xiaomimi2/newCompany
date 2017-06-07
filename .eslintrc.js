module.exports = {
    "extends": "standard",
    "env":[
    	'browser',
    	'nodejs'
    ],
    "plugins": [
        "standard",
        "promise"
    ],
    rules: {
    	"indent":["error", "tab"],
    	"quotes":["error", "single"],
    	"semi":["error", "never"]
    }
}