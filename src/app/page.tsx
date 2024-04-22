import Area from "@/components/Area";
import Form from "@/components/Form";
import Header from "@/components/Header";
import History from "@/components/History";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Area className="mx-auto">
        <Main>
          <Form />
          <History />
        </Main>
      </Area>
    </>
  );
}