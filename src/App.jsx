import './App.css'
import Granpa from './components/Grandpa/Granpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  
  //  const handleSignUpSubmit = data =>{
  //       console.log('Sign up data', data);      
  //   }

  //   const handleUpdateProfile = data =>{
  //     console.log('update profile', data); 
  //   }

  return (
    <>
      <h1>Form Master</h1>

      <Granpa></Granpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
        formTitle={'Sign Up'} 
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please sign up right now</p>
          </div>
      </ReusableForm>
      <ReusableForm 
        formTitle={'profile Update'} 
        handleSubmit={handleUpdateProfile} 
        submitBtnText='Update'>
          <div>
            <h2>Update profiles</h2>
            <p>always keep your profile updated</p>
          </div>
      </ReusableForm> */}
    </>
  )
}

export default App
