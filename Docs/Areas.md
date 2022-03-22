# AREAs list and how to add yours
## AREAs

Area means Action & REAction
You can parameter them to do what you want.
>X of them are already implemented
You can see them using "http://localhost:8080/about.json"

* Covid / Gmail: sends a mail via gmail containing last covid cases.
* Covid / Sendgrid: sends a mail via sendgrid containing last covid cases.
* Currency / Gmail: sends a mail of the converted currency via gmail.
* Currency / Sendgrid: sends a mail of the converted currency via sendgrid.
* Github / Gmail: sends a mail with the number of repos in account via gmail.
* Github / Sendgrid: sends a mail with the number of repos in account via sendgrid.
* News / Gmail: sends the news via gmail.
* News / Sendgrid: sends the news via sendgrid.
* Spotify / Gmail: sends spotify artist's follows via gmail.
* Spotify / Sendgrid: sends spotify artist's follows via sendgrid.
* Timer / Gmail: sends a timedate via gmail.
* Timer / Sendgrid: sends timedate via sendgrid.
* Weather / Gmail: sends a city's weather via gmail.
* Weather / Sendgrid: sends a city's weather via sendgrid.
* Youtube / Gmail: sends a mail with yt video name via gmail.
* Youtube / Sendgrid: sends a mail with yt video name via sendgrid.
* ² / Spotify : gives you a playlist with the name of the action and its infos as a description.
    * ² : every current APIs

## Implementing Areas

To add your own areas, before make sure to have an oauth connection if your API needs it.You can add your own oauth handling by creating a file in [App_Server/src/controller/authenticate](../App_Server/src/controller/authenticate) and [App_Server/index.js](../App_Server/index.js)

Then you can add your AREAs by creating your js file in  [App_Server/src/actions/](../App_Server/src/actions/) for actions and [App_Server/src/reaction/](App_Server/src/reactions/) for reactions

Applications informations secret should be kept in a .env file.

To let the user to parameter your areas, edit the **_file_** located in [App_Server/index.js](../App_Server/index.js) and add your area file(s) in [App_Server/src/components/area](../App_Server/src/area).