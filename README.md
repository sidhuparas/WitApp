# WitApp

## What is it?

It's an Android application developed using React Native which extracts the user intent from a text input. User will need to type some specific query and the app will display the user intention.

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

First of all, on the server, a wit app is created which provides the option to categorize text into intents that the developer can define by training the app by adding examples. 

1. When user inputs a query and press Submit, a POST request is made using Axios (React Native Library) to the endpoint.
2. A JSON response is received back with an intent (if any).
3. The received JSON is parsed to get the actual intent and then it's showed to the user.

## What does it use?

1. [Wit](https://wit.ai/docs/recipes#categorize-the-user-intent)
2. [Axios](https://www.npmjs.com/package/react-native-axios)

## How to use it?

Simply download and install the app using this link. After launching it, input the query and press Submit. Depending on your internet connection, the intent will be fetched within a couple of seconds and then showed in form of text.

## Support

Feel free to raise an issue or make a pull request. I will be happy to improve my app :)
