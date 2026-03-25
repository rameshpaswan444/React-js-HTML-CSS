import { lazy, Suspense , useState} from "react";

//import LazyLoading from "./LazyLoading";
const LazyLoading = lazy(() => import("./LazyLoading"));

function LazyLoadingmain() {

    const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>Lazy Loading in React js</h1>
      {
        load ?<Suspense fallback={<h3>Loading...</h3>}><LazyLoading/></Suspense>:null
          
        
      }
      <button  onClick={()=>setLoad(true)}>load user</button>
     
    </div>
  )
}
export default LazyLoadingmain;
