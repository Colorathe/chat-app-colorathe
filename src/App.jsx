import Navbar from "./components/Navbar";

import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "./components/Footer";

const style = {
  container: `max-w-[728px] mx-auto text-center`,
  section: `flex flex-col h-[82vh] bg-gray-100 mt-10 shadow-xl border relative sm:h-[85vh]`,
};

function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <>
      <div className={style.container}>
        <section className={style.section}>
          <Navbar />
          {user ? <Chat /> : null}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
