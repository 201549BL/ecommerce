import { Combobox } from "@headlessui/react";
import React, { useState } from "react";

const ComboBox = ({ values, value, onChange, name, ...rest }) => {
  const [selected, setSelected] = useState(undefined);
  const [query, setQuery] = useState("");
  // const [isFocused, setIsFocused] = useState(false);

  const handleChange = (v) => {
    setSelected(v);
    onChange(v);
  };

  const filteredValues =
    query === ""
      ? values
      : values.filter((v) =>
          v.name.toLocaleLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox
      value={selected}
      onChange={handleChange}
      nullable
      as="div"
      className="mt-4 flex w-full flex-col"
    >
      <Combobox.Button
        as="div"
        className={`group relative flex w-full rounded bg-white`}
      >
        <Combobox.Input
          onChange={(e) => setQuery(e.target.value)}
          displayValue={(value) => (value ? value.name : null)}
          autoComplete="off"
          className="peer w-full rounded p-2 placeholder:invisible"
          placeholder={name}
          // onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
        />

        <Combobox.Label className="absolute left-0 -top-6 self-center px-2 transition-all first-letter:capitalize peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
          {name}
        </Combobox.Label>

        <div className="self-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Combobox.Button>

      <Combobox.Options as="ul" className="mt-2 rounded bg-slate-100 p-2">
        {filteredValues.map((p) => (
          <Combobox.Option
            className={`list-none `}
            key={p.id}
            value={p}
            disabled={p.unavailable}
          >
            {({ selected, active }) => (
              <div
                className={` flex ${active && "bg-purple-600 text-white"}
                } rounded ${p.unavailable && "bg-gray-400 text-white"}`}
              >
                <div className={` p-2 `}>{p.name}</div>
                {selected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 self-center leading-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
                {p.unavailable && (
                  <div className="self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default ComboBox;
