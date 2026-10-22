way we open terminal,
1 Navigate to finder/file explore - Mac: right Click Folder (class15) open the terminal
2 'pwd'
3 'npm init -y'
4 'npm install express nunjucks'

ways in which we ran out server.js file
1 node server.js -> this requires a restart everytime we make changes to the file
2 node -- watch server.js -> this watches our server.js file for changes automatically restart the server
3 node --watch --watch-path=views server.js this watches both our server.js and all of our .njk file in the folder

if error- the file is not made and not in the right folder
