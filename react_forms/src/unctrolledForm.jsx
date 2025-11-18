import { useRef, useState } from "react"

export const DemoUncontrolled = () =>{
    const usernameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef()
    const usernameError = useRef()
    const emailError = useRef()
    const ageError = useRef()
    const [data,setData] = useState({}) 

    const submit = (e) =>{
        e.preventDefault()
        const username = usernameRef.current.value;
        const email =  emailRef.current.value;
        const age = ageRef.current.value;

        let checkUsername = false 
        let checkEmail = false 
        let checkage = false 

        if(username.length <= 0 ){
            usernameError.current.innerText="fill username"
            usernameError.current.style.color="red"

        }else{
            if(username.length <6){
                usernameError.current.innerText="enter minimum 6 characters"
                usernameError.current.style.color="red"
                checkUsername = false
            }else{
                for(const char of username){
                    const code = char.charCodeAt(0)
                    if(!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)){
                        usernameError.current.innerText="enter A-Z or a-z characters only"
                        usernameError.current.style.color = "red"
                        checkUsername = false
                        break;
                    }else{
                        checkUsername = true
                    }
                }
            }


        }

        if(email.length <=0){
            emailError.current.innerText="fill email"
            emailError.current.style.color="red"
            checkEmail = false
        }else{
            if(email.length <= 6){
                emailError.current.innerText = "enter minimum 5 characters";
                emailError.current.style.color = "red"
                checkEmail = false
            }else{
                const check = email.split("@")
                
                if(check[check.length-1] !== "gmail.com"){
                    emailError.current.innerText = "enter correct gmail id";
                    emailError.current.style.color = "red"
                    checkEmail = false
                }else{
                    checkEmail = true
                }
            }
        }

        if(age.length <=0){
            ageError.current.innerText="fill age"
            ageError.current.style.color="red"
            checkage = false
        }else{
            if(!(Number(age) >= 0) && !(Number(age) <=100 )){
               ageError.current.innerText="enter age between 0 to 100 only"
                ageError.current.style.color="red"
                checkage = false
            }else{
                checkage = true
            }
        }
    
        if(checkEmail&&checkUsername&&checkage){
            setData({
                name: username,
                email: email,
                age:age
            })
            usernameError.current.innerText=""
            emailError.current.innerText=""
            ageError.current.innerText=""
        }


    }

    return <form onSubmit={submit}>
        <fieldset>
            <legend>Registration form </legend>
                <p>Username</p>
                <input type="text" name="username" ref={usernameRef}/>
                <p ref={usernameError}></p>
                <p>Email</p>
                <input type="email" name="email" ref={emailRef}/>
                <p ref={emailError}></p>
                <p>Age</p>
                <input type="number" name="age" ref={ageRef}/>
                <p ref={ageError}></p>
                <div>
                    <button> submit </button>
                </div>
        </fieldset>
        <div>
            <p>Name {data.name}</p>
            <p>email {data.email}</p>
            <p>age {data.age}</p>
        </div>
    </form>
}