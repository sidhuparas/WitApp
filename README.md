# WitApp

## What is it?

It's an Android application developed using React Native which extracts the user intent from a text input. User will need to type some specific query and the app will display its the user intention.

At this time, we accept some specific category of inputs only.

#### Categories:

* Weather
* Distance
* Directions
* Time Taken

#### Examples:

* How much time will it take to travel from Delhi to Mumbai?
* Will it be cold tomorrow?
* Give me directions from New York to London
* How far is Kolkata from Nagpur?

NOTE: Question Mark (?) is optional.

## How it works?

### Workflow

### Internal Working

1. When user inputs a query and press Submit, a POST request is made using Axios (React Native Library) to an endpoint developed in Python.
2. A JSON response is received back with an intent (if any).
3. The received JSON is parsed to get the actual intent and then it's showed to the user.

## What does it use?

1. [Wit](https://wit.ai/docs/recipes#categorize-the-user-intent)
2. [Axios](https://www.npmjs.com/package/react-native-axios)

## How to use it?

## Support

Feel free to raise an issue or make a pull request. I will be happy to improve my app :)
