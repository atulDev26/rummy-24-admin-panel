import React, { useState } from "react";
import Heading from "../../Components/Heading/Heading";
import SearchField from "../../Components/SearchField/SearchField";
import Layout from "../../Layout/Layout";
import DropDown from "../../Components/DropDown/DropDown";
import ResetFilters from "../../Components/DropDown/ResetFilters";

const UserDetails = () => {
  const [status, setStatus] = useState(null);
  const [resetFilter, setResetFilter] = useState(false);
  const [search, setSearch] = useState(null);
  const handleSearchSubmit = (searchTerm) => {
    setSearch(searchTerm);
  };

  function statusDropDown(event) {
    setStatus(event);
    setResetFilter(false);
  }

  function resetFilters() {
    setStatus(null);
    setSearch(null);
  }
  return (
    <Layout>
      <div className="p-4 max-w-full bg-slate-100 dark:bg-[#1F2937] rounded-lg shadow-md">
        <Heading title="User List" />
        <div className="grid gap-4 mt-2 max-w-fit grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center">
          <SearchField
            placeholder="Name / Mobile / ID"
            inputId="search"
            onSubmit={handleSearchSubmit}
          />
          <div className="flex items-center gap-3">
            <DropDown
              onclick={(e) => {
                statusDropDown(e);
              }}
              options={["All", "Active", "Inactive", "Time ASC", "Time DESC"]}
              defaultOption={"Status"}
              reset={resetFilter}
            />
            <ResetFilters onclick={() => resetFilters()} />
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
