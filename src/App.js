
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';
import Mobile from './component/Nav/Mobile';
import Collections from './component/Collections';
import Message from './component/Message';

function App() {
  
  return (
    <div className="">
      <Mobile/>
      <Header/>
       <About/>
      <Collections/>
      <Message/>
      <Footer/> 
    </div>
  );
}

export default App;
