import QrCodeCard from "../components/QrCodeCard";

const Home = () => {
  return (
    <>
      <main className="grid h-screen w-screen place-items-center bg-white bg-cover bg-[url('https://www.freepik.com/premium-vector/geometric-vector-background-banner-fantasy-theme-qr-code_25561503.htm#query=qr%20code%20background&position=19&from_view=keyword&track=ais')] ">
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        <QrCodeCard />
      </main>
    </>
  );
};

export default Home;
