![Logo](https://iili.io/GzQSuj.png)

**Who Sings** is a musical quiz game where users can challenge each other. The aim of the game is to guess which artist sings a specific displayed lyric.

You have 5 seconds per lyric to guess the right artist and get a point.

You can score from a minimum of 0 points to a maximum of 5 points.

You can see your personal best score and your last 3 games scores and compare yourself watching the leaderboard of the best scores for all the users.

## Before starting

Due to CORS issues, before starting the application both locally and in "live demo" mode, you have to navigate to https://cors-anywhere.herokuapp.com/corsdemo and press on **Request temporary access to the demo server** button to grant access to ensure the functionality of the proxy service

## Live demo

https://whosings.vercel.app

## Tech Stack

**Language and framework:** TypeScript (v4.4.2), React (v17.0.2)

**Routing:** react-router-dom (v6)

**UI framework:** Chakra UI (v1.8.6), framer-motion (v6)

**State managment:** zustand (v3.7.1)

**HTTP client:** axios (v0.26.1)

**Utility libraries:** localforage (v1.10.0), use-timer (v2.0.1), loadash (v4.2.0)

## Folder structure

    ├── assets                   # theme files, colors configuration
    ├── common                   # shared components between views
    ├── constants                # constants variables
    ├── store                    # state managment files
    ├── views                    # application views and routes
    │   ├── Leaderboard          # users score ranking
    │   ├── Quiz                 # quiz game
    │   └── User                 # user details (played games, best score, last 3 scores)
    └── services                 # API services and HTTP client instance

## Run Locally

Clone the project

```bash
git clone https://github.com/alessandropisu/musixmatch-test
```

Go to the project directory

```bash
cd musixmatch-test
```

Create a `.env` file and add your [Musixmatch API key](https://developer.musixmatch.com/) to `REACT_APP_API_KEY` value

```bash
REACT_APP_API_KEY={INSERT HERE YOUR API KEY}
```

Install dependencies

```bash
yarn install
```

Start the server

```bash
yarn start
```

## Techical choices

- Application was bootstrapped with Create React App with TypeScript template.
- I decided to use zustand for state managment to save only some fields with the need to share between the views, like current user logged and users score. I preferred zustand over redux because the complexity of the application doesn't justify the usage of a complex state manager with most of features unused. I also preferred it over Context API for less boilerplate configuration (just a store creation is required with zustand) and better TypeScript integration.
- I chose Chakra UI to style the app because all components have a modern style by default inspired by tailwind, it does not need a complex configuration to be used and the CSS properties shortcut (like mx = marginLeft + marginRight) literally save your life.
- To persist data I used localStorage with the help of localforage library to easily save non-string structures.
- The choosen API for the quiz game are [chart.tracks.get](https://developer.musixmatch.com/documentation/api-reference/track-chart-get) to retrieve top editorial chart tracks and obtain _track_id_ and _artist_name_ for the game. Every _track_id_ is used later to call [track.snippet.get](https://developer.musixmatch.com/documentation/api-reference/track-snippet-get) and retrieve a snippet of each track.
- I used axios for API fetching to be able to append automatically Musixmatch base URL and API key to all HTTP requests.

## Color Reference

| Color             | Hex                                                              |
| ----------------- | ---------------------------------------------------------------- |
| Musixmatch Orange | ![#FF6050](https://via.placeholder.com/10/FF6050?text=+) #FF6050 |
| Musixmatch Pink   | ![#FF0E83](https://via.placeholder.com/10/FF0E83?text=+) #FF0E83 |

## Resources link

- [zustand](https://github.com/pmndrs/zustand)
- [localforage](https://github.com/localForage/localForage)
- [Chakra UI](https://github.com/chakra-ui/chakra-ui)
- [use-timer](https://github.com/thibaultboursier/use-timer)
