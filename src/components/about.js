const AboutUs = () => {
  return (
    <div className=" m-5">
      <h3 className="mb-3">
        Hey! This is Aayushi Agrawal, who is trying to learn and get more
        command in coding skill. Trying to get up on my feet again on my own.
      </h3>
      <p>
        This app is created from scratch using parcel w/o create-react-app which
        everything readymade. Created a swiggy like app using Swiggy's live API
        using latest React 18 updated APIs/functions. <br />
        My main objective is to try out everything what React is providing with
        latest updates here in this app. <br />
        <br />
        That's about me. How about you? ☺️
      </p>
      <br />
      <br />
      <div>
        <h3 className="my-3 text-xl text-slate-950" >Things I've used to build this app: </h3>
        <h4 className="font-bold text-xl text-slate-950">
          Router:{" "}
          <span className="font-normal text-md text-slate-600">
            `react-router-dom`
          </span>
        </h4>
        <h4 className="font-bold text-xl text-slate-950">
          Bundler:{" "}
          <span className="font-normal text-md text-slate-600">`parcel`</span>
        </h4>
        <h4 className="font-bold text-xl text-slate-950">
          Styles:{" "}
          <span className="font-normal text-md text-slate-600">
            tailwind.css
          </span>
        </h4>
        <h4 className="font-bold text-xl text-slate-950">
          Dynamic Loading:{" "}
          <span className="font-normal text-md text-slate-600">
            using Lazy loading & Suspense
          </span>{" "}
        </h4>
        <h4 className="font-bold text-xl text-slate-950">
          APIs:{" "}
          <span className="font-normal text-md text-slate-600">
            using Swiggy live API
          </span>
        </h4>
        <h4 className="font-bold text-xl text-slate-950">Data Management Store: <span className="font-normal text-md text-slate-600">Redux</span></h4>
        <h4 className="font-bold text-xl text-slate-950">Created Custom React Hooks: <span className="font-normal text-md text-slate-600">using React Hooks `useState` `useEffect`</span> </h4>
      </div>
    </div>
  );
};

export default AboutUs;
