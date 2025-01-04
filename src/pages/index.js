import Home from "@/Component/Home";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>4steps digital consulting</title>
        <meta
          name="description"
          content="Welcome to the home page of my Next.js application."
        />
      </Head>
      <Home />
      {/* <AboutSection /> */}
    </div>
  );
};

export default Index;
