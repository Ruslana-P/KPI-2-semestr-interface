import { useState } from "react";
import Header from "../../components/Header/Header";
import { Container, ContainerMask, UserInterfaceCnt } from "./styled";
import SideMenu from "../../components/SideBarMenu/SideBarMenu";
import NewApplicationForm from "../../components/NewApplicationForm/NewApplicationForm";
import Applications from "../../components/Applications/Applications";
import NotFound from "../../components/NotFound/NotFound";

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState(3);

  return (
    <Container>
      <ContainerMask data-testid="djkdkjh" />
      <Header />
      <UserInterfaceCnt data-testid="kjfkdjf">
        <SideMenu setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === 1 && <NotFound />}
        {activeTab === 2 && <Applications />}
        {activeTab === 3 && <NewApplicationForm />}
        {activeTab === 4 && <NotFound />}
      </UserInterfaceCnt>
    </Container>
  );
};

export default UserAccount;
