import React, { useState } from "react";
import {InputWrapper, SectionWrapper, StyledForm, StyledButton} from "./styled"

const NewApplicationForm = () => {
  const [formData, setFormData] = useState({
    guardianLastName: "",
    guardianFirstName: "",
    guardianMiddleName: "",
    childLastName: "",
    childFirstName: "",
    childMiddleName: "",
    selectedClass: "",
    selectedDirection: "",
    additionalInfo: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit} className="p-5 w-full max-w-2xl">
      <SectionWrapper>
        <h2 className="full">Інформація про опікуна</h2>
        <InputWrapper 
          className="half"
        >
          <label>Прізвище</label>
          <input
            name="guardianLastName" 
            value={formData.guardianLastName} 
            onChange={handleChange} />
        </InputWrapper>
        <InputWrapper
          className="half"
        >
          <label>Ім'я</label>
          <input 
            name="guardianFirstName" 
            value={formData.guardianFirstName} 
            onChange={handleChange} 
             />
        </InputWrapper>
        <InputWrapper
          className="full"
        >
          <label>По батькові</label>
          <input name="guardianMiddleName" 
          value={formData.guardianMiddleName} 
          onChange={handleChange} 
           />
         </InputWrapper>
      </SectionWrapper>
     
      <SectionWrapper>
      <h2 className="full">Інформація про дитину</h2>
        <InputWrapper
          className="half"
        >
          <label>Прізвище </label>
          <input 
            name="childLastName" 
            value={formData.childLastName} 
            onChange={handleChange} 
          />
        </InputWrapper>
        <InputWrapper
          className="half"
        >
          <label>Ім'я </label>
          <input 
            name="childFirstName"
            value={formData.childFirstName} onChange={handleChange}  />
        </InputWrapper>
        <InputWrapper
          className="full"
        >
          <label>По батькові </label>
          <input name="childMiddleName" value={formData.childMiddleName} onChange={handleChange} className="border p-2 w-full" />
        </InputWrapper>
      </SectionWrapper>
      
      <SectionWrapper>
      <h2 className="full">Інформація про  навчання</h2>
      <InputWrapper
        className="full"
      >
        <label>Оберіть клас</label>
        <select name="selectedClass" value={formData.selectedClass} onChange={handleChange} className="border p-2 w-full">
          <option value="">Оберіть клас</option>
          <option value="1">1 клас</option>
          <option value="2">2 клас</option>
        </select>
      </InputWrapper>
      
      <InputWrapper
        className="full"
      >
        <label>Оберіть напрямок навчання</label>
        <select name="selectedDirection" value={formData.selectedDirection} onChange={handleChange} className="border p-2 w-full">
          <option value="">Оберіть напрямок навчання</option>
          <option value="math">Математика</option>
          <option value="science">Наука</option>
        </select>
      </InputWrapper>
      </SectionWrapper>
     
      <SectionWrapper>
      <h2 className="full">Додаткова інформація</h2>
      <InputWrapper
        className="full"
      >
        <label>Підгрузіть усі необхідні документи</label>
        <input type="file" name="documents" onChange={handleChange} className="border p-2 w-full" multiple />
      </InputWrapper>
      
      <InputWrapper
        className="full"
      >
        <label>Додаткова інформація</label>
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="border p-2 w-full"></textarea>
      </InputWrapper>
      </SectionWrapper>
    
      <StyledButton type="submit" className="bg-green-600 text-white p-2 mt-4">Надіслати заявку</StyledButton>
    </StyledForm>
  );
};

export default NewApplicationForm;