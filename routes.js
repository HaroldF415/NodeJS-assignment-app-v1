const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;

  if( url === '/'){

    res.write('<html>');
    res.write('<head> <title> Welcome! </title> </head>');
    res.write('<body> <h1>Welcome to The THUNDERDOME!</h1>');
    res.write('<form action="/create-user" method="POST"> <input type="text" name="username"> <button type="submit">Add User</button> </form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();   
  
  }else if( url === '/users' ){

    res.write('<html>');
    res.write('<head> <title> User List </title> </head>');
    res.write('<body> <ul><li>Harold</li><li>Nolan</li><li>Amaranta</li><li>Julian</li><li>Kimberly</li><li>Julia</li><li>Adrienne</li><li>Veronica</li></ul> </body>');
    res.write('</html>');
    return res.end();   
  
  }else if( url === '/create-user' && method === 'POST'){

    const body = [];
    
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(parseBody);

      const username = parseBody.split('=')[1];
      console.log('USERNAME = ' + username);

      res.writeHead( 302, {Location: '/'});
      return res.end();
    });

  } // ends if statements ROUTES

};

module.exports = requestHandler;