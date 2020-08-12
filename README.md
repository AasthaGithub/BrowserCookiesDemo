# BrowserCookiesDemo
Demo of storing user cookies in Browser's Local Storage with an expiry time.

### Aim:  
LOGIN FORM VALIDATION WITH HTML, CSS, JAVASCRIPT.
Once the user submits the form, write Javascript code which will perform the following tasks: 
1.	Check if the username & password supplied is valid or invalid a. For ex: check if the username is root and password is 123 
2.	If the user is invalid then show an error message to the user: 
3.	In case of a valid user, transfer the control to a welcome HTML page which will display a message “Welcome Back, <Logged In Username>” 
4.	If the Remember Me option was selected in case of a valid user, then the username & password should be encrypted and stored in a cookie on the client machine for 24 hours 
5.	Now for the next 24 hours if Login page is opened, you need to check if the required cookie is present, decrypt the username & password and if the data is valid, automatically transfer the control to the welcome page. 

### Approach: 
1.	For credential checking, Validate function in login.js is used
2.	For error in credentials, alert is used
3.	Redirection to Welcome Page happens in Two cases: On Login Button Press or on loading Login.html which has cookies saved in Local Storage
4.	Set cookies with expiry function in login.js sets cookies only if remember me check box is checked
5.	Set cookie function takes argument ttl(Time Limit in days), passing 1 makes the cookie expiry time such that on getkeywithExpiry function is unable to retrieve expired cookies.

```
Code File Structure:
It’s divided into 4 files:
1.	Login.html
2.	Login.css
3.	Login.js
4.	Welcome.html
```

