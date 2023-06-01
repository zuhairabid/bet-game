import React from "react";
import "./settings.css";

function Settings() {
  return (
    <div className="text-white">
      <table className="w-full ">
        <thead className="text-white bg-yellow-950">
          <tr>
            <td>#</td>
            <td className="w-">Setting Name</td>
            <td>Min</td>
            <td>Max</td>
            <td>Time/Hours</td>
            <td>On/Off</td>
            <td classname="w-50">Save</td>
          </tr>
        </thead>
        <tbody className="text-black [&>tr>td]:py-3">
          <tr>
            <td>1</td>
            <td>deposit</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr className=" bg-neutral-100">
            <td>2</td>
            <td>withdraw</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>club-wthdraw</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>bet</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>user-sponsor-rate</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>club-commision-rate</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>min-balance-to-keep-in-account</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>min-balance-to-keep-in-club</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>user-to-super-only-balance-transfer</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>super-to-user-balance-transfer</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>user-to-user-balance-transfer</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>cashout</td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />{" "}
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <input
                type="number"
                className="bg-gray-300 h-10 w-20 p-1"
                name=""
                id=""
              />
            </td>
            <td>
              <div>On</div>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Settings;
