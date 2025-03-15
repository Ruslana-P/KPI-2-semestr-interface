import { StyledListItem } from "./styled"

const SideMenu = ({ setActiveTab, activeTab }) => {

  console.log(" activeTab", activeTab)
    return (
      <div >
        <ul>
          <StyledListItem selected={activeTab === 1} onClick={() => setActiveTab(1)}>
            Дані користувача
          </StyledListItem>
          <StyledListItem  selected={activeTab === 2} onClick={() => setActiveTab(2)}>
            Усі заявки
          </StyledListItem>
          <StyledListItem selected={activeTab === 3}  onClick={() => setActiveTab(3)}>
            Нова заявка
          </StyledListItem>
          <StyledListItem selected={activeTab === 4} onClick={() => setActiveTab(4)}>
            Налаштування
          </StyledListItem>
        </ul>
      </div>
    );
  };

  export default SideMenu;