//Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "Ahamad123@gmail.com";
let stored_password = "Ahamad123";

let entered_username = "Ahamad123@gmail.com";
let entered_password = "Ahamad123";

if(stored_username == entered_username)
{
  if(stored_password == entered_password)
  {
    console.log("login successfully");
  }
  else
  {
    console.log("Wrong password");
  }
}
else
 {
    console.log("Invalid Credentials");
 }



