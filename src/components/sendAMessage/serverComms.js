

/**
 * Creates object to post
 * Creates http POST request to RESTApi
 * @param {String} name 
 * @param {String} email 
 * @param {String} message 
 */
export async function postToDb(name,email,message) {
    var dataBaseIp ="http://localHost";

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