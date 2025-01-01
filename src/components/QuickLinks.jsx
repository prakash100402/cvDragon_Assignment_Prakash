const QuickLinks = () => {
  return (
    <div>
      <h1 className="lo:text-2xl dark:text-slate-300 cursor-default p-2 bg-gradient-to-b from-slate-300 dark:from-slate-700 pt-5">Quick Links</h1>
      <div className=" ">
        <ul className="grid lo:grid-cols-6 p-3 m-2 text-center grid-cols-2 gap-1">
          <li className="lo:text-xl dark:text-slate-300 cursor-pointer border rounded-md p-2 m-2 border-slate-700 dark:border-slate-300">Poll</li>
          <li className="lo:text-xl dark:text-slate-300 cursor-pointer border rounded-md p-2 m-2 border-slate-700 dark:border-slate-300">Knowledge</li>
          <li className="lo:text-xl dark:text-slate-300 cursor-pointer border rounded-md p-2 m-2 border-slate-700 dark:border-slate-300">Download</li>
          <li className="lo:text-xl dark:text-slate-300 cursor-pointer border rounded-md p-2 m-2 border-slate-700 dark:border-slate-300">Contribute</li>
          <li className="lo:text-xl dark:text-slate-300 cursor-pointer border rounded-md p-2 m-2 border-slate-700 dark:border-slate-300">Form</li>
          <li className="lo:text-xl dark:text-slate-300 cursor-pointer border rounded-md p-2 m-2 border-slate-700 dark:border-slate-300">FAQs</li>
        </ul>
      </div>

    </div>
  );
};

export default QuickLinks;