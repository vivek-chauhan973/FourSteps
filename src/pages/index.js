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
        <meta name="viewport" content="width=device-width, initia l-scale=1" />
      </Head>

      <Home />
    </div>
  );
};

export default Index;
