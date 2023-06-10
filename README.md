# RESTRAND
- To run this code you have to create a folder in VS code e.g. RestRand
- Add app.js file to this foler
- Open terminal in VS Code and navigate to your folder e.g. 'cd RestRand'
- Once you are in the project folder, initialize a new Node.js project by running the following command:
    npm init
- After running npm init, a package.json file will be created in your project folder, which will hold project configuration details and dependencies.
- Now, you can start installing any required Node.js packages for your project. For example, to install the Express.js framework, you can run the following command:
- nnpm install express body-parser
- This will download and install the Express.js package, adding it to your project's node_modules folder.
- To run your Node.js application from VS Code, open the integrated terminal (if not already open) and use the following command:
    node app.js
- After running above command in terminal the server will start listening on Port 3000
- There are two APIs that can be called
    a.  Invoke random number generator method by opening below URL on Chrome or IE. The output will always be a decimal number between 0 and 1
        localhost:3000/random
    b.  Random number within a specified range can be ouput by using POST method. The procedure is as follows:
            1) The server must be listening on configured port
            2) Open power shell and first define header
                $headers = @{
    "Content-Type" = "application/json"
}
            3) Invoke URI by using below command: 
                Invoke-WebRequest -Uri "your-url" -Method POST -Headers $headers -Body '{"min": 1, "max": 10}'
                Example: Invoke-WebRequest -Uri "http://localhost:3000/api/range" -Method POST -Headers $headers -Body '{"min": 1, "max": 10}'
