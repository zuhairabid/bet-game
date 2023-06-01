import React from "react";

function Notice() {
  return (
    <div>
      <div className="bg-fuchsia-800 py-2">
        <h1 className="text-white text-3xl text-center">Add Notice</h1>
      </div>
      <div className="px-5 py-10">
        <p className="text-lg text-gray-500">notice:</p>
        <textarea
          className="w-full h-40 border-2 border-neutral-300 placeholder:text-black"
          placeholder="BPLT20.live এ আপনাকে স্বাগতম...উইড্রো লিমিট ১০০০ টু ২৫০০০ টাকা ( ২৪ ঘন্টা উইড্রো অন )...আপনাদের ভালোবাসা এবং সহযোগিতায় আমরা এগিয়ে যাবো বহুদূর...সবসময় আমাদের সাথে থাকুন...সকলকে ধন্যবাদ......"
        ></textarea>
        <button className="bg-green-500 w-full p-3 rounded-lg text-white font-bold">
          Update
        </button>
      </div>
    </div>
  );
}

export default Notice;
