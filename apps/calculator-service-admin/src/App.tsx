import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OperationList } from "./operation/OperationList";
import { OperationCreate } from "./operation/OperationCreate";
import { OperationEdit } from "./operation/OperationEdit";
import { OperationShow } from "./operation/OperationShow";
import { ResultList } from "./result/ResultList";
import { ResultCreate } from "./result/ResultCreate";
import { ResultEdit } from "./result/ResultEdit";
import { ResultShow } from "./result/ResultShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CalculatorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Operation"
          list={OperationList}
          edit={OperationEdit}
          create={OperationCreate}
          show={OperationShow}
        />
        <Resource
          name="Result"
          list={ResultList}
          edit={ResultEdit}
          create={ResultCreate}
          show={ResultShow}
        />
      </Admin>
    </div>
  );
};

export default App;
