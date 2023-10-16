import useInputState from "../../hooks/use.InputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputState('dipu hooks');
    const emailState = useInputState('kh@gmail.go')

    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type='text' name="name"></input> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;