import React from "react";
import { Controller, useForm } from "react-hook-form";

import ComboBox from "../components/form/ComboBox";
import Input from "../components/form/Input";
import { getCategories } from "./api/categories";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function AdminPage({ categories }) {
  const { control, handleSubmit } = useForm();

  return (
    <div className="mt-5 flex w-full justify-center">
      <form
        action="#"
        onSubmit={handleSubmit((values) => console.log(values))}
        className="flex w-[600px] flex-col gap-2 p-4"
      >
        <Controller
          control={control}
          name="category"
          render={({ field: { value, onChange, name } }) => {
            return (
              <ComboBox values={categories} onChange={onChange} name={name} />
            );
          }}
        ></Controller>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange, name } }) => {
            return <Input value={value} onChange={onChange} name={name} />;
          }}
        />

        <button className="mt-4 rounded bg-blue-300 px-4 py-2">Submit</button>
      </form>
    </div>
  );
}

AdminPage.auth = {
  role: "ADMIN",
  loader: <div>LOADING...</div>,
};

export default AdminPage;

export async function getServerSideProps(context) {
  const categories = await getCategories();

  return {
    props: {
      categories,
    }, // will be passed to the page component as props
  };
}
