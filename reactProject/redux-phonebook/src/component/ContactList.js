import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const ContactList = () => {
  //store 상태 가져오기
  const { contactArray, search } = useSelector((state) => state);
  //연락처 아이템 상태관리
  const [filteredList, setFilteredList] = useState([]);

  //검색어 유무에 따라 필터링
  useEffect(() => {
    if (search !== "") {
      let filteredArray = contactArray.filter((item) =>
        item.name.includes(search)
      );
      setFilteredList(filteredArray);
    } else {
      setFilteredList(contactArray);
    }
  }, [search, contactArray]);
  return (
    <div>
      <div>
        <SearchBox setSearchQuery={setSearchQuery} />
      </div>
      <div>
        <p>연락처 갯수 : {contactArray.length}</p>
      </div>
      <div>
        {filteredList.map((item) => (
          <ContactItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
