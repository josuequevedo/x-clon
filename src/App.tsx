import { Layout } from "./layout/Layout";
import { Routes } from "./routes/routes";

function App(): JSX.Element {
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
