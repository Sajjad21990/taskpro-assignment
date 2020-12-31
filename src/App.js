import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./config/firebase";
import TableData from "./Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let userResponse;
      let accountsResponse;
      let app_name;
      let app_title;
      let app_rating;
      let acc_number;
      let user_name;

      try {
        db.ref("/users/").on("value", (snapshot) => {
          userResponse = snapshot.val();
          db.ref("/accounts/").on("value", (snap) => {
            accountsResponse = snap.val();
            setData([]);
            for (const id in userResponse) {
              acc_number = userResponse[id].account;
              user_name = userResponse[id].name;

              for (var i in accountsResponse[acc_number].apps) {
                app_name = i;
                app_title = accountsResponse[acc_number].apps[i].title;
                app_rating = accountsResponse[acc_number].apps[i].rating || 2.5;
              }
              let finalData = {
                acc_number,
                user_name,
                app_name,
                app_title,
                app_rating,
              };

              setData((arr) => [...arr, finalData]);
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const updateRating = async (acc_number, app_name, value) => {
    try {
      await db.ref(`/accounts/${acc_number}/apps/${app_name}/`).update({
        rating: value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return data?.length ? (
    <div className="app">
      <h1>User Apps Data</h1>
      <TableData data={data} updateRating={updateRating} loading={false} />
      <p>
        <sup>*</sup>assignment for TaskPro services <br />
        By - sajjad haider sayed
      </p>
    </div>
  ) : (
    <TableData data={data} loading={true} />
  );
}

export default App;
