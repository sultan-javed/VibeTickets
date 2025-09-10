import Eventlist from "../components/Eventlist";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-[#fefcff] relative">
        {/* Dreamy Sky Pink Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
              radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)
            `,
          }}
        />

        {/* Page Content */}
        <div className="relative z-10">
          <Navbar />
          <Eventlist />
        </div>
      </div>
    </>
  );
};

export default Home;
