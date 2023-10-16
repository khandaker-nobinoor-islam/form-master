import { useEffect, useRef } from "react";



const RefForm = () => {

    const nameRef = useRef();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect( () =>{
        nameRef.current.focus();
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        // console.log(e.target.email.value);
        // console.log(e.target.phone.value);
        // console.log('form submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type='text' name="name"></input>
                <br />
                <input ref={emailRef} defaultValue={'dipu@gmail.com'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="phone" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;