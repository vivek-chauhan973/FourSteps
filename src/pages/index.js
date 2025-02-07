import Home from "@/Component/Home";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Digital Consulting Agency in India | Four Steps Digital Consulting
        </title>

        <meta
          name="description"
          content="Transform Your Business Into A Digitally-Driven Organization .We are one of the best digital consulting agency in India."
        />
        <meta property="og:url" content="https://4stepsdigital.com/" />
        <meta
          property="og:title"
          content="Digital Consulting Agency in India | Four Steps Digital Consulting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default Index;
