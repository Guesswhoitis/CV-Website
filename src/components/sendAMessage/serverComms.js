

export function postToDb(name,email,message) {

    var dataBaseIp ="http://127.0.0.1";

    var dataBasePort="4000";

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