import { useState } from "react";
import Header from "../../components/Header/Header";
import { Container, ContainerMask, UserInterfaceCnt } from "./styled";
import SideMenu from "../../components/SideBarMenu/SideBarMenu";
import NewApplicationForm from "../../components/NewApplicationForm/NewApplicationForm";
import Applications from "../../components/Applications/Applications";

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Container>
      <ContainerMask data-testid="djkdkjh" />
      <Header />
      <UserInterfaceCnt data-testid="kjfkdjf">
        <SideMenu setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === 2 && <Applications />}
        {activeTab === 3 && <NewApplicationForm />}
      </UserInterfaceCnt>
    </Container>
  );
};

export default UserAccount;
