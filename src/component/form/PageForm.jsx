import React, { useState } from "react";
import style from "./PageForm.module.scss";
import Pane from "../../UI/pane/Pane";
import Cards from "../../UI/card/Cards";
import { Tabs } from "antd";
import StudentForm from "./student_form/StudentForm";
import ProfessionalForm from "./professional_form/ProfessionalForm";
const PageForm = () => {
  const [selectedKey, setSelectedKey] = useState(1);
  const onChange = (value) => {
    console.log(value);
    setSelectedKey(value);
  };

  const items = [
    {
      key: "1",
      label: `Student`,
    },

    {
      key: "2",
      label: `Professional`,
    },
    // {
    //   key: "3",
    //   label: `Others`,
    // },
  ];
  return (
    <Pane className={style.form_page_container}>
      <Cards>
        <div className={style.form_page__tab_container}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div className={style.form_page__form_container}>
          {selectedKey == 1 ? <StudentForm /> : <ProfessionalForm />}
        </div>
      </Cards>
    </Pane>
  );
};

export default PageForm;
