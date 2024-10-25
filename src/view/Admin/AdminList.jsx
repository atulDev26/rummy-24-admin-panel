import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import Heading from "../../Components/Heading/Heading";
import {
  IconSquareChevronDownFilled,
  IconSquareChevronUpFilled,
} from "@tabler/icons-react";
import {
  loadingHide,
  loadingShow,
} from "../../utils/GlobalLoding/gloabalLoading";
import { urlApi } from "../../api/urlApi";
import { getApi } from "../../api/callApi";
import { toast } from "sonner";
import { getRole } from "../../utils/GlobalFunction/globalFunction";

const AdminList = () => {
  const [toggle, setToggle] = useState([]);
  const [changeBtn, setChangeBtn] = useState(false);
  const [agentList, setAgentList] = useState(null);

  useEffect(() => {
    getAgentList();
  }, []);

  const handleClickForAdminDetails = (index) => {
    setToggle((prevState) => {
      setChangeBtn(!changeBtn);
      const newToggleState = [...prevState];
      newToggleState[index] = !newToggleState[index];
      return newToggleState;
    });
  };

  async function getAgentList() {
    loadingShow();
    let resp = await getApi(urlApi.getAgentList);
    console.log("getAgentList",resp);
    loadingHide();
    if (resp.responseCode === 200) {
      setAgentList(resp.data);
    } else {
      toast.error(resp.message);
    }
  }

  return (
    <Layout>
      <div className="p-4 max-w-full bg-slate-100 dark:bg-[#1F2937] rounded-lg shadow-md">
        <Heading title="Admin Control And Details" />
        <div className="grid gap-4 mt-2 max-w-full grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
          {agentList?.map((agent, index) => {
            return (
              <div
                key={index}
                className="bg-slate-300 dark:bg-slate-900 p-4 rounded-md flex flex-col justify-between"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; 
                        currentTarget.src=process.env.PUBLIC_URL +
                        "/Assets/Images/user-profile-icon.webp";
                      }}
                      src={agent?.image}
                      alt="Admin Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p className="text-sm md:text-base">{agent?.name} {getRole(agent)} {agent?.agent_id}</p>
                  </div>
                  {toggle[index] ? (
                    <IconSquareChevronUpFilled
                      size={28}
                      color="green"
                      cursor={"pointer"}
                      onClick={() => handleClickForAdminDetails(index)}
                    />
                  ) : (
                    <IconSquareChevronDownFilled
                      size={28}
                      color="green"
                      cursor={"pointer"}
                      onClick={() => handleClickForAdminDetails(index)}
                    />
                  )}
                </div>
                <div className="flex flex-wrap xs:flex-col justify-end gap-2 mt-2">
                  {[2, 4, 2, 4, 1, 2, 5, 2]?.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className="px-2 py-1 bg-slate-400 dark:bg-slate-700 rounded text-xs md:text-sm"
                      >
                        Button
                      </button>
                    );
                  })}
                </div>
                {toggle[index] && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
                    <div className="flex lg:border-r-2 mr-3">
                      <div className="flex-1 p-4">
                        <p className="p-2">Status:</p>
                        <p className="p-2">Ph.No.:</p>
                        <p className="p-2">Email:</p>
                        <p className="p-2">Joining Date:</p>
                        <p className="p-2">Last Login:</p>
                        <p className="p-2">Screen Time:</p>
                        <p className="p-2"> Working Hours/Day:</p>
                        <p className="p-2">Assigned Working Hours:</p>
                      </div>
                      <div className="flex-1 p-4">
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                      </div>
                    </div>
                    <div className="flex lg:border-r-2 mr-3">
                      <div className="flex-1 p-4">
                        <p className="p-2">CL:</p>
                        <p className="p-2">ML:</p>
                        <p className="p-2">Unpaid Leave:</p>
                        <p className="p-2">Paid Leave:</p>
                        <p className="p-2">Monthly Leaves:</p>
                        <p className="p-2">Over Time:</p>
                        <p className="p-2">Special OT:</p>
                        <p className="p-2">Very Special OT:</p>
                      </div>
                      <div className="flex-1 p-4">
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                      </div>
                    </div>
                    <div className="flex mr-3">
                      <div className="flex-1 p-4">
                        <p className="p-2">Logout Count:</p>
                        <p className="p-2">Win Wallet:</p>
                        <p className="p-2">Game Wallet:</p>
                        <p className="p-2"> Wrong Update:</p>
                        <p className="p-2"> Total Cleared Games:</p>
                        <p className="p-2">Successful Games:</p>
                        <p className="p-2"> Cancel Games:</p>
                        <p className="p-2">Risk Games:</p>
                      </div>
                      <div className="flex-1 p-4">
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                        <p className="p-2">{""}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AdminList;
