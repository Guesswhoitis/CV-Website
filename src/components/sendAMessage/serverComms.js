

class ServerComms{

    constructor() {
        var dataBaseIp = "";
        var dataBasePort=""
    }

    postToDb(name,email,message) {

        var toPost = {
            name:name,
            email:email,
            message:message
        }

      window.fetch(dataBaseIp+":"+dataBasePort+"/postMessage",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(toPost)
      })
    }
    


    
}