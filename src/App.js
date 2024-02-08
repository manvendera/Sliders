
import './App.css';
import Testimonials from './components/Testimonials';
import  reviews  from'./data'
function App() {
  return (
    <div className="App flex fle-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
       <div className='text-center'>
        <h1 className='text-4xl font-bold'>Randoms</h1>
        <div className='bg-violet-400 w-[10vw] mx-auto h-[4px]'></div>
        <Testimonials reviews={reviews}></Testimonials>
       </div>
    </div>
  );
}

export default App;
