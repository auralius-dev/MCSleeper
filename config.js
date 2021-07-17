let config = {}; // Do not touch this.

// The message displayed in the server list.
config.motdMessage = "§6SERVER §8| §7I am currently sleeping §8Zzz";

// The message that displays when someone tries to join.
config.kickMessage = "§aServer is waking up! Please wait about §650~ §aseconds.";

// The port that the server runs on.
config.serverPort = "25565";

// If the minecraft authentication servers should be used.
config.onlineMode = true;

// "max" player limit. Only for display.
config.maxPlayers = 20;

// How many seconds should you be given before MCSleeper auto restarts.
config.restartTime = 8;

// If the server should start when viewed in the server list.
config.startOnView = false;

// If the server should print the ips of people who see the server.
config.onViewMessages = true;

// How many times the program can error. Hasn't been tested, just added for safety.
config.errorLimit = 10;

// Where the server will run.
// IF THIS DOESN'T POINT TO WHERE YOUR SERVER JAR IS YOU WILL MESS A BUNCH
// OF YOUR STUFF UP!
config.runDir = "./"

// The launch command to be used when starting the server application.
config.launchCommand = "java -Xms2048M -Xmx2048M -jar ./server.jar nogui";

// The server will not run unless you've set this to true.
// Set this to true once you've configurated everything perfectly.
config.sure = false;

// The favicon. It's stored in base64, so you'll need an png to base64 converter.
// https://onlinepngtools.com/convert-png-to-base64
config.favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpVJaRCwi4pChOlkQFXGUKhbBQmkrtOpgcumH0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QNzcnRRcp8X9JoUWMB8f9eHfvcfcOEBoVpppd44CqWUY6ERdz+RUx8IoA+hBEGAMSM/VkZiELz/F1Dx9f72I8y/vcnyOsFEwG+ETiWaYbFvE68fSmpXPeJ46wsqQQnxOPGXRB4keuyy6/cS45LPDMiJFNzxFHiMVSB8sdzMqGSjxFHFVUjfKFnMsK5y3OaqXGWvfkLwwVtOUM12kOI4FFJJGCCBk1bKACCzFaNVJMpGk/7uEfcvwpcsnk2gAjxzyqUCE5fvA/+N2tWZyccJNCcaD7xbY/RoDALtCs2/b3sW03TwD/M3Cltf3VBjDzSXq9rUWPgN5t4OK6rcl7wOUOMPikS4bkSH6aQrEIvJ/RN+WB/lsguOr21trH6QOQpa6WboCDQ2C0RNlrHu/u6ezt3zOt/n4AOUhykDXk5BIAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAADrEAAA6xAZyMH9oAAAAHdElNRQflBxEKDgfdqPGAAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAA1dJREFUeNrtW01vElEU5WOYGVooFBPTsjESQkJX1TRVtkaX6n8wLvQfGBOjJo0LE1cujKbGdOm+K3YmaqIbF0bRENFK/IJ+wVAYYACXnXMWb/LCknt3p9B5cPrOffeedxt+fvncJOSL7tDzw9BczAB85v4TwB/u3gQcCYcBt/tDwCfnrRCuNwK8GDcB/zg8Anzp0Rbg97evA06Y+Hk7A/w+HJHQjIcQMOsEGN8OOso3sKYymQzg5WQc8OufTWUO+Ng4pJxgAx7sYk5I26bWF/rUbAH2xhPKUbIDhAAhwJ8D+AcZOoc5RziOA/iP08MHksgWrBjgGIuQwoxGlXUCxy+nC/hEHOuMf0cufT9LdoAQIAQcR7hcLsNBOR6P8VweDADn83nAtVpNa8HRCDUdJc3HYpgzhkOsI4rFIuBKpaJcz/OwF0ilUrIDhAAhwJcDHl5cnajOUd0I8hPWH2wC/nzvhvJ5rjdS1va6sbbxTHaAECAE+Ep31jzX/qfT84C/k0e31+1jLT6HzxtPULPr9AHYs+P1e5RT4pRTWn2sU1KW2j8oUZ0hEhACxA9Q99cLFr6FPT7W/N8O+gNLCfQM43HEyYDnLyXQMzx09TQf1BuIBISAWe8Ftre3tYpr9gvCdBdomqayn8/lclp+AmvWMIypvjCvLxIQAmY9B2xdPT/R6be5n3976xpqNIKc2gZ6fnzv0CDfXnd9ng/gyNLd5Zt6U3aAECAE+CT7dc/R+oWzdC6zZndaHa3n8fwB3y3u97D2X6V7Co5m11X6C7IDhAAhACWXtmPUbw+VfgDfrfE5z7HTQg/xVAo9xnob/Ydl6v957jCoF2j3PWWOYQ9SJCAEiB+g9gNcF8/VlZUVrX5+2mD/oVAoAK5Wq4AtCz3KXg89Sp5HEAkIAbOeA15cQT+Ax/iSNOd30BtoLcDzAqWNp4Df3cH5gNxiAvBvmkPk8ChHsB/BdcSFxy9lBwgBQoBPMnx/X93H/plfZ00FBc8PlOh17iVe7TSmWo9zGOeEdrstO0AIEAJ8EuEffNlFjaxlM8p+Oih4fsC27QAN62neNvBv6Hpj2QFCgBAwhR8woXOf/YBEAmv1oPl/fp3v5+v1OmCeJwiaDwj6/wKObDYrO0AIEAKO4z+3+jIUYIdZUAAAAABJRU5ErkJggg==";

module.exports = config; // Do not touch this.