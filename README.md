# cooldowns
This is a cooldown manager.

## Usage
First, create the manager
```js
const manager = new require('cooldownsManager.js')();
client.CooldownsManager = manager;
```

## Set a cooldown
```js
client.CooldownsManager.set({
  commandName: 'your command name',
  time: 5, // This number is in seconds
  userID: "User id here"
});
```

And cooldown is automatically done !

## Check for a cooldown
```js
client.CooldownsManger.check({
  commandName: "Command name here",
  userID: "user id here"
});
```

returns `true` if user has a cooldown
returns `false` if user has not

## remaining time
```js
client.CooldownsManager.remainingTime({
  commandName: 'command name',
  userID: "user id"
});
```

returns `false` if user has no cooldown
returns the number of seconds remains on the cooldown.

## Finish !

Now you can use my amazing module !
