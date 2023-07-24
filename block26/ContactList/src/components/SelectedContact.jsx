import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  console.log(contact);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">{/*contact.name*/}</th>
        </tr>
      </thead>
      <tbody>{/*TODO */}</tbody>
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Back
      </button>
    </table>
  );
};
export default SelectedContact;
