import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const ContactList = () => {
  const num = useSelector((state) => state.num); //store의 num state
  const contactList = useSelector((state) => state.contactList); //store의 contactList state
  const [searchQuery, setSearchQuery] = useState(""); //검색어 state

  return (
    <div>
      <div>
        <SearchBox setSearchQuery={setSearchQuery} />
      </div>
      <div>
        <p>num:{num}</p>
      </div>
      <div>
        {contactList.map((item) => (
          <ContactItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
