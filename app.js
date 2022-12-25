
function validate(){

  const nameRegex  = /^[A-Z]{1}[A-Za-z]{5,15}$/
  const name = document.getElementById('name').value;
  if(!nameRegex .test(name)) alert('name is not okay!');

  const emailRegex  = /^[\w-\.]+@([\w-]+\.)+[com-net]{2,4}$/
  const email = document.getElementById('email').value;
  if(!emailRegex .test(email)) alert('email is wrong!')

  const messageRegex = /^[A-Z0-9a-z]{15,40}$/
  const message = document.getElementById('message').value;
  if(!messageRegex.test(message)) alert('message is wrong!')

}
