import { useState } from "react";

export const ExampleControlled = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)
    const [usernameError, setUsernameError] = useState("")
    const [ageError, setAgeError] = useState("")
    const [emailError, setemailError] = useState("")
    const [formdata, setFormdata] = useState({})


    const handleSubmit = (e) =>{
        e.preventDefault()
       if(username.length === 0){
        setUsernameError("enter username") 
       }
        if(age.length === 0){
        setAgeError("enter age") 
       }
       if(email.length === 0){
        setemailError("enter email")
       }
       if(age.length>0 && email.length >0 & username.length >0){
        setemailError("")
        setUsernameError("")
        setAgeError("")

        setFormdata({
            username: username,
            age:age,
            email:email
        })
       }

    }

    function handleAge (e){
        const agetonum = parseInt(e.target.value)
        if(agetonum >=0 && agetonum <=100){
            setAge(e.target.value)
            setAgeError("")
        }else{
            setAgeError("enter age between  0 to 100")
        }
    }
   const handleUsername = (e) => {
    const value = e.target.value;

    for (let char of value) {
      const code = char.charCodeAt(0);

      const isUpper = code >= 65 && code <= 90;
      const isLower = code >= 97 && code <= 122;

      if (!isUpper && !isLower) {
        setUsernameError("username only contains a-z or A-Z characters only");
        return; // don't update username
      }
    }

    setUsername(value);
    setUsernameError("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Registration form</legend>
        <p>Username</p>
        <input type="text"  onChange={(e)=>handleUsername(e)} value={username}/>
        <p>{usernameError}</p>
        <p>email</p>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} />
        <p>{emailError}</p>
        <p>age</p>
        <input type="number" onChange={(e)=>handleAge(e)} value={age} />
        <p>{ageError}</p>
        <button>submit</button>
      </fieldset>
    <div>
      <p> username {formdata.username}</p>
      <p>age{formdata.age}</p>
      <p>email {formdata.email}</p>
      </div>
    </form>
  );
};
