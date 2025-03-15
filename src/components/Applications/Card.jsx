import { Card, ArrowsWrapper, StatusWrapper } from "./styled";
import { useState } from "react";
import arrowUp from "../../images/up-arrow.svg";
import arrowDown from "../../images/down-arrow.svg";
import file from "../../images/file.svg";

const CardComponent = ({ name, grade, field }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      {!isOpen ? (
        <>
          <p>
            <span>Заявка для:</span> <span class="bold">{name}</span>
            {"   "}
            <span>на вступ до</span> <span class="bold">{grade} класу</span>
          </p>
          <p>
            <span>На напрямок</span> <span class="bold">{field}</span>
          </p>
        </>
      ) : (
        <>
          <StatusWrapper>
            Статус: <span class="bold">Чекає на розгляд</span>
          </StatusWrapper>
          <p class="application-title">Інформація про опікуна</p>
          <p>Петренко Марина Анатолівна</p>
          <p class="application-title m-t">Інформація про дитину</p>
          {name}
          <p class="application-title m-t">Інформація про навчання</p>
          <p> Клас {grade}</p>
          <p> Напрямок {field}</p>
          <p class="application-title m-t">Документи</p>
          <ul>
            <li>
              <img class="file-icon" src={file} />
              <span>Свідоцтво про народження дитини</span>
            </li>
            <li>
              <img class="file-icon" src={file} />
              <span>Табелі з попердніх років навчання</span>
            </li>
            <li>
              <img class="file-icon" src={file} />
              <span>Медична довідка д-123</span>
            </li>
          </ul>
          <p class="application-title m-t">Додаткова інформація</p>
          <p>Має алергію на горіхи</p>
        </>
      )}

      {isOpen ? (
        <ArrowsWrapper onClick={() => setIsOpen(false)}>
          <img src={arrowUp} />
          <img src={arrowUp} />
        </ArrowsWrapper>
      ) : (
        <ArrowsWrapper onClick={() => setIsOpen(true)}>
          <img src={arrowDown} />
          <img src={arrowDown} />
        </ArrowsWrapper>
      )}
    </Card>
  );
};

export default CardComponent;
