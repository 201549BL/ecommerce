import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", disabled: false },
  { id: 2, name: "Kenton Towne", disabled: false },
  { id: 3, name: "Therese Wunsch", disabled: false },
  { id: 4, name: "Benedict Kessler", disabled: true },
  { id: 5, name: "Katelyn Rohan", disabled: false },
];

const ListBox = ({ field, values = people }) => {
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleChange = (person) => {
    setSelectedValue(person);
    field.onChange(person);
  };

  return (
    <Listbox value={field.value} onChange={(person) => handleChange(person)}>
      <Listbox.Button>{selectedValue.name}</Listbox.Button>
      <Listbox.Options>
        {values.map((value) => (
          <Listbox.Option
            key={value.id}
            value={value}
            disabled={value.disabled}
          >
            {value.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ListBox;
