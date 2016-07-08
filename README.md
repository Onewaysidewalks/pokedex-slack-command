# pokedex-slack-command
/pokedex in slack for pokemon information!

This is the server implementation for the /pokedex command in slack! It is built using nodejs.

## To Build and run locally
1. Install node and heroku toolbelt
2. Clone the repo
3. (requires the heroku toolbelt)
4. npm install
5. node server.js
6. To test, run this curl:  "curl -v -X POST --data "text=NORMAL+versus+GHOST&response_url=some+response+url" localhost:8080/pokedex/slack"

## To deploy
1. Clone Repo
2. heroku create
3. git push heroku master
4. heroku ps:scale web=1  #ensures that there is one instance running for this app. run it with web=0 to tear down
