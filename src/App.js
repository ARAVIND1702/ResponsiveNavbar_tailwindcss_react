import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-gradient-to-l h-screen relative from-[#000d09b9] to-[#005c3f65] ">
      <NavBar/>
      <p className=" text-center  relative top-[83%] text-white font-extralight">Developed By <span className="font-semibold text-green-600">Aravind RM.</span></p>
    </div>
  );
}

export default App;
