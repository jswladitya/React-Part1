import './App.css'
import Card from './components/Card'

function App() {

  // we can pass obj and array in props provided if we pass in form of variable ie {}
  // let myObj = {
  //   usermame: "aditya",
  //   age:21
  // }

  // let myArr= [1,2,3]

  return (
    <>
    <h1 className='bg-green-500 text-black rounded-xl p-4 mb-4'>Tailwind Test</h1>
    
    {/* jo bhi yaha card me values pass kardoge wahi waha props me show ho jayegi*/}
    <Card username = "aditya" btnText = "Click me"/>
    <Card username="jaiswal" btnText = "Visit me" />
    {/* since har card apne app me alag information lega toh unka intazam hota he props se */}
    {/* yaha props daalne se changes show nahi honge, we have to handle that props in the the Card Component */}
    </>
  )
}

export default App