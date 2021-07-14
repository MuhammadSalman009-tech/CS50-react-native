import React from "react";
import { SectionList, Text } from "react-native";
import Row from "./Row";
function ContactsList(props) {
  const renderItem = ({ item }) => <Row {...item} />;
  const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;
  const contactsbyLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});
  const sections = Object.keys(contactsbyLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsbyLetter[letter],
    }));
  return (
    <SectionList
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
}

export default ContactsList;
